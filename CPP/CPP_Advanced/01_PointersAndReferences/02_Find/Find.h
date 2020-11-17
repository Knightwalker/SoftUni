#ifndef FIND_H
#define FIND_H

#include "Company.h"
#include "vector"

Company* find(std::vector<Company*>& companies, int& searchId) {

	for (int i = 0; i < companies.size(); i++) {
		auto currentCompany = *companies[i];
		if (searchId == currentCompany.getId()) {
			return companies[i];
		}
	}

	return nullptr;
}

#endif // !FIND_H