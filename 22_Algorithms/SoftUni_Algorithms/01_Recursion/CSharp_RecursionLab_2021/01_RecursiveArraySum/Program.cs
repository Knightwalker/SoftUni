using System;

namespace _01_RecursiveArraySum
{
    class Program
    {
        public static void Main()
        {
            int[] arr = Array.ConvertAll(Console.ReadLine().Split(" "), delegate (string s) { return int.Parse(s); });
            int sum = SumArrayWithRecursion(arr, 0);
            Console.WriteLine(sum);
        }

        public static int SumArrayWithRecursion(int[] arr, int idx)
        {
            if (idx == arr.Length) { return 0; }

            int n1 = arr[idx];
            int n2 = SumArrayWithRecursion(arr, idx + 1);
            int sum = n1 + n2;
            return sum;
        } 
    }
}