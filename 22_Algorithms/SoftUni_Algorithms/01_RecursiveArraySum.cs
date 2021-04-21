using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
        var sum = Sum(numbers, 0);
        Console.WriteLine(sum);
    }

    static int Sum(int[] array, int index)
    {
        if (index == array.Length)
        {
            return 0;
        }

        return array[index] + Sum(array, index + 1);
    }
}