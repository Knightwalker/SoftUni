using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());
            var worldDict = new Dictionary<string, Dictionary<string, List<string>>>();
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ");
                string continent = input[0];
                string country = input[1];
                string city = input[2];

                if (!worldDict.ContainsKey(continent))
                {
                    worldDict.Add(continent, new Dictionary<string, List<string>>());
                    worldDict[continent].Add(country, new List<string>());
                    worldDict[continent][country].Add(city);
                }
                else
                {
                    if (!worldDict[continent].ContainsKey(country))
                    {
                        worldDict[continent].Add(country, new List<string>());
                    }
                    worldDict[continent][country].Add(city);
                }
            }

            foreach (var continent in worldDict)
            {
                Console.WriteLine(continent.Key + ":");
                foreach (var country in continent.Value)
                {
                    Console.WriteLine($"  {country.Key} -> {String.Join(", ", country.Value)}");
                }
            }

        }

    }
}