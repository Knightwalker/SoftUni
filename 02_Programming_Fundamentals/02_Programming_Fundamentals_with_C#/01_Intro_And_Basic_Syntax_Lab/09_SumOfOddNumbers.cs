using System;

class SumOfOddNumbers
{
    static void Main()
    {
        var n = int.Parse(Console.ReadLine());
        var res = 0;
        for (int i = 1; i <= n * 2; i+=2)
        {
            res += i;
            Console.WriteLine(i);
        }

        Console.WriteLine($"Sum: {res}");
    }
}
