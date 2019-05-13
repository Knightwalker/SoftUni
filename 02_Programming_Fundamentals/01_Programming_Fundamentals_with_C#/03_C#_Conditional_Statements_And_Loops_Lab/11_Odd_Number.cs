using System;

namespace OddNumber
{
    class Program
    {
        static void Main(string[] args)
        {
           
            bool validate_even = true;
            while (validate_even)
            {
                int n = int.Parse(Console.ReadLine());
                n = Math.Abs(n);

                if (n % 2 == 0) {
                    Console.WriteLine("Please write an odd number.");
                } else {
                    validate_even = false;
                    Console.WriteLine($"The number is: {n}");
                }
            }
        }
    }
}