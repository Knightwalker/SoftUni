using System;

namespace CombatSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            int initialHealth = 100;
            int currentHealth = 100;
            int coins = 0;

            int bestArea = 0;
            bool dead = false;

            var forestArr = Console.ReadLine().Split("|");
            for (int i = 0; i < forestArr.Length; i++)
            {
                string[] area = forestArr[i].Split(" ");
                string encounter = area[0];
                int number = int.Parse(area[1]);

                if (encounter == "potion")
                {
                    int overheal = 0;
                    int realheal = 0;
                    if (currentHealth + number > initialHealth)
                    {
                        overheal = initialHealth + number - 100;
                        realheal = 100 - currentHealth;
                        currentHealth = 100;
                    }
                    else
                    {
                        realheal = number;
                        currentHealth += realheal;
                    }
                    Console.WriteLine($"You healed for {realheal} hp.");
                    Console.WriteLine($"Current health: {currentHealth} hp.");
                }
                else if (encounter == "chest")
                {
                    coins += number;
                    Console.WriteLine($"You found {number} coins.");
                }
                else if (encounter == "evade")
                {
                    if (number >= 0 && number < forestArr.Length)
                    {
                        i += number;
                        continue;
                    }
                }
                else
                {
                    int damage = number;
                    //if (number < 0) { damage = 0; } to be discussed

                    if (currentHealth - damage > 0)
                    {
                        currentHealth -= damage;
                        Console.WriteLine($"You slayed {encounter}.");
                    }
                    else if (currentHealth - damage <= 0)
                    {
                        currentHealth -= Math.Abs(damage);
                        bestArea = i + 1;
                        dead = true;
                        Console.WriteLine($"You died! Killed by {encounter}.");
                        break;
                    }
                }

            }

            if (dead)
            {
                Console.WriteLine($"Best area: {bestArea}");
            }
            else
            {
                Console.WriteLine("You've made it!");
                Console.WriteLine($"Coins: {coins}");
                Console.WriteLine($"Health: {currentHealth}");
            }

        }
    }
}
