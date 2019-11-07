#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

class WordGroup {
	vector<string> words;
	bool sorted;

	void sortWords() {
		sort(this->words.begin(), this->words.end());
		this->sorted = true;
	}
public:
	WordGroup() : sorted(false) {}

	void addWord(const string& word) {
		words.push_back(word);
		this->sorted = false;
	}

	string getSortedWord(int index) {
		if (!this->sorted) {
			this->sortWords();
		}

		return this->words[index];
	}
};

int main()
{
	map<string, int> wordsDict;
	while (true) {
		string word = ""; cin >> word;
		if (word == ".") { break; }
		wordsDict[word]++;
	}

	map<int, WordGroup> wordsDictByCount;
	for (auto wordCountPair : wordsDict) {
		wordsDictByCount[wordCountPair.second].addWord(wordCountPair.first);
	}

	int n = 0; cin >> n;
	for (int i = 0; i < n; i++) {
		vector<string> wordsVect;
		int occurrenceCount; cin >> occurrenceCount;
		int index; cin >> index;

		auto groupIter = wordsDictByCount.find(occurrenceCount);
		if (groupIter != wordsDictByCount.end()) {
			cout << groupIter->second.getSortedWord(index) << endl;
		}
		else {
			cout << "." << endl;
		}
	
	}

	return 0;

}