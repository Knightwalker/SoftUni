using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var chemicalElementsSortedSet = new SortedSet<string>();

            for (int i = 0; i < n; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" ");
                foreach (var item in inputArr)
                {
                    chemicalElementsSortedSet.Add(item);
                }
            }

            Console.WriteLine(String.Join(" ", chemicalElementsSortedSet));

        }

    }
}