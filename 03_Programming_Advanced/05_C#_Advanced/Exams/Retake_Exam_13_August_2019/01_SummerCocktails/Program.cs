using System;
using System.Linq;
using System.Collections.Generic;

namespace _01_SummerCocktails
{
    class Program
    {
        static void Main(string[] args)
        {
            var input1 = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            var input2 = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

            var cocktailsDict = new SortedDictionary<string, int>();
            var ingredientsQueue = new Queue<int>(input1);
            var freshnessStack = new Stack<int>(input2);

            while (ingredientsQueue.Count > 0 && freshnessStack.Count > 0)
            {
                int ingredient = ingredientsQueue.Peek();
                int freshness = freshnessStack.Peek();
                if (ingredient == 0)
                {
                    ingredientsQueue.Dequeue();
                    continue;
                }

                int result = ingredient * freshness;
                bool make_cocktail = false;

                if (result == 150)
                {
                    if (!cocktailsDict.ContainsKey("Mimosa"))
                    {
                        cocktailsDict.Add("Mimosa", 0);
                    }
                    cocktailsDict["Mimosa"]++;
                    make_cocktail = true;
                }
                else if (result == 250)
                {
                    if (!cocktailsDict.ContainsKey("Daiquiri"))
                    {
                        cocktailsDict.Add("Daiquiri", 0);
                    }
                    cocktailsDict["Daiquiri"]++;
                    make_cocktail = true;
                }
                else if (result == 300)
                {
                    if (!cocktailsDict.ContainsKey("Sunshine"))
                    {
                        cocktailsDict.Add("Sunshine", 0);
                    }
                    cocktailsDict["Sunshine"]++;
                    make_cocktail = true;
                }
                else if (result == 400)
                {
                    if (!cocktailsDict.ContainsKey("Mojito"))
                    {
                        cocktailsDict.Add("Mojito", 0);
                    }
                    cocktailsDict["Mojito"]++;
                    make_cocktail = true;
                }

                if (make_cocktail == true)
                {
                    ingredientsQueue.Dequeue();
                    freshnessStack.Pop();
                }
                else
                {
                    freshnessStack.Pop();
                    ingredient += 5;
                    ingredientsQueue.Dequeue();
                    ingredientsQueue.Enqueue(ingredient);
                }

            }

            // printing
            // -check if all cocktails have a value
            // --if they do, print "It's party time! The cocktails are ready!"
            // --if they dont, print "What a pity! You didn't manage to prepare all cocktails."

            bool check_cocktails = true;
            foreach (var cocktail in cocktailsDict)
            {
                if (cocktail.Value == 0)
                {
                    check_cocktails = false;
                    break;
                }
            }

            if (check_cocktails && cocktailsDict.Count >= 4)
            {
                Console.WriteLine("It's party time! The cocktails are ready!");
            }
            else
            {
                Console.WriteLine("What a pity! You didn't manage to prepare all cocktails.");
                if (ingredientsQueue.Count > 0)
                {
                    int sum = 0;
                    while(ingredientsQueue.Count > 0)
                    {
                        sum += ingredientsQueue.Dequeue();
                    }
                    Console.WriteLine($"Ingredients left: {sum}");
                }  
            }

            foreach (var cocktail in cocktailsDict)
            {
                if (cocktail.Value > 0)
                {
                    Console.WriteLine($"# {cocktail.Key} --> {cocktail.Value}");
                }
            }

        }
    }
}