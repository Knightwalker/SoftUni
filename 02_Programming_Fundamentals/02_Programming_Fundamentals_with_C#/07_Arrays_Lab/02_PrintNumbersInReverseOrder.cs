using System;

class MainClass {
  public static void Main () {
    
    int n = int.Parse(Console.ReadLine());
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      int number = int.Parse(Console.ReadLine());
      arr[i] = number;
    }

    // print arr reversed
    string result = "";
    for (int i = arr.Length - 1; i >= 0; i--) {
      if (i != 0) { result += arr[i] + " "; }
      else { result += arr[i]; }
    }
    Console.WriteLine(result);

  }
}