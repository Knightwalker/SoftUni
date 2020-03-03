using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] inputArr = Console.ReadLine()
                .Split(", ")
                .Select(int.Parse)
                .ToArray();

            Console.WriteLine(inputArr.Length);
            Console.WriteLine(inputArr.Sum());
        }

    }
}