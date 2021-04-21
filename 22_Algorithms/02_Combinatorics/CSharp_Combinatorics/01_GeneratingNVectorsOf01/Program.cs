using System;

namespace _01_GeneratingNVectorsOf01
{
    class Program
    {
        static void Main()
        {
            int n = 3;
            int[] vector = new int[n];
            Gen01(vector, 0);
        }

        public static void Gen01(int[] vector, int index)
        {
            if (index >= vector.Length)
            {
                PrintVector(vector);
                return;
            }

            for (int i = 0; i <= 1; i++)
            {
                vector[index] = i;
                Gen01(vector, index + 1);
            }

        }

        public static void PrintVector(int[] vector) 
        {
            Console.WriteLine($"({string.Join(", ", vector)})");
        }
    
    }
}
