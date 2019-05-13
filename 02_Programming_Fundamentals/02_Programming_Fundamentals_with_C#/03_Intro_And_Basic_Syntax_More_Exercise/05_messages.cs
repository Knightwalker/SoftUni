using System;

class MainClass {
  public static void Main (string[] args) {
  
  int n = int.Parse(Console.ReadLine());
  string msg = "";

  for (int i = 0; i < n; i++) {
    int input = int.Parse(Console.ReadLine());

    if (input == 0) { msg += " "; }
    else if (input == 2) { msg += "a"; }
    else if (input == 22) { msg += "b"; }
    else if (input == 222) { msg += "c"; }
    else if (input == 3) { msg += "d"; }
    else if (input == 33) { msg += "e"; }
    else if (input == 333) { msg += "f"; }
    else if (input == 4) { msg += "g"; }
    else if (input == 44) { msg += "h"; }
    else if (input == 444) { msg += "i"; }
    else if (input == 5) { msg += "j"; }
    else if (input == 55) { msg += "k"; }
    else if (input == 555) { msg += "l"; }
    else if (input == 6) { msg += "m"; }
    else if (input == 66) { msg += "n"; }
    else if (input == 666) { msg += "o"; }
    else if (input == 7) { msg += "p"; }
    else if (input == 77) { msg += "q"; }
    else if (input == 777) { msg += "r"; }
    else if (input == 7777) { msg += "s"; }
    else if (input == 8) { msg += "t"; }
    else if (input == 88) { msg += "u"; }
    else if (input == 888) { msg += "v"; }
    else if (input == 9) { msg += "w"; }
    else if (input == 99) { msg += "x"; }
    else if (input == 999) { msg += "y"; }
    else if (input == 9999) { msg += "z"; }
  } 

  Console.WriteLine(msg);

  }
}