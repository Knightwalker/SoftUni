#include <iostream>
#include <string>
using namespace std;

int main() {
  bool bookFound = false;
  string book;
  getline(cin, book);

  int librarySpace = 0;
  cin >> librarySpace;

  int counter = 0;
  string bookSearching;

  for (int i = 0; i <= librarySpace; i++) {
    getline(cin, bookSearching);
    counter++;

    if (bookSearching == book) {
      bookFound = true;
      break;
    }
  }

  if (bookFound == true) {
    cout << "You checked " << counter - 2 << " books and found it." << endl;
  } else {
    cout << "The book you search is not here!" << endl;
    cout << "You checked " << counter - 1 << " books." << endl;
  }
        
  return 0;

}