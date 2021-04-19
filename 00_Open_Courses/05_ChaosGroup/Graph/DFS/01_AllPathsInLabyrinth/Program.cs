using System;
using System.Collections.Generic;
using System.Threading;

namespace _01_AllPathsInLabyrinth
{
    class Program
    {
        static void Main(string[] args)
        {
            char[,] labyrinth = ReadLabyrinth();
            var ListWithSolutions = new List<MazeSolution>();

            findExit(ref labyrinth, ref ListWithSolutions);
            ListWithSolutions.Sort(OrderMazeSolutionsAscendingBySteps);

            MazeSolution solution = ListWithSolutions[0];
            DrawShortestPath(labyrinth, solution);

        }

        private static void findPathRecursively(ref char[,] labyrinth, ref List<MazeSolution> ListWithSolutions, ref List<Point> ListWithCoordinatesToExit, ref int steps, int y, int x)
        {
            // Check boundaries
            if (y < 0 || y >= labyrinth.GetLength(0) || x < 0 || x >= labyrinth.GetLength(1))
            {
                return;
            }

            // Check if comming from this direction
            if (labyrinth[y, x] == '.')
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
                labyrinth[y, x] = '.';
                steps++;
                ListWithCoordinatesToExit.Add(new Point(x, y));

                //print2DMatrix(ref labyrinth);
                ListWithSolutions.Add(new MazeSolution(steps, ListWithCoordinatesToExit));

                labyrinth[y, x] = 'e';
                steps--;
                ListWithCoordinatesToExit.RemoveAt(ListWithCoordinatesToExit.Count - 1);
                return;
            }

            //Thread.Sleep(500);

            labyrinth[y, x] = '.';
            steps++;
            ListWithCoordinatesToExit.Add(new Point(x, y));
            //print2DMatrix(ref labyrinth);

            findPathRecursively(ref labyrinth, ref ListWithSolutions, ref ListWithCoordinatesToExit, ref steps, y - 1, x); // top
            findPathRecursively(ref labyrinth, ref ListWithSolutions, ref ListWithCoordinatesToExit, ref steps, y, x + 1); // right
            findPathRecursively(ref labyrinth, ref ListWithSolutions, ref ListWithCoordinatesToExit, ref steps, y + 1, x); // bottom
            findPathRecursively(ref labyrinth, ref ListWithSolutions, ref ListWithCoordinatesToExit, ref steps, y, x - 1); // left

            labyrinth[y, x] = ' ';
            steps--;
            ListWithCoordinatesToExit.RemoveAt(ListWithCoordinatesToExit.Count - 1);

            return;
        }

        private static void findExit(ref char[,] labyrinth, ref List<MazeSolution> ListWithSolutions)
        {
            var ListWithCoordinatesToExit = new List<Point>();
            int steps = 0;
            int y = 0;
            int x = 0;
            //string direction = "S";

            findPathRecursively(ref labyrinth, ref ListWithSolutions, ref ListWithCoordinatesToExit, ref steps, y, x);

            return;
        }

        private static char[,] ReadLabyrinth()
        {
            int rows = int.Parse(Console.ReadLine());
            int cols = int.Parse(Console.ReadLine());
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

        private static void print2DMatrix(ref char[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    Console.Write(matrix[i, j]);
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }

        private static int OrderMazeSolutionsAscendingBySteps(MazeSolution a, MazeSolution b)
        {
            if (a.steps < b.steps)
            {
                return -1; // a precedes b in the sort order.
            }
            else if (a.steps > b.steps)
            {
                return 1; // a follows b in the sort order.
            }
            else
            {
                return 0; // a occurs in the same position as b in the sort order.
            }
        }

        /// <summary>
        /// Draws the maze, marking the shortest path.
        /// </summary>
        public static void DrawShortestPath(char[,] maze, MazeSolution solution)
        {
            for (int i = 0; i < solution.steps; i++)
            {
                Thread.Sleep(150);
                Point point = solution.ListOfPoints[i];
                maze[point.y, point.x] = '#';
                print2DMatrix(ref maze);
            }
        }

        public struct MazeSolution
        {
            public int steps;
            public List<Point> ListOfPoints;

            public MazeSolution(int steps, List<Point> ListOfPoints)
            {
                this.steps = steps;
                this.ListOfPoints = new List<Point>(ListOfPoints); // Warning: List is passed by reference. We need to clone it.
            }

        }

        public struct Point
        {
            public int x;
            public int y;

            public Point(int x, int y)
            {
                this.x = x;
                this.y = y;
            }
        }

    }

}
