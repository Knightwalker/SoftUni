using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dictStudents = new Dictionary<string, List<double>>();

        int n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            string name = Console.ReadLine();
            double grade = double.Parse(Console.ReadLine());

            if (!dictStudents.ContainsKey(name))
            {
                dictStudents[name] = new List<double>();
            }
            dictStudents[name].Add(grade);

        }

        foreach (var item in dictStudents.ToList())
        {
            double averageGrade = item.Value.Sum() / item.Value.Count;
            if (averageGrade < 4.50)
            {
                dictStudents.Remove(item.Key);
            }
        }

        foreach (var item in dictStudents.OrderByDescending(x => x.Value.Sum() / x.Value.Count))
        {
            Console.WriteLine($"{item.Key} -> {(item.Value.Sum() / item.Value.Count):f2}");
        }

    }
}