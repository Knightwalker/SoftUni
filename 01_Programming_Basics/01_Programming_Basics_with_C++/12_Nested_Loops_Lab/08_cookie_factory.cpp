#include <iostream>
#include <string>
using namespace std;

int main() {

  int n = 0;
  cin >> n;
  cin.ignore();
  
  for(int i = 0; i < n; i++)
  {  
    bool flour = false;
    bool eggs = false;
    bool sugar = false;
    
    while(true)
    {
      string products = "";
      getline(cin, products);

      if(products == "flour")
      {
        flour = true;
      } else if(products == "eggs")
      {
        eggs = true;
      } else if(products == "sugar")
      {
        sugar = true;
      } else if(products == "Bake!")
      {
        if(flour == true && eggs == true && sugar == true)
        {
          cout << "Baking batch number " << i + 1 << "..." << endl;
          break;
        } else
        {
          cout << "The batter should contain flour, eggs and sugar!" << endl;
          continue;
        }
      }
    }
  }
  
  return 0;

}