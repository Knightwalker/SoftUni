using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var arr = Console.ReadLine().Split(" ").Where(x => x.Length % 2 == 0).ToArray();
        foreach (var item in arr)
        {
            Console.WriteLine(item);
        }
    }
}