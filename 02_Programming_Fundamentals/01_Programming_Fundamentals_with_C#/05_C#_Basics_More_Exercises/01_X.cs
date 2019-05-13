using System;

class MainClass {
  public static void Main (string[] args) {
    int n = int.Parse(Console.ReadLine());
    int counter1 = 0;
    int counter2 = n/2 - 1;

    for (int i = 0; i < n/2; i++) {
      Console.WriteLine(
        new string(' ', counter1) +
        new string('x', 1) +
        new string(' ', n - 2 - counter1 - counter1) +
        new string('x', 1) +
        new string(' ', counter1)
      );
      counter1++;
    }

    Console.WriteLine(
          new string(' ', n/2) +
          new string('x', 1) +
          new string(' ', n/2) 
    );

    for (int i = n/2; i > 0; i--) {
      Console.WriteLine(
        new string(' ', counter2) +
        new string('x', 1) +
        new string(' ', n - 2 - counter2 - counter2) +
        new string('x', 1) +
        new string(' ', counter2)
      );
      counter2--;
    }

  }
}