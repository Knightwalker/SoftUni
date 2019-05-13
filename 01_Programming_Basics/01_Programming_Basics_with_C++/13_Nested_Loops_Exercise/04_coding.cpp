#include <iostream>
#include <string> 
using namespace std;

int main() {
    string n = "";
    getline(cin, n);

    int number = stoi(n);

    for(int i = 0; i < n.length(); i++) 
    {
      int num = number % 10;
      if(num == 0)
      {
        cout << "ZERO" << endl;
      } 
      else
      {
        for(int k = 0; k < num; k++)
        {
          cout << char(num+33);
          //Console.Write((char)(num + 33));        
        }
      cout << endl;
      }

      number = number/ 10;
    }

    return 0;
}