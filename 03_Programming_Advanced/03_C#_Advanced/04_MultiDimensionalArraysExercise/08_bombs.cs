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
                int[] array = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = array[j];
                }
            }

            string[] bombsArray = Console.ReadLine().Split(" ");
            int bombsArrayLength = bombsArray.Length;

            for (int i = 0; i < bombsArrayLength; i++)
            {
                int[] currentBomb = bombsArray[i].Split(",").Select(int.Parse).ToArray();
                int y = currentBomb[0];
                int x = currentBomb[1];
                int bomb_power = matrix[y, x];

                if (bomb_power > 0)
                {
                    int row_begin = y - 1;
                    int row_end = y + 1;
                    int col_begin = x - 1;
                    int col_end = x + 1;
                    if (y - 1 < 0) { row_begin = 0; }
                    if (y + 1 >= n) { row_end = n - 1; }
                    if (x - 1 < 0) { col_begin = 0; }
                    if (x + 1 >= n) { col_end = n - 1; }

                    for (int j = row_begin; j <= row_end; j++)
                    {
                        for (int k = col_begin; k <= col_end; k++)
                        {
                            // bomb explodes
                            if ((j == y) && (k == x))
                            {
                                matrix[j, k] = 0;
                                continue;
                            }

                            if (matrix[j, k] > 0)
                            {
                                matrix[j, k] -= bomb_power;
                            }

                        }
                    }
                }

            } // END FOR-LOOP

            int aliveCount = 0;
            int aliveSum = 0;
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (matrix[i, j] > 0)
                    {
                        aliveCount++;
                        aliveSum += matrix[i, j];
                    }
                }
            }

            Console.WriteLine($"Alive cells: {aliveCount}");
            Console.WriteLine($"Sum: {aliveSum}");
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