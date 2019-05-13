using System;

public class StudentInformation 
{
  public static void Main () 
  {
    string studentName = Console.ReadLine();
    int studentAge = int.Parse(Console.ReadLine());
    double studentGrade = double.Parse(Console.ReadLine());

    Console.WriteLine($"Name: {studentName}, Age: {studentAge}, Grade: {studentGrade:F2}");
  }
}