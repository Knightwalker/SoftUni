using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            var symbolsSortedDict = new SortedDictionary<char, int>();
            string symbols = Console.ReadLine();

            int symbolsArrLen = symbols.Length;
            for (int i = 0; i < symbolsArrLen; i++)
            {
                char currentSymbol = symbols[i];

                if (!symbolsSortedDict.ContainsKey(currentSymbol))
                {
                    symbolsSortedDict.Add(currentSymbol, 0);
                }
                symbolsSortedDict[currentSymbol]++;
            }

            foreach (var symbol in symbolsSortedDict)
            {
                Console.WriteLine($"{symbol.Key}: {symbol.Value} time/s");
            }

        }

    }
}