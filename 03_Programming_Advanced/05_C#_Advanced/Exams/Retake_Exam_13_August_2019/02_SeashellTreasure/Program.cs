using System;
using System.Linq;
using System.Collections.Generic;

namespace _02_SeashellTreasure
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[][] masterArr = new char[n][];
            List<char> collectedSeashellsList = new List<char>();
            List<char> stolenSeashellsList = new List<char>();


            for (int i = 0; i < n; i++)
            {
                char[] arr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(char.Parse).ToArray();
                masterArr[i] = arr;
            }

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "Sunset") { break; }

                string[] commandsArr = command.Split(" ");
                if (commandsArr[0] == "Collect")
                {
                    int row = int.Parse(commandsArr[1]);
                    int col = int.Parse(commandsArr[2]);

                    if (row >= 0 && row < masterArr.Length)
                    {
                        if (col >= 0 && col < masterArr[row].Length)
                        {
                            char seashell = masterArr[row][col];
                            if (seashell != '-')
                            {
                                collectedSeashellsList.Add(seashell);
                                masterArr[row][col] = '-';
                            }
                        }
                    }

                }
                else if (commandsArr[0] == "Steal")
                {
                    int row = int.Parse(commandsArr[1]);
                    int col = int.Parse(commandsArr[2]);
                    string direction = commandsArr[3];
                    bool check_landed = false;
                    char seashell = ' ';

                    if (row >= 0 && row < masterArr.Length)
                    {
                        if (col >= 0 && col < masterArr[row].Length)
                        {
                            seashell = masterArr[row][col];
                            check_landed = true;
                            if (seashell != '-')
                            {
                                stolenSeashellsList.Add(seashell);
                                masterArr[row][col] = '-';
                            }
                        }
                    }

                    if (check_landed)
                    {
                        // direction
                        int y = row;
                        int x = col;
                        for (int i = 0; i < 3; i++)
                        {
                            if (direction == "up") // UP
                            {
                                y -= 1;
                                if (y >= 0 && y < masterArr.Length)
                                {
                                    if (x >= 0 && x < masterArr[y].Length)
                                    {
                                        seashell = masterArr[y][x];
                                        if (seashell != '-')
                                        {
                                            stolenSeashellsList.Add(seashell);
                                            masterArr[y][x] = '-';
                                        }
                                    }
                                }
                            }
                            else if (direction == "down") // DOWN
                            {
                                y += 1;
                                if (y >= 0 && y < masterArr.Length)
                                {
                                    if (x >= 0 && x < masterArr[y].Length)
                                    {
                                        seashell = masterArr[y][x];
                                        if (seashell != '-')
                                        {
                                            stolenSeashellsList.Add(seashell);
                                            masterArr[y][x] = '-';
                                        }
                                    }
                                }
                            }
                            else if (direction == "left") // DOWN
                            {
                                x -= 1;
                                if (y >= 0 && y < masterArr.Length)
                                {
                                    if (x >= 0 && x < masterArr[y].Length)
                                    {
                                        seashell = masterArr[y][x];
                                        if (seashell != '-')
                                        {
                                            stolenSeashellsList.Add(seashell);
                                            masterArr[y][x] = '-';
                                        }
                                    }
                                }
                            }
                            else if (direction == "right") // DOWN
                            {
                                x += 1;
                                if (y >= 0 && y < masterArr.Length)
                                {
                                    if (x >= 0 && x < masterArr[y].Length)
                                    {
                                        seashell = masterArr[y][x];
                                        if (seashell != '-')
                                        {
                                            stolenSeashellsList.Add(seashell);
                                            masterArr[y][x] = '-';
                                        }
                                    }
                                }
                            }
                        }
                    }

                } // END Else-If "Steal"

            } // End While-Loop

            for (int i = 0; i < masterArr.Length; i++)
            {
                Console.WriteLine(String.Join(" ", masterArr[i]));
            }
       
            if (collectedSeashellsList.Count > 0)
            {
                Console.Write($"Collected seashells: {collectedSeashellsList.Count} -> ");
                Console.WriteLine(String.Join(", ", collectedSeashellsList));
            }
            else
            {
                Console.WriteLine($"Collected seashells: 0");
            }
            Console.WriteLine($"Stolen seashells: {stolenSeashellsList.Count}");

        }
    }
}
