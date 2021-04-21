using System;
using System.Collections.Generic;

namespace _02_NestedLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<int> numbers = new List<int>();
            RecursiveNestedLoops(numbers, 0, n);

        }

        static void RecursiveNestedLoops(List<int> numbers, int loops, int n)
        {
            if (loops == n)
            {
                Console.WriteLine(String.Join(" ", numbers));
                return;
            }

            for (int i = 1; i <= n; i++)
            {
                numbers.Add(i);
                RecursiveNestedLoops(numbers, loops + 1, n);
                numbers.RemoveAt(numbers.Count - 1);
            }
        
        }
    }
}