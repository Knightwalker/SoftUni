using System;
using System.Linq;

namespace _05_GeneratingCombinations
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int[] arr = new int[n];
            GenCombs(arr, 0, 4, 8);
        }

        static void GenCombs(int[] arr, int index, int startN, int endN)
        {
            if (index > arr.Length - 1)
            {
                Console.WriteLine(string.Join("", arr));
                return;
            }

            for (int i = startN; i <= endN; i++)
            {
                arr[index] = i;
                GenCombs(arr, index + 1, i + 1, endN);
            }

        }
    }
}
