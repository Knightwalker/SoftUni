using System;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Action<string[]> InvokeActionPoint = ActionPoint;

            string[] inputStrArr = Console.ReadLine().Split(" ");
            InvokeActionPoint(inputStrArr);
        }

        static void ActionPoint(string[] inputStrArr)
        {
            foreach (var name in inputStrArr)
            {
                Console.WriteLine(name);
            }
        }

    }
}