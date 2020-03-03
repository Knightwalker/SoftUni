using System;
using System.IO.Compression;

namespace _06_ZipAndExtract
{
    class Program
    {
        static void Main(string[] args)
        {
            string startPath = @"..\..\..\..\resources";
            string zipPath = @"..\..\..\..\output\06_resources.zip";
            string extractPath = @"..\..\..\..\output\06_resources";

            ZipFile.CreateFromDirectory(startPath, zipPath);
            ZipFile.ExtractToDirectory(zipPath, extractPath);
        }
    }
}
