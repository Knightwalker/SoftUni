using System;

namespace _02_Factorial
{
    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int fact = Fact(n);
            Console.WriteLine($"{n}! = {fact}");
        }

        public static int Fact(int n)
        {
            if (n == 0)
            {
                return 1;
            }
            else
            {
                return n * Fact(n - 1);
            }
        }
    }
}