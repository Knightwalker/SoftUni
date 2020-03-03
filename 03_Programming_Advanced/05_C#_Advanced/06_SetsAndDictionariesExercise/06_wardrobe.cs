using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var wardrobeDict = new Dictionary<string, Dictionary<string, int>>();

            for (int i = 0; i < n; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" -> ");
                string color = inputArr[0];
                string[] clothesArr = inputArr[1].Split(",");

                if (!wardrobeDict.ContainsKey(color))
                {
                    wardrobeDict.Add(color, new Dictionary<string, int>());
                }
                foreach (var cloth in clothesArr)
                {
                    if (!wardrobeDict[color].ContainsKey(cloth))
                    {
                        wardrobeDict[color].Add(cloth, 0);
                    }
                    wardrobeDict[color][cloth]++;
                }
            }

            string[] searchedClothArr = Console.ReadLine().Split(" ");
            string searchedColor = searchedClothArr[0];
            string searchedCloth = searchedClothArr[1];

            foreach (var color in wardrobeDict)
            {
                Console.WriteLine(color.Key + " clothes: ");
                foreach (var cloth in color.Value)
                {
                    if (searchedColor == color.Key && cloth.Key == searchedCloth)
                    {
                        Console.WriteLine($"* {cloth.Key} - {cloth.Value} (found!)");
                    }
                    else
                    {
                        Console.WriteLine($"* {cloth.Key} - {cloth.Value}");
                    }
                }
            }

        }

    }
}