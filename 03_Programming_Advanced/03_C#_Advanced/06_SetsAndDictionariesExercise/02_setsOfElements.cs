using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] inputArr = Console.ReadLine().Split(" ");
            int n = int.Parse(inputArr[0]);
            int m = int.Parse(inputArr[1]);
            var setOne = new HashSet<int>();
            var setTwo = new HashSet<int>();
            var setThree = new HashSet<int>();

            for (int i = 0; i < n; i++)
            {
                int inputNum = int.Parse(Console.ReadLine());
                setOne.Add(inputNum);
            }

            for (int i = 0; i < m; i++)
            {
                int inputNum = int.Parse(Console.ReadLine());
                setTwo.Add(inputNum);
            }

            foreach (var item in setOne)
            {
                if (setTwo.Contains(item))
                {
                    setThree.Add(item);
                }
            }

            Console.WriteLine(String.Join(" ", setThree));

        }

    }
}