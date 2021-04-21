using System;

namespace _02_RecursiveDrawing
{
    class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            DrawFigureWithRecursion(n);
        }

        public static void DrawFigureWithRecursion(int n)
        {
            if (n == 0) { return; }

            Console.WriteLine(new string('*', n));
            DrawFigureWithRecursion(n - 1);
            Console.WriteLine(new string('#', n));

        }
    }
}