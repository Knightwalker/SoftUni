#include <iostream>
#include <vector>
#include <map>
#include <chrono>
#include <thread>

using std::cout;
using std::endl;
using std::vector;
using std::map;

class Labyrinth {
private:

	char maze[14][14]{
		{'*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'},
		{'*', 's', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'},
		{'*', ' ', '*', '*', '*', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*'},
		{'*', ' ', '*', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'},
		{'*', ' ', '*', ' ', '*', '*', ' ', '*', ' ', '*', ' ', '*', '*', '*'},
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

	struct Point {
		int y;
		int x;
	};

	vector<Point> pathVect;
	map<int, vector<Point>> pathsDict;
	int steps = 0;

	bool _hasPath(int y, int x) {
		if (this->maze[y][x] == '*') {
			return false; // there is a wall, no path ahead
		}

		if (this->maze[y][x] == '.') {
			return false; // we have been here already, escape endless loop
		}

		if (this->maze[y][x] == 'e') {					
			this->pathsDict[this->steps] = this->pathVect; // save the current exit and the number of steps it takes to reach it
			return false; // search for more exits
		}

		return true;

	}
	
	void _findExit(int y, int x) {

		if (this->_hasPath(y, x) == false) {
			return;
		}

		this->maze[y][x] = '.'; // mark the visited cell
		this->pathVect.push_back({ y, x });
		this->steps++;

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
		std::this_thread::sleep_for(std::chrono::milliseconds(200));

		this->_findExit(y - 1, x); // check up
		this->_findExit(y, x - 1); // check left
		this->_findExit(y, x + 1); // check right
		this->_findExit(y + 1, x); // check down

		this->maze[y][x] = ' '; // backtrack happens here
		this->pathVect.pop_back();
		this->steps--;
	}

	void _drawShortestExit() {

		vector<Point> shortestPath = this->pathsDict.begin()->second;
		this->maze[shortestPath[0].y][shortestPath[0].x] = 's';
		for (int i = shortestPath.size() - 1; i >= 1; i--) {
			int y = shortestPath[i].y;
			int x = shortestPath[i].x;
			this->maze[y][x] = '#';

			for (int i = 0; i < 14; i++)
			{
				for (int j = 0; j < 14; j++)
				{
					cout << maze[i][j] << " ";
				}
				cout << endl;
			}
			cout << endl;
			std::this_thread::sleep_for(std::chrono::milliseconds(200));
		}

	}

public:
	void findExit() {
		this->_findExit(1, 1);
		this->_drawShortestExit();
	}

};

int main()
{
	Labyrinth labyrinth;
	labyrinth.findExit();

}