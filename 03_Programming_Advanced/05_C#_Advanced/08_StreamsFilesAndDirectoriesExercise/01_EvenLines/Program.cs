using System;
using System.IO;
using System.Collections.Generic;

namespace _01_EvenLines
{
    class Program
    {
        static void Main(string[] args)
        {
            var textFileList = new List<string>();
            var symbolsToReplace = new char[] { '-', ',', '.', '!', '?' };

            var textFile = new StreamReader(@"..\..\..\..\resources\text.txt");
            while (!textFile.EndOfStream)
            {
                string line = textFile.ReadLine();
                foreach (var symbol in symbolsToReplace)
                {
                    line = line.Replace(symbol, '@');
                }

                var lineArr = line.Split(" ");
                string lineReversed = "";
                for (int i = lineArr.Length - 1; i >= 0; i--)
                {
                    lineReversed += lineArr[i];
                    if (i != 0) { lineReversed += " "; }
                }

                textFileList.Add(lineReversed);

            }
            textFile.Close();

            for (int i = 0; i < textFileList.Count; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine(textFileList[i]);
                }

            }

        }
    }
}
