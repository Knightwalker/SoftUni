using System;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] chessBoard = new char[n, n];
            int counter = 0;

            for (int i = 0; i < n; i++)
            {
                string chessPieces = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    chessBoard[i, j] = chessPieces[j];
                }
            }

            while (true)
            {
                int KnightFights = 0;
                int coordinatesY = -1;
                int coordinatesX = -1;

                for (int i = 0; i < n; i++)
                {
                    for (int j = 0; j < n; j++)
                    {
                        if (chessBoard[i, j] != 'K') { continue; }

                        char currentKnight = chessBoard[i, j];
                        int currentKnightFights = 0;

                        // Checking all Knight Movement patterns
                        int y = 0; int x = 0;

                        // Top Left
                        y = i - 2; x = j - 1;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Top Right
                        y = i - 2; x = j + 1;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Mid Left Top
                        y = i - 1; x = j - 2;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Mid Left Bottom
                        y = i + 1; x = j - 2;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Mid Right Top
                        y = i - 1; x = j + 2;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Mid Right Bottom
                        y = i + 1; x = j + 2;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Bottom Left
                        y = i + 2; x = j - 1;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        // Bottom Right
                        y = i + 2; x = j + 1;
                        if ((y >= 0 && y < n) && (x >= 0 && x < n))
                        {
                            if (chessBoard[y, x] == 'K')
                            {
                                currentKnightFights++;
                            }
                        }

                        if (currentKnightFights > KnightFights)
                        {
                            KnightFights = currentKnightFights;
                            coordinatesY = i;
                            coordinatesX = j;
                        }

                    } // END FOR-LOOP

                } // END FOR-LOOP

                if (KnightFights > 0) // THIS PART IS IMPORTANT
                {
                    chessBoard[coordinatesY, coordinatesX] = 'O';
                    counter++;
                }
                else if (KnightFights == 0)
                {
                    break;
                }

            } // END WHILE-LOOP

            Console.WriteLine(counter);

        }
    }
}