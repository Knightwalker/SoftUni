using System;
using System.Linq;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbersArr = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();
            var numbersDict = new Dictionary<double, int>();

            for (int i = 0; i < numbersArr.Length; i++)
            {
                double currentNumber = numbersArr[i];
                if (!numbersDict.ContainsKey(currentNumber))
                {
                    numbersDict.Add(currentNumber, 0);
                }
                numbersDict[currentNumber]++;
            }

            foreach (var number in numbersDict)
            {
                Console.WriteLine($"{number.Key} - {number.Value} times");
            }

        }

    }
}