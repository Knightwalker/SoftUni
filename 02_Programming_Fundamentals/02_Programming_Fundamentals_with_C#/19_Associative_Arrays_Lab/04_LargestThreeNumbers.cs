using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {

        var arr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
        arr = arr.OrderByDescending(x => x).ToArray();

        if (arr.Length >= 3)
        {
            var newArr = arr.Take(3);
            Console.WriteLine(String.Join(" ", newArr));
        } else if (arr.Length < 3)
        {
            var newArr = arr;
            Console.WriteLine(String.Join(" ", newArr));
        }
    }
}