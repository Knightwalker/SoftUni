using System;
using System.Linq;
using System.Collections.Generic;

namespace TestTest
{
    class Program
    {
        static void Main(string[] args)
        {
            const int constDamage = 45;
            const int constHealth = 250;
            const int constArmor = 10;

            var dragonDict = new Dictionary<string, Dictionary<string, int[]>>();
            int numberOfDragons = int.Parse(Console.ReadLine());

            for (int i = 0; i < numberOfDragons; i++)
            {
                string[] input = Console.ReadLine().Split().ToArray();
                string type = input[0];
                string name = input[1];
                int damage = 0;
                int health = 0;
                int armor = 0;

                if(input[2] == "null") { damage = constDamage; }
                else { damage = int.Parse(input[2]); }

                if (input[3] == "null") { health = constHealth; }
                else { health = int.Parse(input[3]); }

                if (input[4] == "null") { armor = constArmor; }
                else { armor = int.Parse(input[4]); }

                if(!dragonDict.ContainsKey(type))
                {
                    dragonDict[type] = new Dictionary<string, int[]>();
                }

                if(!dragonDict[type].ContainsKey(name))
                {
                    dragonDict[type][name] = new int[3];
                    dragonDict[type][name][0] = damage;
                    dragonDict[type][name][1] = health;
                    dragonDict[type][name][2] = armor;
                }
                else
                {
                    dragonDict[type][name][0] = damage;
                    dragonDict[type][name][1] = health;
                    dragonDict[type][name][2] = armor;
                }
            }

            foreach (var item in dragonDict)
            {
                double totalDamage = 0;
                double totalHealth = 0;
                double totalArmor = 0;
                double counter = 0;
                foreach (var item2 in item.Value)
                {
                    totalDamage += item2.Value[0];
                    totalHealth += item2.Value[1];
                    totalArmor += item2.Value[2];
                    counter++;
                }

                Console.WriteLine($"{item.Key}::({(totalDamage/counter):F2}/{(totalHealth / counter):F2}/{(totalArmor / counter):F2})");
                foreach (var item2 in item.Value.OrderBy(x => x.Key))
                {
                    Console.WriteLine($"-{item2.Key} -> damage: {item2.Value[0]}, health: {item2.Value[1]}, armor: {item2.Value[2]}");
                }
            }
        }
    }
}