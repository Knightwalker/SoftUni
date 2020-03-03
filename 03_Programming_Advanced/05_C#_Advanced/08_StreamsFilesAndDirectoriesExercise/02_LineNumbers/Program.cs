using System;
using System.IO;

namespace _02_LineNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] textFileArr = File.ReadAllLines(@"..\..\..\..\resources\text.txt");

            var outputFile = new StreamWriter(@"..\..\..\..\output\02_output.txt");
            int counter = 0;
         
            foreach (var line in textFileArr)
            {
                int lettersCount = 0;
                int punctuationCount = 0;
                foreach (var letter in line)
                {
                    if ((int)letter >= 65 && (int)letter <= 122)
                    {
                        lettersCount++;
                    }
                    else if (letter != ' ')
                    {
                        punctuationCount++;
                    }
                    
                }
                outputFile.WriteLine($"Line {++counter}: {line} ({lettersCount})({punctuationCount})");
            }
            outputFile.Close();

        }
    }
}
