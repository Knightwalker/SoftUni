using System;

namespace _05_CharacterStats
{
    class Program
    {
        static void Main(string[] args)
        {
            string character_name = Console.ReadLine();
            int current_health = int.Parse(Console.ReadLine());
            int maximum_health = int.Parse(Console.ReadLine());
            int current_energy = int.Parse(Console.ReadLine());
            int maximum_energy = int.Parse(Console.ReadLine());

            string health_depleted = new string('.', maximum_health - current_health);
            string health = new string('|', current_health);
            string energy_depleted = new string('.', maximum_energy - current_energy);
            string energy = new string('|', current_energy);

            Console.WriteLine($"Name: {character_name}");
            Console.WriteLine($"Health: |{health}{health_depleted}|");
            Console.WriteLine($"Energy: |{energy}{energy_depleted}|");
        }
    }
}