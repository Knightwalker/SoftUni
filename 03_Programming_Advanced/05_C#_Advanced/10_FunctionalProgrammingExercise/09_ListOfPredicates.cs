using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {

        static void Main(string[] args)
        { 
            // Read from console and generate numbers
            int n = int.Parse(Console.ReadLine());
            int[] resultArr = new int[n];
            for (int i = 0; i < n; i++) { resultArr[i] = i + 1; }
            int[] dividersArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

            // create a custom Func (delegate)
            Func<int, int[], bool> validateDivisible = delegate (int num, int[] collection) {
                foreach (var item in collection)
                {
                    if (num % item != 0)
                    {
                        return false;
                    }
                }
                return true;
            };

            // print result
            foreach (var item in resultArr)
            {
                if (validateDivisible(item, dividersArr))
                {
                    Console.Write(item + " ");
                }
            }

        }

    }
}