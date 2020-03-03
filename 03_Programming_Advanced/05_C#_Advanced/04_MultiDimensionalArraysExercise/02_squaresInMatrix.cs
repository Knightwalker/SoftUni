using System;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] dimensions = Console.ReadLine().Split(" ");
            int n1 = int.Parse(dimensions[0]);
            int n2 = int.Parse(dimensions[1]);
            string[][] array2D = new string[n1][];
            int counter = 0;

            for (int i = 0; i < n1; i++)
            {
                string[] subArray = Console.ReadLine().Split(" ");
                array2D[i] = subArray;
            }

            for (int i = 0; i < n1 - 1; i++)
            {
                for (int j = 0; j < n2 - 1; j++)
                {
                    string a = array2D[i][j];
                    string b = array2D[i][j + 1];
                    string c = array2D[i + 1][j];
                    string d = array2D[i + 1][j + 1];

                    if (a == b && b == c && c == d)
                    {
                        counter++;
                    }

                }
            }

            Console.WriteLine(counter);

        }
    }
}