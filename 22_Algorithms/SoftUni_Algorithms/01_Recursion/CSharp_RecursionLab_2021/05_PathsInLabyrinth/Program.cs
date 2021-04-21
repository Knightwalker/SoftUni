using System;

namespace _05_AllPathsInLabyrinth
{
    class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());
            int cols = int.Parse(Console.ReadLine());

            char[,] labyrinth = ReadLabyrinth(rows, cols);
            bool[,] labyrinthMap = new bool[rows, cols];
            string pathToExit = "";
            string direction = "S"; // or "\0" for empty string
            int y = 0;
            int x = 0;

            findPathsRecursively(ref labyrinth, ref labyrinthMap, ref pathToExit, direction, y, x);
        }

        private static void findPathsRecursively(ref char[,] labyrinth, ref bool[,] labyrinthMap, ref string pathToExit, string direction, int y, int x)
        {
            // Check boundaries
            if (y < 0 || y >= labyrinth.GetLength(0) || x < 0 || x >= labyrinth.GetLength(1))
            {
                return;
            }

            // Check if comming from this direction
            if (labyrinthMap[y, x] == true)
            {
                return;
            }

            // Check if a wall
            if (labyrinth[y, x] == '*')
            {
                return;
            }

            // Check if exit is found
            if (labyrinth[y, x] == 'e')
            {
                pathToExit += direction;
                Console.WriteLine(pathToExit.Substring(1));
                pathToExit = pathToExit.Substring(0, pathToExit.Length - 1);
                return;
            }

            labyrinthMap[y, x] = true;
            pathToExit += direction;

            findPathsRecursively(ref labyrinth, ref labyrinthMap, ref pathToExit, "U", y - 1, x); // top
            findPathsRecursively(ref labyrinth, ref labyrinthMap, ref pathToExit, "R", y, x + 1); // right
            findPathsRecursively(ref labyrinth, ref labyrinthMap, ref pathToExit, "D", y + 1, x); // bottom
            findPathsRecursively(ref labyrinth, ref labyrinthMap, ref pathToExit, "L", y, x - 1); // left

            pathToExit = pathToExit.Substring(0, pathToExit.Length - 1);
            labyrinthMap[y, x] = false;

            return;
        }

        private static char[,] ReadLabyrinth(int rows, int cols) 
        {
            char[,] matrix = new char[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                string line = Console.ReadLine();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = line[j];
                }
            }

            return matrix;
        }

    }
}