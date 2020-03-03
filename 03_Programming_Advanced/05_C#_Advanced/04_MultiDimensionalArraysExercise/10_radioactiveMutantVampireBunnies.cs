using System;
using System.Linq;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] dimensions = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int n = dimensions[0];
            int m = dimensions[1];
            char[][] bunnyLairArr = new char[n][];

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                int inputLenght = input.Length;
                char[] inputArr = new char[m];
                for (int j = 0; j < inputLenght; j++)
                {
                    inputArr[j] = input[j];
                }
                bunnyLairArr[i] = inputArr;

            }

            string commands = Console.ReadLine();
            int commandsLenght = commands.Length;
            char[] commandsArr = new char[commandsLenght];
            for (int i = 0; i < commandsLenght; i++)
            {
                commandsArr[i] = commands[i];
            }

            // Get The Player Coordinates and set some variables
            int y = -1;
            int x = -1;
            bool playerEscapes = true;
            for (int i = 0; i < n; i++)
            {
                bool exit = false;
                for (int j = 0; j < m; j++)
                {
                    if (bunnyLairArr[i][j] == 'P')
                    {
                        y = i;
                        x = j;
                        exit = true;
                        break;
                    }
                }
                if (exit == true) { break; }
            }

            // Move The Player around until he escapes or die
            for (int i = 0; i < commandsLenght; i++)
            {
                char currentCommand = commandsArr[i];
                bool exit = false;

                if (currentCommand == 'U') // Move UP
                {
                    if (y - 1 >= 0) // The player is inside the lair
                    {
                        bunnyLairArr[y][x] = '.'; // The player leaves his current possition
                        y -= 1;
                        if (bunnyLairArr[y][x] == 'B') // The player encounters a bunny and DIES
                        {
                            //Console.WriteLine($"dead: {y} {x}");
                            playerEscapes = false;
                            exit = true;
                        }
                        else if (bunnyLairArr[y][x] == '.')
                        {
                            bunnyLairArr[y][x] = 'P'; // The player encounters a free room and LIVES
                        }
                    }
                    else // The player escapes (he goes outside of the index)
                    {
                        //y -= 1;
                        //Console.WriteLine($"won: {y} {x}");
                        playerEscapes = true;
                        exit = true;
                    }
                }
                else if (currentCommand == 'D') // Move DOWN
                {
                    if (y + 1 < n)
                    {
                        bunnyLairArr[y][x] = '.';
                        y += 1;
                        if (bunnyLairArr[y][x] == 'B')
                        {
                            //Console.WriteLine($"dead: {y} {x}");
                            playerEscapes = false;
                            exit = true;
                        }
                        else if (bunnyLairArr[y][x] == '.')
                        {
                            bunnyLairArr[y][x] = 'P';
                        }
                    }
                    else
                    {
                        //y += 1;
                        //Console.WriteLine($"won: {y} {x}");
                        playerEscapes = true;
                        exit = true;
                    }
                }
                else if (currentCommand == 'L') // Move LEFT
                {
                    if (x - 1 >= 0)
                    {
                        bunnyLairArr[y][x] = '.';
                        x -= 1;
                        if (bunnyLairArr[y][x] == 'B')
                        {
                            //Console.WriteLine($"dead: {y} {x}");
                            playerEscapes = false;
                            exit = true;
                        }
                        else if (bunnyLairArr[y][x] == '.')
                        {
                            bunnyLairArr[y][x] = 'P';
                        }
                    }
                    else
                    {
                        //x -= 1;
                        //Console.WriteLine($"won: {y} {x}");
                        playerEscapes = true;
                        exit = true;
                    }
                }
                else if (currentCommand == 'R') // Move RIGHT
                {
                    if (x + 1 < n)
                    {
                        bunnyLairArr[y][x] = '.';
                        x += 1;
                        if (bunnyLairArr[y][x] == 'B')
                        {
                            //Console.WriteLine($"dead: {y} {x}");
                            playerEscapes = false;
                            exit = true;
                        }
                        else if (bunnyLairArr[y][x] == '.')
                        {
                            bunnyLairArr[y][x] = 'P';
                        }
                    }
                    else
                    {
                        //x += 1;
                        //Console.WriteLine($"won: {y} {x}");
                        playerEscapes = true;
                        exit = true;
                    }
                }

                // EACH TURN THE BUNNIES MULTIPLY
                for (int lair_y = 0; lair_y < n; lair_y++)
                {
                    for (int lair_x = 0; lair_x < m; lair_x++)
                    {
                        char currentCoordinates = bunnyLairArr[lair_y][lair_x];
                        if (currentCoordinates == 'B')
                        {
                            int row_begin = lair_y - 1;
                            int row_end = lair_y + 1;
                            int col_begin = lair_x - 1;
                            int col_end = lair_x + 1;
                            if (lair_y - 1 < 0) { row_begin = 0; }
                            if (lair_y + 1 >= n) { row_end = n - 1; }
                            if (lair_x - 1 < 0) { col_begin = 0; }
                            if (lair_x + 1 >= m) { col_end = m - 1; }

                            int topY = lair_y - 1; if (lair_y - 1 < 0) { topY = 0; }
                            int topX = lair_x;
                            int leftY = lair_y;
                            int leftX = lair_x - 1; if (lair_x - 1 < 0) { leftX = 0; }
                            int rightY = lair_y;
                            int rightX = lair_x + 1; if (lair_x + 1 >= m) { rightX = m - 1; }
                            int downY = lair_y + 1; if (lair_y + 1 >= n) { downY = n - 1; }
                            int downX = lair_x;

                            for (int j = row_begin; j <= row_end; j++)
                            {
                                for (int k = col_begin; k <= col_end; k++)
                                {
                                    if ((j == topY && k == topX) || (j == leftY && k == leftX) || (j == rightY && k == rightX) || (j == downY && k == downX))
                                    {
                                        // spawn new 'baby' bunnies around the current bunny
                                        if ((j == lair_y) && (k == lair_x))
                                        {
                                            continue; // skip current bunny
                                        }
                                        else if (bunnyLairArr[j][k] == '.')
                                        {
                                            bunnyLairArr[j][k] = 'b';
                                        }
                                        else if (bunnyLairArr[j][k] == 'P') // the bunnies hit the player and he dies
                                        {
                                            //Console.WriteLine($"dead: {y} {x}");
                                            bunnyLairArr[j][k] = 'b';
                                            playerEscapes = false;
                                            exit = true;
                                        }
                                    }
                                }
                            }

                        }
                    }

                } // END EACH TURN THE BUNNIES MULTIPLY

                // EACH TURN THE BUNNIES MULTIPLY - PART 2
                for (int j = 0; j < n; j++)
                {
                    for (int k = 0; k < m; k++)
                    {
                        if (bunnyLairArr[j][k] == 'b')
                        {
                            bunnyLairArr[j][k] = 'B';
                        }
                    }
                }

                //Console.WriteLine("\n");
                //for (int j = 0; j < n; j++)
                //{
                //    for (int k = 0; k < m; k++)
                //    {
                //        Console.Write(bunnyLairArr[j][k]);
                //    }
                //    Console.WriteLine();
                //}

                if (exit == true) { break; }

            } // END FOR-LOOP

            // BUXFIX

            if (playerEscapes == true)
            {
                for (int j = 0; j < n; j++)
                {
                    for (int k = 0; k < m; k++)
                    {
                        if (bunnyLairArr[j][k] == 'P')
                        {
                            bunnyLairArr[j][k] = '.';
                        }
                    }
                }
            }

            // PRINT

            for (int j = 0; j < n; j++)
            {
                for (int k = 0; k < m; k++)
                {
                    Console.Write(bunnyLairArr[j][k]);
                }
                Console.WriteLine();
            }

            if (playerEscapes == true)
            {
                Console.WriteLine($"won: {y} {x}");
            }
            else
            {
                Console.WriteLine($"dead: {y} {x}");
            }

        }

    }
}