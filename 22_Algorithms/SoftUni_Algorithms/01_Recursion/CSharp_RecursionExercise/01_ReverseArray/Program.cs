using System;

namespace _01_ReverseArray
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] arr = Console.ReadLine().Split();
            PrintArrayReversed(arr, arr.Length - 1);

        }

        static void PrintArrayReversed(string[] arr, int index)
        {

            if (index == -1)
            {
                return;
            }

            Console.Write(arr[index] + " ");
            PrintArrayReversed(arr, index - 1);
        }

    }
}