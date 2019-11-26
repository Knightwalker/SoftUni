#include <iostream>
#include <cstring>
const char WALL = 'X';
const int SIZE = 10;

/// Trivial recursive implementation passing all state trough arguments
namespace Trivial
{
	bool hashPathDFS(const char map[SIZE][SIZE], bool visited[SIZE][SIZE], int startX, int startY, int endX, int endY) {
		if (startX < 0 || startX >= SIZE || startY < 0 || startY >= SIZE) {
			return false;
		}

		if (visited[startY][startX]) {
			return false;
		}
		if (map[startY][startX] == WALL) {
			return false;
		}

		if (startX == endX && startY == endY) {
			return true;


			for (size_t i = 0; i < SIZE; i++)
			{
				for (size_t j = 0; j < SIZE; j++)
				{
					std::cout << map[i][j] << std::endl;
				}
				std::cout << std::endl;
			}

		}

		visited[startY][startX] = true;
		if (hashPathDFS(map, visited, startX, startY - 1, endX, endY)) {
			return true;
		}

		if (hashPathDFS(map, visited, startX, startY + 1, endX, endY)) {
			return true;
		}

		if (hashPathDFS(map, visited, startX - 1, startY, endX, endY)) {
			return true;
		}

		if (hashPathDFS(map, visited, startX + 1, startY, endX, endY)) {
			return true;
		}

		return false;
	}

	bool hashPathDFS(const char map[SIZE][SIZE], int startX, int startY, int endX, int endY) {
		bool visited[SIZE][SIZE];
		memset(visited, 0, sizeof(visited));
		return hashPathDFS(map, visited, startX, startY, endX, endY);
	}
}

/// Introduce context structure to hold the unchanging state for the recursive call and pass only the arguments that change
namespace ReduceState
{

	struct DFSState {

		typedef const char MapArray[SIZE][SIZE];

		const MapArray& map; ///< Reference to 2d array with sizes SIZE/SIZE to avoid copy-ing the input data
		bool visited[SIZE][SIZE]; ///< The bookkeeping information about which cells are visited
		int endX;
		int endY;

		DFSState(const char map[SIZE][SIZE], int endX, int endY)
			: map(reinterpret_cast<MapArray&>(map))
			, endX(endX)
			, endY(endY)
		{
			memset(visited, 0, sizeof(visited));
		}

		bool hashPathDFS(int startX, int startY) {
			if (startX < 0 || startX >= SIZE || startY < 0 || startY >= SIZE) {
				return false;
			}

			if (visited[startY][startX]) {
				return false;
			}
			if (map[startY][startX] == WALL) {
				return false;
			}

			if (startX == endX && startY == endY) {
				return true;
			}

			visited[startY][startX] = true;
			if (hashPathDFS(startX, startY - 1)) {
				return true;
			}

			if (hashPathDFS(startX, startY + 1)) {
				return true;
			}

			if (hashPathDFS(startX - 1, startY)) {
				return true;
			}

			if (hashPathDFS(startX + 1, startY)) {
				return true;
			}

			return false;
		}
	};

	bool hashPathDFS(const char map[SIZE][SIZE], int startX, int startY, int endX, int endY) {
		DFSState state(map, endX, endY);
		return state.hashPathDFS(startX, startY);
	}
}

/// Move even the changing local state into the context to avoid passing passing any arguments, saving and restoring the "state" is now contained into the program itself
/// Don't actually do this
namespace NoState
{

	struct DFSState {

		typedef const char MapArray[SIZE][SIZE];

		const MapArray& map; ///< Reference to 2d array with sizes SIZE/SIZE to avoid copy-ing the input data
		bool visited[SIZE][SIZE]; ///< The bookkeeping information about which cells are visited
		int endX;
		int endY;

		/// These will be the variable state of the recursion and they will be modified before and after each call
		int startX;
		int startY;

		DFSState(const char map[SIZE][SIZE], int startX, int startY, int endX, int endY)
			: map(reinterpret_cast<MapArray&>(map))
			, endX(endX)
			, endY(endY)
			, startX(startX)
			, startY(startY)
		{
			memset(visited, 0, sizeof(visited));
		}

		bool hashPathDFS() {
			if (startX < 0 || startX >= SIZE || startY < 0 || startY >= SIZE) {
				return false;
			}

			if (visited[startY][startX]) {
				return false;
			}
			if (map[startY][startX] == WALL) {
				return false;
			}

			if (startX == endX && startY == endY) {
				return true;
			}

			visited[startY][startX] = true;
			--startY;
			const bool up = hashPathDFS();
			++startY;
			if (up) {
				return true;
			}

			++startY;
			const bool down = hashPathDFS();
			--startY;
			if (down) {
				return true;
			}

			--startX;
			const bool left = hashPathDFS();
			++startX;
			if (left) {
				return true;
			}

			++startX;
			const bool right = hashPathDFS();
			--startX;
			if (right) {
				return true;
			}

			return false;
		}
	};

	bool hashPathDFS(const char map[SIZE][SIZE], int startX, int startY, int endX, int endY) {
		DFSState state(map, startX, startY, endX, endY);
		return state.hashPathDFS();
	}
}


int main() {
	const char map[SIZE][SIZE] = {
		{ ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', 'X' },
		{ ' ', 'X', ' ', ' ', ' ', 'X', 'X', 'X', ' ', 'X' },
		{ ' ', 'X', 'X', 'X', ' ', ' ', ' ', 'X', ' ', 'X' },
		{ ' ', 'X', 'X', ' ', ' ', 'X', 'X', 'X', ' ', 'X' },
		{ ' ', 'X', ' ', ' ', 'X', 'X', 'X', 'X', ' ', 'X' },
		{ ' ', 'X', ' ', ' ', ' ', ' ', 'X', ' ', ' ', 'X' },
		{ ' ', 'X', 'X', 'X', 'X', ' ', 'X', ' ', 'X', 'X' },
		{ ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' ', 'X', 'X' },
		{ 'X', ' ', 'X', 'X', 'X', ' ', 'X', ' ', 'X', 'X' },
		{ 'X', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ' },
	};

	const bool trivial = Trivial::hashPathDFS(map, 0, 0, 9, 9);
	const bool reducedState = ReduceState::hashPathDFS(map, 0, 0, 9, 9);
	const bool noState = NoState::hashPathDFS(map, 0, 0, 9, 9);

	return 0;
}