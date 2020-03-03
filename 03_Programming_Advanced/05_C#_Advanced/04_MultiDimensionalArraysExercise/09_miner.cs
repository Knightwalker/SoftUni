using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string[,] matrix = new string[n, n];

            string[] commands = Console.ReadLine().Split(" ");
            int commandsLength = commands.Length;
            for (int i = 0; i < n; i++)
            {
                string[] array = Console.ReadLine().Split(" ");
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = array[j];
                }
            }

            // Get Miner Starting Position and Total Coals
            int y = -1;
            int x = -1;
            int totalCoals = 0;
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (matrix[i, j] == "s")
                    {
                        y = i;
                        x = j;
                    }
                    else if (matrix[i, j] == "c")
                    {
                        totalCoals++;
                    }
                }
            }

            // Moving the Miner
            int collectedCoals = 0;
            for (int i = 0; i < commandsLength; i++)
            {
                string currentCommand = commands[i];

                if (currentCommand == "up")
                {
                    if (y - 1 >= 0)
                    {
                        y -= 1; // Miner moves UP
                        if (matrix[y, x] == "c")
                        {
                            matrix[y, x] = "*";
                            collectedCoals++;
                        }
                        else if (matrix[y, x] == "e")
                        {
                            Console.WriteLine($"Game over! ({y}, {x})");
                            return;
                        }
                    }
                }
                else if (currentCommand == "down")
                {
                    if (y + 1 < n)
                    {
                        y += 1; // Miner moves DOWN
                        if (matrix[y, x] == "c")
                        {
                            matrix[y, x] = "*";
                            collectedCoals++;
                        }
                        else if (matrix[y, x] == "e")
                        {
                            Console.WriteLine($"Game over! ({y}, {x})");
                            return;
                        }
                    }
                }
                else if (currentCommand == "left")
                {
                    if (x - 1 >= 0)
                    {
                        x -= 1; // Miner moves LEFT
                        if (matrix[y, x] == "c")
                        {
                            matrix[y, x] = "*";
                            collectedCoals++;
                        }
                        else if (matrix[y, x] == "e")
                        {
                            Console.WriteLine($"Game over! ({y}, {x})");
                            return;
                        }
                    }
                }
                else if (currentCommand == "right")
                {
                    if (x + 1 < n)
                    {
                        x += 1; // Miner moves RIGHT
                        if (matrix[y, x] == "c")
                        {
                            matrix[y, x] = "*";
                            collectedCoals++;
                        }
                        else if (matrix[y, x] == "e")
                        {
                            Console.WriteLine($"Game over! ({y}, {x})");
                            return;
                        }
                    }
                }
            } // END FOR-LOOP

            if (collectedCoals == totalCoals)
            {
                Console.WriteLine($"You collected all coals! ({y}, {x})");
            }
            else
            {
                Console.WriteLine($"{totalCoals - collectedCoals} coals left. ({y}, {x})");
            }

        }

    }
}