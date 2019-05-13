using System;

namespace _12_TestNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());
            int sumMax = int.Parse(Console.ReadLine());
            int sum = 0;
            int counter = 0;

            for (int a = n; a >= 1; a--)
            {
                for (int b = 1; b <= m; b++)
                {
                    sum += (a * b) * 3;
                    counter++;

                    if (sum >= sumMax)
                    {
                        Console.WriteLine($"{counter} combinations");
                        Console.WriteLine($"Sum: {sum} >= {sumMax}");
                        return;
                    }
                }
            }

            Console.WriteLine($"{counter} combinations");
            Console.WriteLine($"Sum: {sum}");
        }
    }
}