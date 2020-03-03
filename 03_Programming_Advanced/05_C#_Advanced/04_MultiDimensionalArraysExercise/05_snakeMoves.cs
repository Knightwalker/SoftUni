using System;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] dimensions = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int n = int.Parse(dimensions[0]);
            int m = int.Parse(dimensions[1]);
            char[,] matrix = new char[n, m];

            string snake = Console.ReadLine();
            int snakeLength = snake.Length;
            int snakeIndex = 0;

            for (int i = 0; i < n; i++)
            {
                if (i % 2 == 0)
                {
                    for (int j = 0; j < m; j++)
                    {
                        matrix[i, j] = snake[snakeIndex++];
                        if (snakeIndex >= snakeLength) { snakeIndex = 0; }
                    }
                }
                else
                {
                    for (int j = m - 1; j >= 0; j--)
                    {
                        matrix[i, j] = snake[snakeIndex++];
                        if (snakeIndex >= snakeLength) { snakeIndex = 0; }
                    }
                }
            }

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < m; j++)
                {
                    Console.Write(matrix[i, j]);
                }
                Console.WriteLine();
            }

        }
    }
}