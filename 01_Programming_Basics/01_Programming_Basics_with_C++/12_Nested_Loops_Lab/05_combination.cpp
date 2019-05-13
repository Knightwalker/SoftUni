#include <iostream>
#include <string>
using namespace std;

int main() {

  int n;
  cin >> n;
  int sum =0;
  int combination = 0;

  for(int x1 = 0; x1 <= n; x1++)
  {
    
    for(int x2 = 0; x2 <= n; x2++)
    {
      for(int x3 = 0; x3 <= n; x3++)
      {
        for(int x4 = 0; x4 <= n; x4++)
        {
          for(int x5 = 0; x5 <= n; x5++)
          {
            sum = x1 + x2 + x3 + x4 + x5;
            if(sum == n)
            {
              combination++;
            }
          }
        }
      }
    }
  }
  cout << combination << endl;

}