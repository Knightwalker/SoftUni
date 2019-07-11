using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dict = new Dictionary<string, int>();
        var words = Console.ReadLine().Split(" ");

        foreach (var word in words)
        {
            if (!dict.ContainsKey(word))
            {
                dict[word] = 0;
            }
            dict[word]++;
        }

        foreach (var item in dict)
        {
            if (item.Value % 2 != 0)
            {
                Console.Write(item.Key + " ");
            } 
        }
        Console.WriteLine();

    }
}