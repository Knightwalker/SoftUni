using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dict = new Dictionary<string, int>();

        var line = 1;
        var resource = "";
        var quantity = 0;
        while (true)
        {
            var input = Console.ReadLine();
            if (input == "stop") { break; }

            if (line == 1)
            {
                resource = input;
                line = 2;
                if (!dict.ContainsKey(resource))
                {
                    dict[resource] = 0;
                }
            }
            else if (line == 2)
            {
                quantity = int.Parse(input);
                line = 1;
                dict[resource] += quantity;
            }
        }

        foreach (var item in dict)
        {
            Console.WriteLine(item.Key + " -> " + item.Value);
        }

    }
}