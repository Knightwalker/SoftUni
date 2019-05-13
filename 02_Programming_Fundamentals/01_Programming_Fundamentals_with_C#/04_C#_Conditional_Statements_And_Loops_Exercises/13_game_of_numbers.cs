using System;

namespace _13_GameOfNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());
            int magical_number = int.Parse(Console.ReadLine());
            int counter = 0;

            for (int a = n; a <= m; a++)
            {
                for (int b = n; b <= m; b++)
                {
                    if (a + b == magical_number)
                    {
                        Console.WriteLine($"Number found! {b} + {a} = {magical_number}");
                        return;
                    }
                    counter++;
                }
            }

            Console.WriteLine($"{counter} combinations - neither equals {magical_number}");
        }
    }
}