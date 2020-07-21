#pragma once

bool isInteger(const std::string& str) {
	int strLen = str.length();

	if (!isdigit(str[0])) {
		if (str[0] != '+' && str[0] != '-') {
			return false;
		}
	}

	for (int i = 1; i < strLen; i++) {
		if (!isdigit(str[i])) {
			return false;
		}
	}

	return true;
}

bool tryParse(std::string s, int& n) {

	if (isInteger(s)) {
		n = std::stoi(s);
		return true;
	}

	return false;
}