using System;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            long[][] pascalTriangleArr = new long[n][];

            for (int i = 0; i < n; i++)
            {
                pascalTriangleArr[i] = new long[i + 1];
            }

            for (int i = 0; i < n; i++)
            {
                pascalTriangleArr[i][0] = 1;
                pascalTriangleArr[i][pascalTriangleArr[i].Length - 1] = 1;
                for (int j = 1; j < pascalTriangleArr[i].Length - 1; j++)
                {
                    pascalTriangleArr[i][j] = pascalTriangleArr[i - 1][j - 1] + pascalTriangleArr[i - 1][j];
                }
            }

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < i + 1; j++)
                {
                    Console.Write(pascalTriangleArr[i][j] + " ");
                }
                Console.WriteLine();
            }

        }
    }
}