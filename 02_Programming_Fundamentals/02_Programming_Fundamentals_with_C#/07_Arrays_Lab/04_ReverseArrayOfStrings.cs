using System;

class MainClass {
  public static void Main () {
    
    string[] arr = Console.ReadLine().Split(" ");
    int lenInt = arr.Length;
    double halfLen = lenInt / 2;
    int halfLenInt = (int)Math.Floor(halfLen); // Math.Floor returns Double

    for(int i = 0; i < halfLenInt; i++) {
      string temp = arr[i];
      arr[i] = arr[arr.Length - 1 - i];
      arr[arr.Length - 1 - i] = temp;
    }

    Console.WriteLine(String.Join(" ", arr));

  }
}