using System;

namespace _02_RecursiveFactorial
{
    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int f = RecursiveFactorial(n);
            Console.WriteLine($"{n}! = {f}");
        }

        public static int RecursiveFactorial(int n)
        {
            if (n == 0)
            {
                return 1;
            }
            else
            {
                return n * RecursiveFactorial(n - 1);
            }
        }
    }
}