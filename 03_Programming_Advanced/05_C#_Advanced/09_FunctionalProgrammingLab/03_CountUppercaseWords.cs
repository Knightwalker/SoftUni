using System;
using System.Linq;

namespace FunctionalProgrammingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputStrArr = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x[0] == x.ToUpper()[0])
                .ToArray();
        
            Console.WriteLine(string.Join(Environment.NewLine, inputStrArr));
 
        }

    }
}