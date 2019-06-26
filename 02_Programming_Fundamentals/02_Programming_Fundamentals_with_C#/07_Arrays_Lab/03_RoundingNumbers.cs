using System;
using System.Linq;

class MainClass {
  public static void Main () {
    
    double[] arr = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();
    
    for (int i = 0; i < arr.Length; i++) {
      double n = arr[i];
      double rounded = Math.Round (n, 0, MidpointRounding.AwayFromZero);
      Console.WriteLine(n + " => " + rounded);
    }

  }
}