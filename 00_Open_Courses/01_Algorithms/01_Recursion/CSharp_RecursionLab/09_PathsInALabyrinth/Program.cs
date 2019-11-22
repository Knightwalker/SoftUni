using System;

namespace _09_PathsInALabyrinth
{
    class Program
    {
        static void Main(string[] args)
        {

            string[][] labyrinth = new string[][]
            {
                new string[] { " ", " ", " ", "*", " ", " ", " " },
                new string[] { "*", "*", " ", "*", " ", "*", " " },
                new string[] { " ", " ", " ", " ", " ", " ", " " },
                new string[] { " ", "*", "*", "*", "*", "*", " " },
                new string[] { " ", " ", " ", " ", " ", " ", "e" },
            };

            int steps = 0;
            FindPathToExit(labyrinth, steps, 0, 0);

        }

        static void FindPathToExit(string[][] labyrinth, int steps, int y, int x)
        {
            // Check boundaries
            if (y < 0 || y >= labyrinth.Length || x < 0 || x >= labyrinth[y].Length)
            {
                return; // Index is outside the boundaries of the array
            }

            if (labyrinth[y][x] == "*")
            {
                return; // We hit the wall, return and backtrack
            }

            if (labyrinth[y][x] == "e")
            {
                // Print solution
                PrintPath(labyrinth);
                return; // We have found the exit
            }

            if (labyrinth[y][x] != " ")
            {
                return;
            }

            labyrinth[y][x] = ".";

            FindPathToExit(labyrinth, steps, y - 1, x);
            FindPathToExit(labyrinth, steps, y + 1, x);
            FindPathToExit(labyrinth, steps, y, x - 1);
            FindPathToExit(labyrinth, steps, y, x + 1);

            labyrinth[y][x] = " ";

        }

        static void PrintPath(string[][] labyrinth)
        {
            for (int i = 0; i < labyrinth.Length; i++)
            {
                for (int j = 0; j < labyrinth[i].Length; j++)
                {
                    Console.Write(labyrinth[i][j] + " ");
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }

    }
}
