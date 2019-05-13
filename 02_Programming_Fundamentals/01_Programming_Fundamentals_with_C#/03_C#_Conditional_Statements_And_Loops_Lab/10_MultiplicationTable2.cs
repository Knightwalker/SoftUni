using System;

namespace MultiplicationTable2
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int multiplier = int.Parse(Console.ReadLine());

            bool validate_multiplier = multiplier >= 0 && multiplier <= 10;

            if (validate_multiplier) {
                for (int i = multiplier; i <= 10; i++)
                {
                    int res = n * i;
                    Console.WriteLine($"{n} X {i} = {res}");
                }
            } else if (!validate_multiplier) {
                int res = n * multiplier;
                Console.WriteLine($"{n} X {multiplier} = {res}");
            }

        }
    }
}