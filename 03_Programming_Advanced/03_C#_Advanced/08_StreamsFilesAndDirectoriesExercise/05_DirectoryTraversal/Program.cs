using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;

namespace _05_DirectoryTraversal
{
    class Program
    {
        static void Main(string[] args)
        {

            var filesDict = new Dictionary<string, Dictionary<string, long>>();

            var dir = new DirectoryInfo(@"..\..\..\..\");
            var files = dir.GetFiles();

            foreach (var fileInfo in files)
            {
                //Console.WriteLine(fileInfo.Name);
                //Console.WriteLine(fileInfo.Extension);
                //Console.WriteLine(fileInfo.Length);

                var fileName = fileInfo.Name;
                var fileExtension = fileInfo.Extension;
                var fileLength = fileInfo.Length;

                if (!filesDict.ContainsKey(fileExtension))
                {
                    filesDict.Add(fileExtension, new Dictionary<string, long>());
                }

                if (!filesDict[fileExtension].ContainsKey(fileName))
                {
                    filesDict[fileExtension].Add(fileName, fileLength);
                }                

            }

            // PRINT AND RESULT

            var reportSW = new StreamWriter(@"..\..\..\..\output\05_report.txt");
       
            foreach (var fileExtension in filesDict.OrderByDescending(x => x.Value.Count))
            {
                //Console.WriteLine(fileExtension.Key);
                reportSW.WriteLine(fileExtension.Key);
                foreach (var file in fileExtension.Value.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
                {
                    //Console.WriteLine($"--{file.Key} - {file.Value}kb");
                    reportSW.WriteLine($"--{file.Key} - {(file.Value / 1000.0):F3}kb");
                }
            }
            reportSW.Close();

        }
    }
}
