using System;

namespace VariableInHexFormat
{
    class Program
    {
        static void Main(string[] args)
        {
            string n = Console.ReadLine();
            int res = Convert.ToInt32(n, 16);
            Console.WriteLine(res);
        }
    }
}