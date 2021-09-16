using System;

namespace _04_Factorial_Performance
{
    class Program
    {
        static void Main()
        {
            int n = 16;            // 16! = 2004189184
            int times = 1_000_000; // one million times

            var startTime = DateTime.Now;
            for (int i = 0; i < times; i++)
            {
                int fact = RecurFact(n);
            }
            var endTime = DateTime.Now;
            Console.WriteLine($"Recursive factorial time: {endTime - startTime}");

            startTime = DateTime.Now;
            for (int i = 0; i < times; i++)
            {
                int fact = IterFact(n);
            }
            endTime = DateTime.Now;
            Console.WriteLine($"Iterative factorial time: {endTime - startTime}");
        }

        public static int RecurFact(int n)
        {
            if (n == 0)
            {
                return 1;
            }
            else
            {
                return n * RecurFact(n - 1);
            }
        }

        public static int IterFact(int n)
        {
            int result = 1;
            for (int i = 1; i <= n; i++)
            {
                result *= i;
            }
            return result;
        }
    }
}