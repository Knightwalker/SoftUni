using System;

namespace _11_5DifferentNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());

            bool valid = false;

            for (int a = n1; a <= n2; a++)
            {
                for (int b = a; b <= n2; b++)
                {
                    for (int c = b; c <= n2; c++)
                    {
                        for (int d = c; d <= n2; d++)
                        {
                            for (int e = d; e <= n2; e++)
                            {
                                if (a < b && b < c && c < d && d < e)
                                {
                                    valid = true;
                                    Console.WriteLine($"{a} {b} {c} {d} {e}");
                                }
                            }
                        }
                    }
                }
            }

            if (!valid) { Console.WriteLine("No"); }
        }
    }
}