#include <iostream>
#include <queue>
#include <chrono>
#include <thread>

using std::cout;
using std::endl;
using std::queue;

class Labyrinth {
private:

	char maze[14][14]{
		{'*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'},
		{'*', 's', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'},
		{'*', ' ', '*', '*', '*', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*'},
		{'*', ' ', '*', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'},
		{'*', ' ', '*', ' ', '*', '*', '*', '*', ' ', '*', ' ', '*', '*', '*'},
		{'*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'},
		{'*', ' ', '*', ' ', '*', ' ', '*', '*', '*', '*', '*', '*', ' ', '*'},
		{'*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', '*'},
		{'*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', '*', ' ', '*', ' ', '*'},
		{'*', ' ', '*', '*', '*', '*', '*', ' ', ' ', '*', ' ', '*', ' ', '*'},
		{'*', ' ', '*', ' ', ' ', ' ', '*', '*', ' ', '*', ' ', ' ', ' ', '*'},
		{'*', ' ', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'},
		{'*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'},
		{'*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', 'e', '*'}
	};

	int steps = 0;

	bool _hasPath(int y, int x) {

		if (this->maze[y][x] == '*') {
			return false; // there is a wall, no path ahead
		}

		if (this->maze[y][x] == '.') {
			return false; // we have been here already, escape endless loop
		}

		if (this->maze[y][x] == 's') {
			return false; // we have been here already, escape endless loop
		}

		return true;

	}

	void _findExit(int y, int x) {

		struct CoordinatesNode {
			struct ParentCoordinatesNode {
				int y;
				int x;
			};
			int y;
			int x;
			ParentCoordinatesNode parentNode;
		};

		queue<CoordinatesNode> nodesQueue;

		CoordinatesNode coordinatesNode;
		coordinatesNode.y = 1;
		coordinatesNode.x = 1;
		coordinatesNode.parentNode.y = 1;
		coordinatesNode.parentNode.x = 1;
		nodesQueue.push(coordinatesNode);

		while (!nodesQueue.empty()) {

			CoordinatesNode currentCoordinatesNode = nodesQueue.front(); nodesQueue.pop();
			int currentY = currentCoordinatesNode.y;
			int currentX = currentCoordinatesNode.x;

			if (this->maze[currentY][currentX] == 'e') { // we have found an exit
				return;
			}
			else {
				this->maze[currentY][currentX] = '.'; // mark the visited cell
			}

			if (this->_hasPath(currentY - 1, currentX)) { // check up
				CoordinatesNode coordinatesNode;
				coordinatesNode.y = currentY - 1;
				coordinatesNode.x = currentX;
				coordinatesNode.parentNode.y = currentY;
				coordinatesNode.parentNode.x = currentX;
				nodesQueue.push(coordinatesNode);
			}
			if (this->_hasPath(currentY + 1, currentX)) { // check down
				CoordinatesNode coordinatesNode;
				coordinatesNode.y = currentY + 1;
				coordinatesNode.x = currentX;
				coordinatesNode.parentNode.y = currentY;
				coordinatesNode.parentNode.x = currentX;
				nodesQueue.push(coordinatesNode);
			}
			if (this->_hasPath(currentY, currentX - 1)) { // check left
				CoordinatesNode coordinatesNode;
				coordinatesNode.y = currentY;
				coordinatesNode.x = currentX - 1;
				coordinatesNode.parentNode.y = currentY;
				coordinatesNode.parentNode.x = currentX;
				nodesQueue.push(coordinatesNode);
			}
			if (this->_hasPath(currentY, currentX + 1)) { // check right
				CoordinatesNode coordinatesNode;
				coordinatesNode.y = currentY;
				coordinatesNode.x = currentX + 1;
				coordinatesNode.parentNode.y = currentY;
				coordinatesNode.parentNode.x = currentX;
				nodesQueue.push(coordinatesNode);
			}

			for (int i = 0; i < 14; i++)
			{
				for (int j = 0; j < 14; j++)
				{
					cout << maze[i][j] << " ";
				}
				cout << endl;
			}
			cout << endl;
			cout << endl;
			std::this_thread::sleep_for(std::chrono::milliseconds(500));

		}

		// Part 2 - Print the path backwards

	}

public:

	void findExit() {
		this->_findExit(1, 1);
	}

};

int main()
{
	Labyrinth labyrinth;
	labyrinth.findExit();

}