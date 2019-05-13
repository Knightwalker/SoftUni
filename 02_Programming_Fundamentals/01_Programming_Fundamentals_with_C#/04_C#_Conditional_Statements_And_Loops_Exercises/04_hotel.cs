using System;

namespace _04_Hotel
{
    class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine();
            double nights = double.Parse(Console.ReadLine());

            double studio_price = 0.0;
            double double_price = 0.0;
            double suite_price = 0.0;

            if (month == "May" || month == "October")
            {
                studio_price = 50;
                double_price = 65;
                suite_price = 75;

                if (nights > 7)
                {
                    studio_price = studio_price - (studio_price * 0.05);
                }
            }
            else if (month == "June" || month == "September") {
                studio_price = 60;
                double_price = 72;
                suite_price = 82;

                if (nights > 14)
                {
                    double_price = double_price - (double_price * 0.10);
                }
            }
            else if (month == "July" || month == "August" || month == "December")
            {
                studio_price = 68;
                double_price = 77;
                suite_price = 89;

                if (nights > 14)
                {
                    suite_price = suite_price - (suite_price * 0.15);
                }
            }

            double_price = double_price * nights;
            suite_price = suite_price * nights;

            if ((month == "September" || month == "October") && nights > 7) {
                nights -= 1;
                studio_price = studio_price * nights;
            }
            else { studio_price = studio_price * nights; }

            Console.WriteLine($"Studio: {studio_price:F2} lv.");
            Console.WriteLine($"Double: {double_price:F2} lv.");
            Console.WriteLine($"Suite: {suite_price:F2} lv.");
        }
    }
}