using System;
using System.Collections.Generic;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] dimensionsArr = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
            int rows = dimensionsArr[0];
            int cols = dimensionsArr[1];
            int sum = 0;

            int[,] matrix = new int[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                int[] currentRowArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = currentRowArr[j];
                }
            }

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < rows; j++)
                {
                    sum += matrix[j, i];
                }    
                Console.WriteLine(sum);
                sum = 0;
            }

        }
    }
}