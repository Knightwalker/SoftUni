using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] dimensions = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            string[,] matrix = new string[dimensions[0], dimensions[1]];

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = array[j];
                }
            }

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "END") { break; }
                bool validInput = false;

                string[] coordinates = command.Split(" ");
                if (coordinates[0] == "swap" && coordinates.Length == 5)
                {
                    int a = int.Parse(coordinates[1]);
                    int b = int.Parse(coordinates[2]);
                    int c = int.Parse(coordinates[3]);
                    int d = int.Parse(coordinates[4]);

                    if ((a >= 0 && a < dimensions[0]) && (b >= 0 && b < dimensions[1]) && (c >= 0 && c < dimensions[0]) && (d >= 0 && d < dimensions[1]))
                    {
                        string temp = matrix[a, b];
                        matrix[a, b] = matrix[c, d];
                        matrix[c, d] = temp;
                        validInput = true;
                        for (int i = 0; i < dimensions[0]; i++)
                        {
                            for (int j = 0; j < dimensions[1]; j++)
                            {
                                Console.Write(matrix[i, j] + " ");
                            }
                            Console.WriteLine();
                        }
                    }

                }

                if (!validInput)
                {
                    Console.WriteLine("Invalid input!");
                }

            }

        }
    }
}