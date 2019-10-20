using System;

namespace _03_SpaceStationEstablishment
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());
            char[,] galaxy = new char[size, size];
            bool check_novoid = true;

            //ship starting position declaration
            int y = 0;
            int x = 0;

            for (int i = 0; i < size; i++)
            {
                string rows = Console.ReadLine();
                for (int j = 0; j < size; j++)
                {
                    //ship starting position initialization
                    if (rows[j] == 'S') { y = i; x = j; }

                    galaxy[i, j] = rows[j];
                }
            }

            // collecting star power
            int starPower = 0;
            while (starPower < 50)
            {
                string command = Console.ReadLine();

                galaxy[y, x] = '-'; // the ship leaves
                if (command == "up") { y -= 1; }
                else if (command == "down") { y += 1; }
                else if (command == "left") { x -= 1; }
                else if (command == "right") { x += 1; }

                // check if the ship is inside the galaxy
                if (y >= 0 && y < galaxy.GetLength(0) && x >= 0 && x < galaxy.GetLength(1))
                {
                    char destination = galaxy[y, x];
                    if (char.IsDigit(destination))
                    {
                        starPower += int.Parse(destination.ToString());
                        galaxy[y, x] = 'S';
                    }
                    else if (destination == 'O')
                    {
                        galaxy[y, x] = '-'; // we enter the black hole
                        int newBlackHoleY = 0;
                        int newBlackHoleX = 0;

                        for (int i = 0; i < size; i++)
                        {
                            for (int j = 0; j < size; j++)
                            {
                                if(galaxy[i, j] == 'O')
                                {
                                    newBlackHoleY = i;
                                    newBlackHoleX = j;
                                }
                            }
                        }

                        galaxy[newBlackHoleY, newBlackHoleX] = 'S';
                        y = newBlackHoleY;
                        x = newBlackHoleX;

                    }
                }
                else
                {
                    check_novoid = false;
                    break;
                }

            }

            // print result
            if (check_novoid)
            {
                Console.WriteLine("Good news! Stephen succeeded in collecting enough star power!");
                Console.WriteLine($"Star power collected: {starPower}");
                for (int i = 0; i < size; i++)
                {
                    for (int j = 0; j < size; j++)
                    {
                        Console.Write(galaxy[i, j]);
                    }
                    Console.WriteLine();
                }
            }
            else
            {
                Console.WriteLine("Bad news, the spaceship went to the void.");
                Console.WriteLine($"Star power collected: {starPower}");
                for (int i = 0; i < size; i++)
                {
                    for (int j = 0; j < size; j++)
                    {
                        Console.Write(galaxy[i, j]);
                    }
                    Console.WriteLine();
                }
            }


        }
    }
}
