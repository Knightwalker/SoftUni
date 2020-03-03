using System.IO;
using System.Collections.Generic;

namespace StreamsFilesAndDirectories
{
    class Program
    {
        static void Main(string[] args)
        {

            var fileOne = new StreamReader("FileOne.txt");
            var fileTwo = new StreamReader("FileTwo.txt");
            var output = new StreamWriter("output.txt");
            var fileOneArr = new List<string>();
            var fileTwoArr = new List<string>();

            while (!fileOne.EndOfStream)
            {
                fileOneArr.Add(fileOne.ReadLine());
            }
            fileOne.Close();

            while (!fileTwo.EndOfStream)
            {
                fileTwoArr.Add(fileTwo.ReadLine());
            }
            fileTwo.Close();

            for (int i = 0; i < fileOneArr.Count; i++)
            {
                output.WriteLine(fileOneArr[i]);
                output.WriteLine(fileTwoArr[i]);
            }
            output.Close();

        }
    }
}