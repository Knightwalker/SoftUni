using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {   
            int n = int.Parse(Console.ReadLine());
            string[] stringArr = Console.ReadLine().Split(" ");
            string[] resArr = stringArr.Where(x => x.Length <= n).ToArray();

            Console.WriteLine(string.Join(Environment.NewLine, resArr));

        }
    }
}