using System;
using System.IO;

namespace StreamsFilesAndDirectories
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = "";
            var counter = 0;
            using (var reader = new StreamReader("input.txt"))
            {
                using (var writer = new StreamWriter("output.txt"))
                {
                    while (!reader.EndOfStream)
                    {
                        line = reader.ReadLine();
                        writer.WriteLine(++counter + ". " + line);
                    }
                }
            }

        }
    }
}