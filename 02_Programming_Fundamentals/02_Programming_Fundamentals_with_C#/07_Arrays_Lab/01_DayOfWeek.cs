using System;

class MainClass {
  public static void Main () {
    
    string[] WeekArr = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };
    
    int dayNumber = int.Parse(Console.ReadLine());

    if (dayNumber - 1 >= 0 && dayNumber - 1 < WeekArr.Length) {
      Console.WriteLine(WeekArr[dayNumber - 1]);
    } else {
      Console.WriteLine("Invalid Day!");
    }

  }
}