using System;

namespace _01_RecursiveArraySum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbersArr = new[] { 1, 2, 3, 4, 5 };
            int sum = Sum(numbersArr, 0);
            Console.WriteLine(sum); // 15
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