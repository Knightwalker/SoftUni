#include <iostream>
using namespace std;

int main() {
  int n = 0;
  int sum = 0;
  cin >> n >> sum;
  cin.ignore();

    for(int x1 = 1; x1 <= 9; x1++)
    {      
      for(int x2 = 1; x2 <= 9; x2++)
      {
        for(int x3 = 1; x3 <= 9; x3++)
        {
          for(int x4 = 1; x4 <= 9; x4++)
          {
            for(int x5 = 1; x5 <= 9; x5++)
            {
              for(int x6 = 1; x6 <= 9; x6++)
              {
                sum = x1 * x2 * x3 * x4 * x5 * x6;
                if(sum == n)
                {
                  cout << x1 << "" << x2 << "" << x3 << "" << x4 << "" << x5 << "" << x6 << " ";
                }
              }
            }
          }
        }
      }
    }

    return 0;

}