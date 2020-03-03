using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int n = int.Parse(input[0]);
            int m = int.Parse(input[1]);
            int[,] matrix = new int[n, m];
            int matrixRange1 = 3;
            int matrixRange2 = 3;

            //filling the matrix
            for (int i = 0; i < matrix.GetLength(0); i++) //n
            {
                int[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = array[j];
                }
            }

            int maxSum = 0;
            int range1Index = -1;
            int range2Index = -1;

            //iterating over the elements
            for (int i = 0; i < matrix.GetLength(0) - matrixRange1 + 1; i++)
            {
                for (int j = 0; j < matrix.GetLength(1) - matrixRange2 + 1; j++)
                {
                    int currentSum = 0;

                    for (int r1 = 0; r1 < matrixRange1; r1++)
                    {
                        for (int r2 = 0; r2 < matrixRange2; r2++)
                        {
                            currentSum += matrix[i + r1, j + r2];
                        }
                    }

                    if (currentSum > maxSum)
                    {
                        maxSum = currentSum;
                        range1Index = i;
                        range2Index = j;
                    }
                }
            }
            Console.WriteLine($"Sum = {maxSum}");

            if (maxSum == 0)
            {
                Console.WriteLine($"0 " + $"0 " + $"0");
                Console.WriteLine($"0 " + $"0 " + $"0");
                Console.WriteLine($"0 " + $"0 " + $"0");
                return;
            }

            for (int i = range1Index; i < range1Index + matrixRange1; i++)
            {
                for (int j = range2Index; j < range2Index + matrixRange2; j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}