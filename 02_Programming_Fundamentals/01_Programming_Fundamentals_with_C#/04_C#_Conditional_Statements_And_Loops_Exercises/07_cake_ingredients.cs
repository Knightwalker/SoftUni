using System;

namespace _07_CakeIngredients
{
    class Program
    {
        static void Main(string[] args)
        {
            bool bake = false;
            int ingredient_counter = 0;

            while (!bake)
            {
                string ingredient = Console.ReadLine();

                if (!(ingredient == "Bake!"))
                {
                    ingredient_counter += 1;
                    Console.WriteLine($"Adding ingredient {ingredient}.");
                }
                else
                {
                    bake = true;
                    Console.WriteLine($"Preparing cake with {ingredient_counter} ingredients.");
                }
            }
        }
    }
}