using System;
using System.Collections.Generic;
using System.Linq;

namespace _01_sum_and_average
{
    class SumAndAverage
    {
        static void Main(string[] args)
        {
            List<int> listArr = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            double sum = 0;
            double average = 0;

            for (int i = 0; i < listArr.Count; i++)
            {
                sum += listArr[i];
            }

            average = sum / listArr.Count;

            Console.WriteLine("Sum={0}; Average={1:F2}", sum, average);

        }
    }
}