using System;

namespace _01_GeneratingNVectorsOfK
{
    class Program
    {
        static void Main()
        {
            int n = 3;
            int startK = 0;
            int endK = 3;
            int[] vector = new int[n];
            Gen01(vector, startK, endK, 0);
        }

        public static void Gen01(int[] vector, int startK, int endK, int index)
        {
            if (index >= vector.Length)
            {
                PrintVector(vector);
                return;
            }

            for (int i = startK; i <= endK; i++)
            {
                vector[index] = i;
                Gen01(vector, startK, endK, index + 1);
            }

        }

        public static void PrintVector(int[] vector)
        {
            Console.WriteLine($"({string.Join(", ", vector)})");
        }

    }
}
