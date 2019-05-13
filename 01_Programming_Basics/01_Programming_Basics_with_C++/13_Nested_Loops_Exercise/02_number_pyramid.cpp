#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int counter = 0;
    bool END = false;

    for(int i = 1; i <= n; i++) 
    {
      if(END == true)
      {
        break;
      }
      for(int i2 = 1; i2 <= i; i2++) {
        
        cout << counter + 1 << " ";
        counter++;
        if(counter == n)
        {
          END = true;
          break;
        }
      }
      cout << endl;
    }

    return 0;
}