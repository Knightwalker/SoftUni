using System;

namespace _02_BookWorm
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            int n = int.Parse(Console.ReadLine());

            char[,] matrix = new char[n, n];
            int y = -1;
            int x = -1;

            for (int i = 0; i < n; i++)
            {
                string input2 = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = input2[j];
                    if (input2[j] == 'P')
                    {
                        y = i;
                        x = j;
                    }
                }
            }

            while (true)
            {
                string input3 = Console.ReadLine();
                if (input3 == "end") { break; }

                if (input3 == "up")
                {
                    if (y - 1 >= 0 && y - 1 < n && x >= 0 && x < n)
                    {
                        matrix[y, x] = '-';
                        y -= 1;
                        if (matrix[y, x] != '-')
                        {
                            input += matrix[y, x];
                        }
                        matrix[y, x] = 'P';
                    }
                    else
                    {
                        if (input.Length > 0)
                        {
                            input = input.Remove(input.Length - 1);
                        }
                        continue;
                    }
                }
                else if (input3 == "down")
                {
                    if (y + 1 >= 0 && y + 1 < n && x >= 0 && x < n)
                    {
                        matrix[y, x] = '-';
                        y += 1;
                        if (matrix[y, x] != '-')
                        {
                            input += matrix[y, x];
                        }
                        matrix[y, x] = 'P';
                    }
                    else
                    {
                        if (input.Length > 0)
                        {
                            input = input.Remove(input.Length - 1);
                        }
                        continue;
                    }
                }
                else if (input3 == "left")
                {
                    if (y >= 0 && y < n && x - 1 >= 0 && x - 1 < n)
                    {
                        matrix[y, x] = '-';
                        x -= 1;
                        if (matrix[y, x] != '-')
                        {
                            input += matrix[y, x];
                        }
                        matrix[y, x] = 'P';
                    }
                    else
                    {
                        if (input.Length > 0)
                        {
                            input = input.Remove(input.Length - 1);
                        }
                        continue;
                    }
                }
                else if (input3 == "right")
                {
                    if (y >= 0 && y < n && x + 1 >= 0 && x + 1 < n)
                    {
                        matrix[y, x] = '-';
                        x += 1;
                        if (matrix[y, x] != '-')
                        {
                            input += matrix[y, x];
                        }
                        matrix[y, x] = 'P';
                    }
                    else
                    {
                        if (input.Length > 0)
                        {
                            input = input.Remove(input.Length - 1);
                        }
                        continue;
                    }
                }

            } // END While...loop

            Console.WriteLine(input);
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(matrix[i, j]);
                }
                Console.WriteLine();
            }

        }
    }
}
