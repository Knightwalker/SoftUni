#ifndef PROFIT_REPORT_H
#define PROFIT_REPORT_H

#include "Company.h"
#include "ProfitCalculator.h"

#include <map>
#include <vector>
#include <string>
#include <sstream>

std::string getProfitReport(Company* fromInclusive, Company* toInclusive, std::map<int, ProfitCalculator>& profitCalculatorsByCompany) {
	std::ostringstream report;

	while (true) {
		int id = fromInclusive->getId();

		auto it = profitCalculatorsByCompany.find(id);
		if (it != profitCalculatorsByCompany.end()) {
			int profit = it->second.calculateProfit(*fromInclusive);

			report << fromInclusive->getName() << " = " << profit << std::endl;
		}

		if (fromInclusive++ == toInclusive) { break; }
	}

	return report.str();
}

#endif // !PROFIT_REPORT_H
