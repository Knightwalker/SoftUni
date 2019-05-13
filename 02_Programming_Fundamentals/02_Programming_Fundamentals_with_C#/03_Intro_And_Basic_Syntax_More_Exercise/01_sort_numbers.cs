using System;

class MainClass {
  public static void Main (string[] args) {
    
    int n = 0;
    int[] arr = new int[3];

    for (int i = 0; i < 3; i++) {
      n = int.Parse(Console.ReadLine()); 
      arr[i] = n;
    }

    Array.Sort<int>( arr,
    delegate(int a, int b)
    {
      return b - a; //Normal compare is a-b
    }); 
  
    foreach (int numbers in arr)
    {
        Console.WriteLine(numbers);
    }

  }
}