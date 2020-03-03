using System;
using System.IO;

namespace StreamsFilesAndDirectories
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = 4;
            var totalSize = new FileInfo("sliceMe.txt").Length;
            var sizePerFile = (int)Math.Ceiling(totalSize / 4.0);

            using (var sr = new FileStream("sliceMe.txt", FileMode.Open))
            {
                for (int i = 0; i < n; i++)
                {
                    var buffer = new byte[sizePerFile];
                    var readBytes = sr.Read(buffer, 0, sizePerFile);

                    using(var sw = new FileStream($"file-{i}.txt", FileMode.OpenOrCreate))
                    {
                        sw.Write(buffer, 0, readBytes);
                    }

                }
            }
        }
    }
}