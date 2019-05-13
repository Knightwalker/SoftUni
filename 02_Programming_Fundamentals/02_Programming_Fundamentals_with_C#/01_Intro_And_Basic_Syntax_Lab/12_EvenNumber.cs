using System;

class EvenNumber 
{
    static void Main()
    {
      int n = 0;

      while(true) 
      {
        n = int.Parse(Console.ReadLine());

        if (n % 2 == 0) 
        {
          Console.WriteLine($"The number is: {Math.Abs(n)}");
          break;
        } 
        else 
        {
          Console.WriteLine("Please write an even number.");
        }

      }
    }
}
