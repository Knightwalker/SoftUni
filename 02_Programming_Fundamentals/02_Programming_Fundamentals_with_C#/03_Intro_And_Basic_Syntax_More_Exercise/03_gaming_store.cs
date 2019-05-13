using System;

class MainClass {
  public static void Main (string[] args) {

  double moneyBalance = double.Parse(Console.ReadLine());
  double moneySpend = 0;
  string input = "";

  while(true) {
    input = Console.ReadLine();
    if (input == "Game Time") { 
      break; 
    } else if (moneyBalance <= 0) {
      break;
    } else if (input == "OutFall 4") { 
      if (moneyBalance >= 39.99) {
        moneyBalance -= 39.99; moneySpend += 39.99;
        Console.WriteLine("Bought OutFall 4");
      } else {
        Console.WriteLine("Too Expensive");
      }
    } else if (input == "CS: OG") { 
      if (moneyBalance >= 15.99) {
        moneyBalance -= 15.99; moneySpend += 15.99;
        Console.WriteLine("Bought CS: OG");
      } else {
        Console.WriteLine("Too Expensive");
      }
    } else if (input == "Zplinter Zell") { 
      if (moneyBalance >= 19.99) {
        moneyBalance -= 19.99; moneySpend += 19.99;
        Console.WriteLine("Bought Zplinter Zell");
      } else {
        Console.WriteLine("Too Expensive");
      }
    } else if (input == "Honored 2") { 
      if (moneyBalance >= 59.99) {
        moneyBalance -= 59.99; moneySpend += 59.99;
        Console.WriteLine("Bought Honored 2");
      } else {
        Console.WriteLine("Too Expensive");
      }
    } else if (input == "RoverWatch") { 
      if (moneyBalance >= 29.99) {
        moneyBalance -= 29.99; moneySpend += 29.99;
        Console.WriteLine("Bought RoverWatch");
      } else {
        Console.WriteLine("Too Expensive");
      }
    } else if (input == "RoverWatch Origins Edition") { 
      if (moneyBalance >= 39.99) {
        moneyBalance -= 39.99; moneySpend += 39.99;
        Console.WriteLine("Bought RoverWatch Origins Edition");
      } else {
        Console.WriteLine("Too Expensive");
      }
    } else { 
      Console.WriteLine("Not Found"); 
    }
  
  }

  if (moneyBalance <= 0) { 
    Console.WriteLine("Out of money!"); 
  } else {
    Console.WriteLine($"Total spent: ${moneySpend}. Remaining: ${moneyBalance:F2}");
  }
  
  }
}