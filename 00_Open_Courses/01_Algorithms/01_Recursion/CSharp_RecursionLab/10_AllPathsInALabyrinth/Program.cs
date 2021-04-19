using System;
using System.Collections.Generic;

namespace _10_AllPathsInALabyrinth
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());
            char[][] labyrinth = new char[n][];

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                labyrinth[i] = new char[input.Length];
                for (int j = 0; j < input.Length; j++)
                {
                    labyrinth[i][j] = input[j];
                }

            }

            // Console.WriteLine();
            FindAllPaths(labyrinth, steps, 0, 0, '\0');

        }

        static List<char> steps = new List<char>();

        static void FindAllPaths(char[][] labyrinth, List<char> steps, int y, int x, char direction)
        {
          
            if(y < 0 || y >= labyrinth.Length || x < 0 || x >= labyrinth[y].Length)
            {
                return;
            }

            if (labyrinth[y][x] == '*')
            {
                return;
            }

            if (labyrinth[y][x] == '.')
            {
                return;
            }

            if (labyrinth[y][x] == 'e')
            {
                // for (int i = 0; i < labyrinth.Length; i++)
                // {
                //     for (int j = 0; j < labyrinth[i].Length; j++)
                //     {
                //         Console.Write(labyrinth[i][j]);
                //     }
                //     Console.WriteLine();
                //     
                // }
                //Console.WriteLine();
                steps.Add(direction);

                for (int i = 1; i < steps.Count; i++)
                {
                    Console.Write(steps[i]);
                }
                Console.WriteLine();
                steps.RemoveAt(steps.Count - 1);
                return;
            }

            labyrinth[y][x] = '.';
            steps.Add(direction);

            FindAllPaths(labyrinth, steps, y, x + 1, 'R');
            FindAllPaths(labyrinth, steps, y + 1, x, 'D');
            FindAllPaths(labyrinth, steps, y, x - 1, 'L');
            FindAllPaths(labyrinth, steps, y - 1, x, 'U');


            labyrinth[y][x] = '-';
            steps.RemoveAt(steps.Count - 1);

        }

    }
}