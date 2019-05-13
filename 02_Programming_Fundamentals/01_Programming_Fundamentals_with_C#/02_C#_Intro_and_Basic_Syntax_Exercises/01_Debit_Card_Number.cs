using System;

namespace _01_DebitCardNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());
            int n3 = int.Parse(Console.ReadLine());
            int n4 = int.Parse(Console.ReadLine());

            Console.WriteLine($"{n1:D4} {n2:D4} {n3:D4} {n4:D4}");
        }
    }
}