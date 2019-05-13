using System;

namespace _08_CaloriesCounter
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int cheese = 500;
            int tomato_sauce = 150;
            int salami = 600;
            int pepper = 50;

            int total_calories = 0;

            for (int i = 1; i <= n; i++)
            {
                string ingredient = Console.ReadLine().ToLower();

                if (ingredient == "cheese") { total_calories += cheese; }
                else if (ingredient == "tomato sauce") { total_calories += tomato_sauce; }
                else if (ingredient == "salami") { total_calories += salami; }
                else if (ingredient == "pepper") { total_calories += pepper; }
            }

            Console.WriteLine($"Total calories: {total_calories}");
        }
    }
}