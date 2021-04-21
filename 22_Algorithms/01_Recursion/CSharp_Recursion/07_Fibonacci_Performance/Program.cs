using System;

namespace _07_Fibonacci_Performance
{
    class Program
    {
        static void Main()
        {
            int n = 5;
            int times = 1_000_000; // one million times

            var startTime = DateTime.Now;
            for (int i = 0; i < times; i++)
            {
                int fib = RecurFib(n);
            }
            var endTime = DateTime.Now;
            Console.WriteLine($"Recursive fibonacci time: {endTime - startTime}");

            startTime = DateTime.Now;
            for (int i = 0; i < times; i++)
            {
                int fib = IterFib(n);
            }
            endTime = DateTime.Now;
            Console.WriteLine($"Iterative fibonacci time: {endTime - startTime}");
        }

        public static int RecurFib(int n)
        {
            if (n <= 1) { return 1; }

            return RecurFib(n - 1) + RecurFib(n - 2);
        }

        public static int IterFib(int n)
        {
            int previouspreviousNumber = 0;
            int previousNumber = 0;
            int currentNumber = 1;

            for (int i = 1; i < n; i++)
            {
                previouspreviousNumber = previousNumber;
                previousNumber = currentNumber;
                currentNumber = previouspreviousNumber + previousNumber;
            }
            return currentNumber;
        }

    }
}
