using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int> addFunc = num => num += 1;
            Func<int, int> subtractFunc = num => num -= 1;
            Func<int, int> multiplyFunc = num => num *= 2;
            Action<int[]> printAction = nums => Console.WriteLine(String.Join(" ", nums));   

            int[] intArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end") { break; }

                if (input == "add")
                {
                    intArr = intArr.Select(addFunc).ToArray();
                }
                else if (input == "multiply")
                {
                    intArr = intArr.Select(multiplyFunc).ToArray();

                }
                else if (input == "subtract")
                {
                    intArr = intArr.Select(subtractFunc).ToArray();

                }
                else if (input == "print")
                {
                    printAction(intArr);
                }
            } // END While-Loop

        }

    }
}