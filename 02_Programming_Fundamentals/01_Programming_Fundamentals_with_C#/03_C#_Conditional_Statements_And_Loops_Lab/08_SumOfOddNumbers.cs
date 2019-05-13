using System;

namespace SumOfOddNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var res = 0;
            for (int i = 1; i <= n * 2; i+=2)
            {
                res += i;
                Console.WriteLine(i);
            }

            Console.WriteLine($"Sum: {res}");
        }
    }
}