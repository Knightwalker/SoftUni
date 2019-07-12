using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dictCourses = new Dictionary<string, List<string>>();

        while(true) {
            string[] input = Console.ReadLine().Split(" : ");
            if (input[0] == "end") { break; }

            string courseName = input[0];
            string studentName = input[1];

            if (!dictCourses.ContainsKey(courseName)) {
                dictCourses[courseName] = new List<string>();
            }
            dictCourses[courseName].Add(studentName);
        }

        dictCourses = dictCourses.OrderByDescending(x => x.Value.Count).ToDictionary(x => x.Key, x => x.Value);
        foreach (var item in dictCourses)
        {
            Console.WriteLine(item.Key + ": " + item.Value.Count);
            foreach (var names in item.Value.OrderBy(x => x))
            {
                Console.WriteLine("-- " + names);
            }
        }

    }
}