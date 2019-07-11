using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {

        var dict = new Dictionary<string, List<string>>();
        var n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            var word = Console.ReadLine();
            var synonym = Console.ReadLine();

            if (!dict.ContainsKey(word))
            {
                dict[word] = new List<string>();
            }
            dict[word].Add(synonym);
        }

        foreach (var item in dict)
        {
            Console.Write(item.Key + " - " + String.Join(", ", item.Value));
            Console.WriteLine();
        }

    }
}