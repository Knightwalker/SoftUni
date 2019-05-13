using System;

public class VendingMachine 
{

  public static void Main () 
  {

    string inputCoins = "";
    decimal coins = 0;
    decimal totalCoins = 0;

    string inputProducts = "";
    decimal nutsPrice = (decimal)2.0;
    decimal waterPrice = (decimal)0.7;
    decimal crispsPrice = (decimal)1.5; 
    decimal sodaPrice = (decimal)0.8;
    decimal cokePrice = (decimal)1.0;

    while (true) 
    {
      inputCoins = Console.ReadLine();
      if (inputCoins == "Start") { break; }
      coins = decimal.Parse(inputCoins);

      if (coins == (decimal)0.1 || coins == (decimal)0.2 || coins == (decimal)0.5 || coins == (decimal)1 || coins == (decimal)2) 
      {
        totalCoins += coins;
      } 
      else 
      {
        Console.WriteLine("Cannot accept {0}", coins);
      }
    }

    while (true) 
    {
      inputProducts = Console.ReadLine();
      if (inputProducts == "End") { break; }

      if (inputProducts == "Nuts") 
      {
        if (totalCoins >= nutsPrice) 
        { 
          Console.WriteLine("Purchased nuts"); 
          totalCoins -= nutsPrice;
        } 
        else 
        { 
          Console.WriteLine("Sorry, not enough money"); 
        }
      }
      else if (inputProducts == "Water") 
      {
        if (totalCoins >= waterPrice) 
        { 
          Console.WriteLine("Purchased water");
          totalCoins -= waterPrice; 
        } 
        else 
        { 
          Console.WriteLine("Sorry, not enough money"); 
        }
      }
      else if (inputProducts == "Crisps") 
      {
        if (totalCoins >= crispsPrice) 
        { 
          Console.WriteLine("Purchased crisps"); 
          totalCoins -= crispsPrice;
        } 
        else 
        { 
          Console.WriteLine("Sorry, not enough money"); 
        }
      }
      else if (inputProducts == "Soda") 
      {
        if (totalCoins >= sodaPrice) 
        { 
          Console.WriteLine("Purchased soda"); 
          totalCoins -= sodaPrice;
        } 
        else 
        { 
          Console.WriteLine("Sorry, not enough money");
        }
      }
      else if (inputProducts == "Coke") 
      {
        if (totalCoins >= cokePrice) 
        { 
          Console.WriteLine("Purchased coke"); 
          totalCoins -= cokePrice;
        } 
        else 
        { 
          Console.WriteLine("Sorry, not enough money"); 
        }
      }
      else 
      {
        Console.WriteLine("Invalid product");
      }
    }

    Console.WriteLine("Change: {0:F2}", totalCoins);

  }

}
