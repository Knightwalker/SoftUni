using System;

namespace _03_RestaurantDiscount
{
    class Program
    {
        static void Main(string[] args)
        {
            double people = double.Parse(Console.ReadLine());
            string package = Console.ReadLine();

            string hall = "";
            double price = 0.0;
            double discount = 0.0;
            double total_price = 0.0;

            if (people > 0 && people <= 50) { price += 2500; hall = "Small Hall"; }
            else if (people > 50 && people <= 100) { price += 5000; hall = "Terrace"; }
            else if (people > 100 && people <= 120) { price += 7500; hall = "Great Hall"; }

            if (package == "Normal") { price += 500; discount += 0.05; }
            else if (package == "Gold") { price += 750; discount += 0.10; }
            else if (package == "Platinum") { price += 1000; discount += 0.15; }

            total_price = price - (price * discount);
            total_price = total_price / people;

            if (people >= 0 && people <= 120)
            {
                Console.WriteLine($"We can offer you the {hall}");
                Console.WriteLine($"The price per person is {total_price:F2}$");
            }
            else
            {
                Console.WriteLine($"We do not have an appropriate hall.");
            }

        }
    }
}