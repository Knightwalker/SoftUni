using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double[][] array = new double[n][];

            for (int i = 0; i < n; i++)
            {
                double[] subArray = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();
                array[i] = subArray;
            }

            for (int i = 0; i < n - 1; i++)
            {
                int currentSubArrayLen = array[i].Length;
                int nextSubArrayLen = array[i + 1].Length;

                if (currentSubArrayLen == nextSubArrayLen)
                {
                    for (int j = 0; j < currentSubArrayLen; j++)
                    {
                        array[i][j] *= 2;
                    }
                    for (int j = 0; j < nextSubArrayLen; j++)
                    {
                        array[i + 1][j] *= 2;
                    }
                }
                else
                {
                    for (int j = 0; j < currentSubArrayLen; j++)
                    {
                        array[i][j] /= 2;
                    }
                    for (int j = 0; j < nextSubArrayLen; j++)
                    {
                        array[i + 1][j] /= 2;
                    }
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                string[] inputArr = input.Split(" ");
                if (inputArr[0] == "Add")
                {
                    int row = int.Parse(inputArr[1]);
                    int col = int.Parse(inputArr[2]);
                    int val = int.Parse(inputArr[3]);
                    if ((row >= 0 && row < n) && (col >= 0 && col < array[row].Length))
                    {
                        array[row][col] += val;
                    }
                }
                else if (inputArr[0] == "Subtract")
                {
                    int row = int.Parse(inputArr[1]);
                    int col = int.Parse(inputArr[2]);
                    int val = int.Parse(inputArr[3]);
                    if ((row >= 0 && row < n) && (col >= 0 && col < array[row].Length))
                    {
                        array[row][col] -= val;
                    }
                }
            }

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < array[i].Length; j++)
                {
                    Console.Write(array[i][j] + " ");
                }
                Console.WriteLine();
            }

        }
    }
}