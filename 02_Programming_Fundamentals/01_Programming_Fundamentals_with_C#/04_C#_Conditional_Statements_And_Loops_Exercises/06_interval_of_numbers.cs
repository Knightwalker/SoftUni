using System;

namespace _06_IntervalOfNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            int hight = 0;
            int low = 0;

            if (a > b) { hight = a; low = b; }
            else if (a < b) { hight = b; low = a; }

            for (int i = low; i <= hight; i++)
            {
                Console.WriteLine(i);
            }
        }
    }
}