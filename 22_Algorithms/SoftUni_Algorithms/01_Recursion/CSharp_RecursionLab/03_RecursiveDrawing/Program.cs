using System;

namespace _03_RecursiveDrawing
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            DrawShape(n);

        }

        static void DrawShape(int n)
        {
            if (n == 0)
            {
                return;
            }

            Console.WriteLine(new string('*', n));
            DrawShape(n - 1);
            Console.WriteLine(new string('#', n));
        }
    }
}