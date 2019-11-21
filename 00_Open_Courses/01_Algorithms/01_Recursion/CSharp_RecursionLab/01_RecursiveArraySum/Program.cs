using System;
using System.Linq;

namespace _01_RecursiveArraySum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbersArr = Console.ReadLine().Split().Select(x => int.Parse(x)).ToArray();

            int sum = Sum(numbersArr, 0);
            Console.WriteLine(sum);
        }

        static int Sum(int[] arr, int index)
        {
            if (index == arr.Length)
            {
                return 0;
            }

            return arr[index] + Sum(arr, index + 1);
        }

    }
}