#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <map>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::unordered_map;
using std::map;

void splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter);

class Visitor {
private:
	string name;
	int age;

public:

	Visitor() {}

	Visitor(string name, int age)
	{
		this->name = name;		
		this->age = age;
	}

	string GetName() {
		return this->name;
	}

	int GetAge() {
		return this->age;
	}

};

int main() {

	unordered_map<string, Visitor> database;
	map<string, int> names;
	map<int, vector<string>> ages;

	while (true) {
		string inputString = ""; getline(cin, inputString);
		if (inputString == "end") { break; }

		vector<string> stringVect; splitStringToStringVector(stringVect, inputString, ' ');
		string command = stringVect[0];

		if (command == "entry") {
			string id = stringVect[1];
			string name = stringVect[2];
			int age = stoi(stringVect[3]);
		
			unordered_map<string, Visitor>::iterator it = database.find(id);
			if (it == database.end()) {
				//std::cout << "ID Not Found" << std::endl;
				Visitor visitor = Visitor(name, age);
				database[id] = visitor;
				names[name]++;
				ages[age].push_back(name);
			}
			
		}
		else if (command == "name") {
			string name = stringVect[1];
			int counter = 0;

			cout << names[name] << endl;

		} else if (command == "age") {
			int index1 = stoi(stringVect[1]);
			int index2 = stoi(stringVect[2]);
			int counter = 0;

			for (int i = index1; i < index2; i++) {

				int count = ages.count(i);
				if (count > 0) {
					counter += ages[i].size();
				}

			}

			cout << counter << endl;

		}

	}

	return 0;
}

void splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter) {
	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			originalVector.push_back(element);
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	originalVector.push_back(element);
}