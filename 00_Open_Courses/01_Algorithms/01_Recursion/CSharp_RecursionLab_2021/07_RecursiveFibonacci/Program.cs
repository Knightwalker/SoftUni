using System;

namespace _07_RecursiveFibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int fib = GetFib(n);
            Console.WriteLine(fib);
        }

        public static int GetFib(int n)
        {
            if (n <= 1) { return 1; }

            return GetFib(n - 1) + GetFib(n - 2);
        }

    }
}