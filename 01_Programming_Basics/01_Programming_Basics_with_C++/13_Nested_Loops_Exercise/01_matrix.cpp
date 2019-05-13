#include <iostream>
using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;

    for(int i = a; i <= b; i++)
    {
      for(int i2 = a; i2 <= b; i2++)
      {
        for(int i3 = c; i3 <= d; i3++)
        {
          for(int i4 = c; i4 <= d; i4++)
          {
            if(((i + i4) == (i2 + i3)) && (i!= i2 && i3 != i4))
            {
              cout << i << i2 << endl;
              cout << i3 << i4 << endl;
              cout << endl;
            }
          }
        }
      }
    }
  
  return 0;
}