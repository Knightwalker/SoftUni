using System;

namespace _02_ChooseADrink2
{
    class Program
    {
        static void Main(string[] args)
        {
            string profession = Console.ReadLine();
            double quantity = double.Parse(Console.ReadLine());

            double res = 0.0;

            double water = 0.70;
            double coffee = 1.00;
            double beer = 1.70;
            double tea = 1.20;

            if (profession == "Athlete") { res = quantity * water; }
            else if (profession == "Businessman" || profession == "Businesswoman") { res = quantity * coffee; }
            else if (profession == "SoftUni Student") { res = quantity * beer; }
            else { res = quantity * tea; }

            Console.WriteLine($"The {profession} has to pay {res:F2}.");
        }
    }
}