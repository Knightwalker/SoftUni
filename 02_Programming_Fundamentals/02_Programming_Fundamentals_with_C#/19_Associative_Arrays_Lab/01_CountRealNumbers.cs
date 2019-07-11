using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dict = new Dictionary<double, int>();
        var numbers = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();

        foreach (var key in numbers)
        {
            if (!dict.ContainsKey(key))
            {
                dict[key] = 0;
            }
            dict[key]++;
        }

        dict = dict.OrderBy(x => x.Key).ToDictionary(x => x.Key, x => x.Value);

        foreach (var item in dict)
        {
            Console.WriteLine($"{item.Key} -> {item.Value}");
        }

    }
}