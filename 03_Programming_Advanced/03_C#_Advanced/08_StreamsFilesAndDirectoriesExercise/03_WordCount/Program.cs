using System;
using System.IO;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Linq;

namespace _03_WordCount
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] textWordsArr = File.ReadAllLines(@"..\..\..\..\resources\words.txt");
            string[] textFileArr = File.ReadAllLines(@"..\..\..\..\resources\text.txt");
            var textWordsDict = new Dictionary<string, int>();
            foreach (var item in textWordsArr)
            {
                textWordsDict.Add(item, 0);
            }

            foreach (var item in textFileArr)
            {
                foreach (var word in textWordsArr)
                {

                   string pattern = ($@"\b({word})\b");
                   string input = item;

                    var matches = Regex.Matches(input, pattern, RegexOptions.IgnoreCase);
                    foreach (var m in matches)
                    {
                        textWordsDict[word]++;
                        //Console.WriteLine("'{0}' found in {1}", m, item);
                    }
              
                }
            }

            // PRINT RESULT
            var actualResult = new StreamWriter(@"..\..\..\..\output\03_actualResult.txt");
            var expectedResult = new StreamWriter(@"..\..\..\..\output\03_expectedResult.txt");

            foreach (var item in textWordsDict)
            {
                //Console.WriteLine(item.Key + " - " + item.Value);
                actualResult.WriteLine(item.Key + " - " + item.Value);
            }
            actualResult.Close();

            foreach (var item in textWordsDict.OrderByDescending(x => x.Value))
            {
                //Console.WriteLine(item.Key + " - " + item.Value);
                expectedResult.WriteLine(item.Key + " - " + item.Value);
            }
            expectedResult.Close();

        }
    }
}
