using System;

namespace _03_CombinationsWithRepetitions
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());
            int[] numbers = new int[k];
            Combinations(numbers, n, 0, 1);

        }

        static void Combinations(int[] numbers, int n, int index, int element)
        {
            if (index >= numbers.Length)
            {
                Console.WriteLine(String.Join(" ", numbers));
                return;
            }

            for (int i = element; i <= n; i++)
            {
                numbers[index] = i;
                Combinations(numbers, n, index + 1, i);
            }

        }
    }
}