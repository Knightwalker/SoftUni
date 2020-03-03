using System;
using System.Collections.Generic;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var peopleDict = new Dictionary<string, int>();

            for (int i = 0; i < n; i++)
            {
                string[] inputStr = Console.ReadLine().Split(", ");
                string personName = inputStr[0];
                int personAge = int.Parse(inputStr[1]);

                if (!peopleDict.ContainsKey(personName))
                {
                    peopleDict.Add(personName, 0);
                }
                peopleDict[personName] = personAge;

            }

            var condition = Console.ReadLine();
            var age = int.Parse(Console.ReadLine());
            var format = Console.ReadLine();

            Func<int, bool> tester = CreateTester(condition, age);
            Action<KeyValuePair<string, int>> printer = CreatePrinter(format);

            InvokePrinter(peopleDict, tester, printer);

        }

        static void InvokePrinter(Dictionary<string, int> peopleDict, Func<int, bool> tester, Action<KeyValuePair<string, int>> printer)
        {
            foreach (var person in peopleDict)
            {
                if (tester(person.Value))
                {
                    printer(person);
                }
            }
        }

        static Func<int, bool> CreateTester(string condition, int age)
        {
            if (condition == "older") { return n => n >= age; }
            else if (condition == "younger") { return n => n < age; }
            else { return null; }
        }

        static Action<KeyValuePair<string, int>> CreatePrinter(string format)
        {
            if (format == "name age") { return kvp => Console.WriteLine($"{kvp.Key} - {kvp.Value}"); }
            else if (format == "name") { return kvp => Console.WriteLine($"{kvp.Key}"); }
            else if (format == "age") { return kvp => Console.WriteLine($"{kvp.Value}"); }
            else { return null; }
        }

    }
}