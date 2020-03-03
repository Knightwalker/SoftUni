using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int[], int> getCustomMinFunction = fCustomGetMin;

            int[] inputIntArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int result = getCustomMinFunction(inputIntArr);
            Console.WriteLine(result);
        }

        static int fCustomGetMin(int[] inputIntArr)
        {
            if (inputIntArr.Length <= 0) { return 0; }

            int minNum = inputIntArr[0];

            for (int i = 1; i < inputIntArr.Length; i++)
            {
                if (inputIntArr[i] < minNum)
                {
                    minNum = inputIntArr[i];
                }
            }
           
            return minNum;
        }

    }
}