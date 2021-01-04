#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <list>

#include "Company.h"
#include "RemoveInvalid.h"

std::vector<std::string> readStringsLine() {
	std::vector<std::string> values;

	std::string line;
	std::getline(std::cin, line);

	std::istringstream lineIn(line);

	std::string value;
	while (lineIn >> value) {
		values.push_back(value);
	}

	return values;
}

int main() {
	std::list<Company*> companies;
	std::vector<std::string> properties = readStringsLine();

	while (properties[0] != "end") {
		companies.push_back(new Company(std::stoi(properties[0]), properties[1]));
		properties = readStringsLine();
	}

	removeInvalid(companies);

	for (Company* c : companies) {
		std::cout << c->toString() << std::endl;
		delete c; // deallocating memory for all other companies. We release them after they are being used.
	}

	return 0;
}