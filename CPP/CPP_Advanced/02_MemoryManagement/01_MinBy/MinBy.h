#ifndef MIN_BY_H
#define MIN_BY_H

std::string minBy(std::vector<std::string> values, bool (*lessThan)(const std::string& a, const std::string& b)) {

	std::string minValue = values[0];
	for (int i = 1; i < values.size(); i++) {
		if (lessThan(values[i], minValue)) {
			minValue = values[i];
		}
	}
	return minValue;
}

#endif // !MIN_BY_H


