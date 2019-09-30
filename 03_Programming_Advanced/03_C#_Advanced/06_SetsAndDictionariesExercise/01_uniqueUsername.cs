using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());
            var uniqueUsernames = new HashSet<string>();

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                uniqueUsernames.Add(input);
            }

            foreach (var usernames in uniqueUsernames)
            {
                Console.WriteLine(usernames);
            }

        }

    }
}