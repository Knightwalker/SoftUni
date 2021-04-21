#include <iostream>
#include <vector>

struct Coords {
	Coords* parent = nullptr;
	int x;
	int y;
};

const int testSize = 10;

void testCoordsInVector() {
	std::vector<Coords> allCoords;
	allCoords.reserve(testSize); // if this is not done here, vector will re-allocate and pointers will be invalid
	allCoords.push_back(Coords{ nullptr, 0, 0 });

	for (int c = 0; c < testSize - 1; c++) {
		Coords& lastInserted = allCoords.back();
		Coords child{ &lastInserted, lastInserted.x + 1, lastInserted.y + 1 };
		allCoords.push_back(child);
	}

	Coords& last = allCoords.back();
	Coords* iterator = &last;
	std::cout << "CoordsInVector:\n";
	while (iterator) {
		std::cout << "x = " << iterator->x << " y = " << iterator->y << std::endl;
		iterator = iterator->parent;
	}
	// all memory here is managed by the std::vector<Coords> and all pointers point to it's elements
}

void testCoordsOnHeap() {
	Coords* current = new Coords{ nullptr, 0, 0 };
	for (int c = 0; c < testSize - 1; c++) {
		Coords* toAdd = new Coords{ current, current->x + 1, current->y + 1 };
		current = toAdd;
	}

	Coords* iterator = current;
	std::cout << "CoordsOnHeap:\n";
	while (iterator) {
		std::cout << "x = " << iterator->x << " y = " << iterator->y << std::endl;
		iterator = iterator->parent;
	}

	// we need to free the heap allocated memory manually!
	iterator = current;
	while (iterator) {
		Coords* toDelete = iterator;
		iterator = iterator->parent;
		delete toDelete;
	}
}

int main()
{
	testCoordsInVector();
	testCoordsOnHeap();

	getchar();
	return 0;
}