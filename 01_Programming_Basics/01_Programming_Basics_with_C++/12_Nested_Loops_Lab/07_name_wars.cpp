#include <iostream>
#include <string>
using namespace std;

int main() {

  string name = "";
  int MaxSum = 0;
  string MaxName = "";
  while(true)
  {
    getline(cin, name);
    if(name == "STOP")
    {
      break;
    }

    int sum = 0;

    for(int i = 0; i < name.length(); i++)
    {
      sum += (char)name[i];
    }
    if(MaxSum < sum)
    {
      MaxSum = sum;
      MaxName = name;
    }
    
  }
  cout << "Winner is " << MaxName << " - " << MaxSum << "!" << endl;

  return 0;
}