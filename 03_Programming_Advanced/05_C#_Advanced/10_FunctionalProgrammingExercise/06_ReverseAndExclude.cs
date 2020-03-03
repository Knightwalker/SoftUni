using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int, bool> filter = (n, y) => n % y != 0;

            int[] intArr = Console.ReadLine()
                .Split(" ")
                .Select(int.Parse)
                .Reverse()
                .ToArray();

            int divisor = int.Parse(Console.ReadLine());
            int[] resArr = intArr.Where(n => filter(n, divisor)).ToArray();
            Console.WriteLine(string.Join(" ", resArr));

        }
    }
}