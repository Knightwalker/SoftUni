using System;

namespace _15_NeighbourWars
{
    class Program
    {
        static void Main(string[] args)
        {
            int pesho_damage = int.Parse(Console.ReadLine());
            int gosho_damage = int.Parse(Console.ReadLine());

            int pesho_health = 100;
            int gosho_health = 100;

            int round = 0;

            while (gosho_health > 0 && pesho_health > 0)
            {
                round++;
                if (round % 2 == 1)
                {
                    gosho_health -= pesho_damage;

                    if (gosho_health > 0)
                    {
                        Console.WriteLine($"Pesho used Roundhouse kick and reduced Gosho to {gosho_health} health.");
                    }
                }
                else
                {
                    pesho_health -= gosho_damage;

                    if (pesho_health > 0)
                    {
                        Console.WriteLine($"Gosho used Thunderous fist and reduced Pesho to {pesho_health} health.");
                    }
                }

                if (round % 3 == 0 && gosho_health > 0 && pesho_health > 0)
                {
                    pesho_health += 10;
                    gosho_health += 10;
                }
            }

            if (round % 2 == 0)
            {
                Console.WriteLine($"Gosho won in {round}th round.");
            }
            else
            {
                Console.WriteLine($"Pesho won in {round}th round.");
            }
        }
    }
}