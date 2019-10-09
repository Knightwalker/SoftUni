using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] range = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            string oddOrEven = Console.ReadLine();

            Predicate<int> isEvenPredicate = num => num % 2 == 0;
            Predicate<int> isOddPredicate = num => num % 2 != 0;

            if (oddOrEven == "even")
            {
                for (int i = range[0]; i <= range[1]; i++)
                {
                    if (isEvenPredicate(i))
                    {
                        Console.Write(i + " ");
                    }
                }
            }
            else
            {
                for (int i = range[0]; i <= range[1]; i++)
                {
                    if (isOddPredicate(i))
                    {
                        Console.Write(i + " ");
                    }
                }
            }

        }

    }
}