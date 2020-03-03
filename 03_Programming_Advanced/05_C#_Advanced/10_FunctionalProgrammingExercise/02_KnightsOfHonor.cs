using System;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Action<string[]> InvokeKnightsOfHonor = KnightsOfHonor;

            string[] inputStrArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            InvokeKnightsOfHonor(inputStrArr);
        }

        static void KnightsOfHonor(string[] inputStrArr)
        {
            foreach (var name in inputStrArr)
            {
                Console.WriteLine("Sir " + name);
            }
        }

    }
}