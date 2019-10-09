using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] inputDoubleArr = Console.ReadLine()
             .Split(", ")
             .Select(double.Parse)
             .Select(x => x = x + (x * 0.2))
             .Select(x => Math.Round(x, 2))
             .ToArray();

            foreach (var item in inputDoubleArr)
            {
                Console.WriteLine($"{item:F2}");
            }
        
        }

    }
}