using System;
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
            int[,] matrix = new int[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                int[] currentRowArr = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = currentRowArr[j];
                }
            }

            int maxSum = 0;
            int[,] subMatrix = new int[2,2];  

            for (int i = 0; i < rows - 1; i++)
            {
                int currentSum = 0;
                for (int j = 0; j < cols - 1; j++)
                {
                    int a = matrix[i, j];
                    int b = matrix[i, j + 1];
                    int c = matrix[i + 1, j];
                    int d = matrix[i + 1, j + 1];
                    currentSum = a + b + c + d;

                    if (currentSum > maxSum)
                    {
                        maxSum = currentSum;
                        subMatrix[0, 0] = a;
                        subMatrix[0, 1] = b;
                        subMatrix[1, 0] = c;
                        subMatrix[1, 1] = d;
                    }
                }
            }

            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < 2; j++)
                {
                    Console.Write(subMatrix[i, j] + " ");
                }
                Console.WriteLine();
            }
            Console.WriteLine(maxSum);

        }
    }
}