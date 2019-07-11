using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dict = new Dictionary<char, int>();
        var arr = Console.ReadLine().Split(" ");

        foreach (var word in arr)
        {
            foreach (var character in word)
            {
                if (!dict.ContainsKey(character))
                {
                    dict[character] = 0;
                }
                dict[character]++;
            }
        }

        foreach (var item in dict)
        {
            Console.WriteLine(item.Key + " -> " + item.Value);
        }
    }
}