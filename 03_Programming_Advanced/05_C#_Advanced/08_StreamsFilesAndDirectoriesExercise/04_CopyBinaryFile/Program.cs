using System;
using System.IO;

namespace _04_CopyBinaryFile
{
    class Program
    {
        static void Main(string[] args)
        {
            var sourceFile = new FileStream(@"..\..\..\..\resources\copyMe.png", FileMode.Open);
            var destinationFile = new FileStream(@"..\..\..\..\output\newMe.png", FileMode.Create);

            byte[] buffer = new byte[4096];
            int readBytes;
            while ((readBytes = sourceFile.Read(buffer, 0, buffer.Length)) != 0)
            {
                destinationFile.Write(buffer, 0, readBytes);
            }
            sourceFile.Close();
            destinationFile.Close();

        }
    }
}
