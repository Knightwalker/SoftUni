#ifndef ORDERED_INSERTER_H 
#define ORDERED_INSERTER_H

#include "Company.h"
#include <vector>;

class OrderedInserter {
	std::vector<const Company*>& companies;

public:
	OrderedInserter(std::vector<const Company*>& companies) : companies(companies) {}

	void insert(const Company* company) {
		// start checking all iterated companies ID and if an iterated company ID is higher than the current inserted company ID, insert the current company at the iterated company position, relocating all the elements that were after position to their new positions.
		auto it = this->companies.begin();
		while (it != this->companies.end()) {
			if ((*it)->getId() > company->getId()) {
				this->companies.insert(it, company);
				return;
			}
			it++;
		}
		// if no condition was met, simply add the company at the end.
		companies.push_back(company);
	}

};

#endif // !ORDERED_INSERTER_H