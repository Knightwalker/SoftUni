using System;
using System.Linq;

namespace P03_JediGalaxy
{
    class Program
    {
        static void Main()
        {
            int[] dimestions = Console.ReadLine().Split(new string[] { " " }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int x = dimestions[0];
            int y = dimestions[1];
            int[,] matrix = CreateMatrix(ref x, ref y);

            long sum = 0;
            while (true)
            {
                string command = Console.ReadLine();
                string command2 = Console.ReadLine();
                if (command == "Let the Force be with you") { break; }

                int[] ivoCoordinates = command.Split(new string[] { " " }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                int[] evilCoordinates = command2.Split(new string[] { " " }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

                DestroyStars(matrix, evilCoordinates);
                GatherStars(matrix, ivoCoordinates, ref sum);
            }

            Console.WriteLine(sum);

        }

        public static int[,] CreateMatrix(ref int x, ref int y)
        {
            int[,] matrix = new int[x, y];

            int value = 0;
            for (int i = 0; i < x; i++)
            {
                for (int j = 0; j < y; j++)
                {
                    matrix[i, j] = value++;
                }
            }

            return matrix;
        }

        public static void DestroyStars (int[,] matrix, int[] evilCoordinates) {
            int xE = evilCoordinates[0];
            int yE = evilCoordinates[1];

            while (xE >= 0 && yE >= 0)
            {
                if (xE >= 0 && xE < matrix.GetLength(0) && yE >= 0 && yE < matrix.GetLength(1))
                {
                    matrix[xE, yE] = 0;
                }
                xE--;
                yE--;
            }
        }

        public static void GatherStars(int[,] matrix, int[] ivoCoordinates, ref long sum)
        {
            int xI = ivoCoordinates[0];
            int yI = ivoCoordinates[1];

            while (xI >= 0 && yI < matrix.GetLength(1))
            {
                if (xI >= 0 && xI < matrix.GetLength(0) && yI >= 0 && yI < matrix.GetLength(1))
                {
                    sum += matrix[xI, yI];
                }

                yI++;
                xI--;
            }
        }

    }
}
