using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] intArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

            Array.Sort(intArr, delegate (int a, int b)
            {
                if (a % 2 == 0 && b % 2 == 0)
                {
                    if (a < b)
                    {
                        return -1;
                    }
                    else
                    {
                        return 1;
                    }
                }
                else if (a % 2 != 0 && b % 2 != 0)
                {
                    if (a < b)
                    {
                        return -1;
                    }
                    else
                    {
                        return 1;
                    }
                }

                if (a % 2 == 0)
                {
                    return -1;
                }
                else if (a % 2 != 0)
                {
                    return 1;
                }

                return 0;

            });

            Console.WriteLine(String.Join(" ", intArr));

        }
    }
}