using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[][] matrix = new int[n][];
            int sumRightDiagonal = 0;
            int sumLeftDiagonal = 0;

            for (int i = 0; i < n; i++)
            {
                int[] array = Console.ReadLine().Split().Select(int.Parse).ToArray();
                matrix[i] = array;
            }

            for (int i = 0; i < n; i++)
            {
                sumRightDiagonal += matrix[i][i];
                sumLeftDiagonal += matrix[i][n - i - 1];
            }

            Console.WriteLine(Math.Abs(sumRightDiagonal - sumLeftDiagonal));
        }
    }
}