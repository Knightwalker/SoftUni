using System;
using System.Linq;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());
            var studentsDict = new Dictionary<string, List<double>>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ");
                string student = input[0];
                double grade = double.Parse(input[1]);
                if (!studentsDict.ContainsKey(student))
                {
                    studentsDict.Add(student, new List<double>());
                }
                studentsDict[student].Add(grade);
            }

            foreach (var student in studentsDict)
            {
                Console.Write($"{student.Key} -> ");
                foreach (var grade in student.Value)
                {
                    Console.Write($"{grade:F2} ");
                }
                Console.Write($"(avg: {student.Value.Average():F2})");
                Console.WriteLine();
            }

        }

    }
}