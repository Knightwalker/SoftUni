using System;
using System.Collections.Generic;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 0;

            int[,] matrix = new int[n, n];

            for (int i = 0; i < n; i++)
            {
                int[] currentRowArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = currentRowArr[j];
                }
            }

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    sum += matrix[j, i + j];
                }
                break;
            }

            Console.WriteLine(sum);

        }
    }
}