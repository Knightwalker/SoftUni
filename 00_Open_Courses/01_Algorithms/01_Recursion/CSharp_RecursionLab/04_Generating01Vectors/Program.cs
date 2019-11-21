using System;

namespace _04_Generating01Vectors
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] arr = new int[n];
            Gen01(arr, 0);
        }

        static void Gen01(int[] arr, int index)
        {

            if (index > arr.Length - 1)
            {
                Console.WriteLine(string.Join("", arr));
                return;
            }

            for (int i = 0; i <= 1; i++)
            {
                arr[index] = i;
                Gen01(arr, index + 1);
            }

        }
    }
}