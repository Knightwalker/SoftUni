using System;

namespace MultidimensionalArraysLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] matrix = new char[n, n];

            for (int i = 0; i < n; i++)
            {
                string currentRowStr = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = currentRowStr[j];
                }
            }

            char findChar = char.Parse(Console.ReadLine());
            int[] foundAtDimensionsArr = new int[2];
            bool foundChar = false;

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (matrix[i, j] == findChar)
                    {
                        foundChar = true;
                        foundAtDimensionsArr[0] = i;
                        foundAtDimensionsArr[1] = j;
                        break;
                    };
                }
                if (foundChar == true) { break; }
            }

            if (foundChar == true)
            {
                Console.WriteLine($"({String.Join(", ", foundAtDimensionsArr)})");
            }
            else
            {
                Console.WriteLine($"{findChar} does not occur in the matrix");
            }

        }
    }
}