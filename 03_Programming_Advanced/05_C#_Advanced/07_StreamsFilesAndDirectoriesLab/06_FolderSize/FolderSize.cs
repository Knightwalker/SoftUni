using System;
using System.IO;

namespace StreamsFilesAndDirectories
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] files = Directory.GetFiles("..\\..\\..\\TestFolder");
            double sum = 0;

            foreach (var file in files)
            {
                var fileInfo = new FileInfo(file);
                sum += fileInfo.Length;
            }

            Console.WriteLine(sum);

        }
    }
}