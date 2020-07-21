#ifndef FIND_H
#define FIND_H

#include "Company.h"
#include "vector"

Company* find(std::vector<Company*>& companies, int& searchId) {

	int companiesLen = companies.size();
	for (int i = 0; i < companiesLen; i++) {
		if (searchId == companies[i]->getId()) {
			return companies[i];
		}
	}

	return nullptr;
}

#endif // !FIND_H