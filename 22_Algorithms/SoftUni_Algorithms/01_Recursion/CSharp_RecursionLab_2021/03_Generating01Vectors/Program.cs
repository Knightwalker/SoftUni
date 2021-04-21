using System;

namespace _03_Generating01Vectors
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] arr = new int[n];
            GenCombs(arr, 0);
        }

        // Generate N vectors with all combinations of 0 and 1 
        public static void GenCombs(int[] arr, int idx)
        {
            if (idx > arr.Length - 1)
            {
                Console.WriteLine(string.Join("", arr));
                return;
            }

            for(int i = 0; i <= 1; i++)
            {
                arr[idx] = i;
                GenCombs(arr, idx + 1);
            }

        }
    }
}