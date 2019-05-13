using System;

namespace _02_RectangleArea
{
    class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());

            double result = width * height;

            Console.WriteLine($"{result:F2}");
        }
    }
}