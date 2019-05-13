using System;

namespace _10_TriangleOfNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int a = 1; a <= n; a++)
            {
                for (int b = 1; b <= a; b++)
                {
                    Console.Write($"{a} ");
                }
                Console.WriteLine();
            }
        }
    }
}