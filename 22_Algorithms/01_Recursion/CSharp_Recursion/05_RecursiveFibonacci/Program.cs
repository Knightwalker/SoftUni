using System;

namespace _05_RecursiveFibonacci
{
    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int fib = Fib(n);
            Console.WriteLine(fib);
        }

        public static int Fib(int n)
        {
            if (n <= 1) { return 1; }

            return Fib(n - 1) + Fib(n - 2);
        }

    }
}