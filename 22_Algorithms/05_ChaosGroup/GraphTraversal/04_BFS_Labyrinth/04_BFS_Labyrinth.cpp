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

	struct sNode {
		bool bObstacle = false;  // Is the node an obstruction?
		bool bVisited = false;   // Have we searched this node before?
		int y;
		int x;
		sNode* parent = nullptr; // Node connecting to this node that offers shortest parent
	};

	bool _hasPath(sNode *nextNode) {
		int y = nextNode->y;
		int x = nextNode->x;

		if (this->maze[y][x] == '*') {
			return false; // there is a wall, no path ahead
		}

		//if (nextNode.bVisited) {
		//
		//}

		if (this->maze[y][x] == '.') {
			return false; // we have been here already, escape endless loop
		}

		if (this->maze[y][x] == 's') {
			return false; // we have been here already, escape endless loop
		}

		return true;

	}

	void _findExit() {

		sNode sNodesArr[14][14];  // Declare an array to store all Nodes
		for (int y = 0; y < 14; y++) {
			for (int x = 0; x < 14; x++)
			{
				sNodesArr[y][x].y = y; // ...because we give each node its own coordinates
				sNodesArr[y][x].x = x;
			}
		}

		sNode* endNode = nullptr; // Declare a pointer to the end of the maze, which at the beginning is null pointer
		queue<sNode*> nodesQueue;  // Declare a Queue for the BFS Algorithm
		sNodesArr[1][1].bVisited = true;
		nodesQueue.push(&sNodesArr[1][1]); // Enqueue the Node from which we start the search

		while (!nodesQueue.empty()) {

			sNode* currentNode = nodesQueue.front(); nodesQueue.pop();
			int currentY = currentNode->y;
			int currentX = currentNode->x;

			if (this->maze[currentY][currentX] == 'e') { // we have found an exit
				endNode = &sNodesArr[currentY][currentX];
				break;
			}
			else {
				this->maze[currentY][currentX] = '.'; // mark the visited cell
				currentNode->bVisited = true;

				sNode* nextNodeUp = &sNodesArr[currentY - 1][currentX];
				sNode* nextNodeDown = &sNodesArr[currentY + 1][currentX];
				sNode* nextNodeLeft = &sNodesArr[currentY][currentX - 1];
				sNode* nextNodeRight = &sNodesArr[currentY][currentX + 1];

				if (this->_hasPath(nextNodeUp)) { // check up
					
					nextNodeUp->parent = &sNodesArr[currentY][currentX];
					nodesQueue.push(nextNodeUp);
				}
				if (this->_hasPath(nextNodeDown)) { // check down
			
					nextNodeDown->parent = &sNodesArr[currentY][currentX];
					nodesQueue.push(nextNodeDown);
				}
				if (this->_hasPath(nextNodeLeft)) { // check left
					
					nextNodeLeft->parent = &sNodesArr[currentY][currentX];
					nodesQueue.push(nextNodeLeft);
				}
				if (this->_hasPath(nextNodeRight)) { // check right
				
					nextNodeRight->parent = &sNodesArr[currentY][currentX];
					nodesQueue.push(nextNodeRight);
				}
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
		while (true) {
			int innerY = endNode->y;
			int innerX = endNode->x;
			this->maze[innerY][innerX] = '#';
			if (innerY == 1 && innerX == 1) { break; }

			endNode = endNode->parent;
		}

		cout << endl;
		for (int i = 0; i < 14; i++)
		{
			for (int j = 0; j < 14; j++)
			{
				cout << maze[i][j] << " ";
			}
			cout << endl;
		}
		cout << endl;

	}

public:

	void findExit() {
		this->_findExit();
	}

};

int main()
{
	Labyrinth labyrinth;
	labyrinth.findExit();

}