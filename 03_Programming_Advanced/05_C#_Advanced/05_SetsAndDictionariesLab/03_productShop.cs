using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {

            var supermarketsDict = new SortedDictionary<string, Dictionary<string, double>>();
            while (true)
            {
                string[] input = Console.ReadLine().Split(", ");
                if (input[0] == "Revision") { break; }

                string shop = input[0];
                string product = input[1];
                double price = double.Parse(input[2]);

                if (!supermarketsDict.ContainsKey(shop))
                {
                    supermarketsDict.Add(shop, new Dictionary<string, double>());
                }
                supermarketsDict[shop].Add(product, price);
            }

            foreach (var supermarket in supermarketsDict)
            {
                Console.WriteLine($"{supermarket.Key}->");
                foreach (var product in supermarket.Value)
                {
                    Console.WriteLine($"Product: {product.Key}, Price: {product.Value}");
                }
            }

        }

    }
}