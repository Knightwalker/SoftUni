using System;
using System.IO;
using System.Collections.Generic;

namespace StreamsFilesAndDirectories
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] wordsInput = File.ReadAllLines(@"input.txt");
            string[] words = wordsInput[0].Split(" ");
            var wordsDict = new Dictionary<string, int>();

            var textFile = new StreamReader(@"text.txt");
            string textFileLine = "";
            while(!textFile.EndOfStream)
            {
                textFileLine = textFile.ReadLine();
                foreach (var substring in words)
                {
                    if (textFileLine.Contains(substring))
                    {
                        if (!wordsDict.ContainsKey(substring))
                        {
                            wordsDict.Add(substring, 0);
                        }
                        wordsDict[substring]++;
                    }
                }
            }
            textFile.Close();

            var outputTextFile = new StreamWriter(@"output.txt");
            foreach (var word in wordsDict)
            {
                outputTextFile.WriteLine($"{word.Key} - {word.Value}");
            }
            outputTextFile.Close();

        }
    }
}