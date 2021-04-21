using System;

namespace _08_PrintNFigure_PreAndPostActions
{
    class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            PrintFigure(n);
        }

        public static void PrintFigure(int n)
        {
            // Bottom of the recursion
            if (n == 0) { return; }

            // Pre-actions
            Console.WriteLine(new string('*', n));

            // Recursive call
            PrintFigure(n - 1);

            // Post-actions
            Console.WriteLine(new string('#', n));

        }
    }
}