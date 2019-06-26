using System;
using System.Linq;

class MainClass {
  public static void Main (string[] args) {
    
    int[] arr1 = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int[] arr2 = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

    int arr1sum = 0;
    int arr2sum = 0;
    bool checkIdentical = true;

    for (int i = 0; i < arr1.Length; i++) {

      arr1sum += arr1[i];
      arr2sum += arr2[i];

      if (arr1[i] != arr2[i]) {
        Console.WriteLine($"Arrays are not identical. Found difference at {i} index");
        checkIdentical = false;
        break;
      }

    }

    if (checkIdentical) {
      Console.WriteLine($"Arrays are identical. Sum: {arr1sum}");    
    }

  }
}