using System;

namespace _16_ComparingFloats
{
    class Program
    {
        static void Main(string[] args)
        {
            double num1 = double.Parse(Console.ReadLine());
            double num2 = double.Parse(Console.ReadLine());
            double eps = 0.000001;

            if (Math.Abs(num1 - num2) < eps)
            {
                Console.WriteLine("True");
            } else
            {
                Console.WriteLine("False");
            }
        }
    }
}