using System;

namespace _04_BeverageLabels
{
    class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            double volume = double.Parse(Console.ReadLine());
            double energy = double.Parse(Console.ReadLine());
            double sugar = double.Parse(Console.ReadLine());

            double multiplier = volume / 100;
            energy = energy * multiplier;
            sugar = sugar * multiplier;

            Console.WriteLine($"{volume}ml {product}:");
            Console.WriteLine($"{energy}kcal, {sugar}g sugars");
        }
    }
}
