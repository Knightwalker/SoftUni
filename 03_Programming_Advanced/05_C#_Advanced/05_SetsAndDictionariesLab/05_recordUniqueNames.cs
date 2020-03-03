using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var uniqueNames = new HashSet<string>();

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                uniqueNames.Add(input);
            }

            foreach (var names in uniqueNames)
            {
                Console.WriteLine(names);
            }

        }

    }
}