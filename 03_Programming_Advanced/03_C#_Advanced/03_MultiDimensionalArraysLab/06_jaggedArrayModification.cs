using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n, n];

            for (int i = 0; i < n; i++)
            {
                int[] currentRowArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = currentRowArr[j];
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "END") { break; }

                string[] inputArr = input.Split(" ");
                if (inputArr[0] == "Add")
                {
                    int coordinatesRow = int.Parse(inputArr[1]);
                    int coordinatesCol = int.Parse(inputArr[2]);
                    int coordinatesVal = int.Parse(inputArr[3]);
                    if (coordinatesRow >= 0 && coordinatesRow < n && coordinatesCol >= 0 && coordinatesCol < n)
                    {
                        matrix[coordinatesRow, coordinatesCol] += coordinatesVal;
                    }
                    else
                    {
                        Console.WriteLine("Invalid coordinates");
                    }

                }
                else if (inputArr[0] == "Subtract")
                {
                    int coordinatesRow = int.Parse(inputArr[1]);
                    int coordinatesCol = int.Parse(inputArr[2]);
                    int coordinatesVal = int.Parse(inputArr[3]);
                    if (coordinatesRow >= 0 && coordinatesRow < n && coordinatesCol >= 0 && coordinatesCol < n)
                    {
                        matrix[coordinatesRow, coordinatesCol] -= coordinatesVal;
                    }
                    else
                    {
                        Console.WriteLine("Invalid coordinates");
                    }
                }

            }

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }

        }
    }
}