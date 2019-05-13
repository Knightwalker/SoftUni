using System;

namespace _05_BooleanVariable
{
    class Program
    {
        static void Main(string[] args)
        {
            string param = Console.ReadLine();
            bool convertedParam = Convert.ToBoolean(param);

            if (convertedParam == true) { Console.WriteLine("Yes"); }
            else { Console.WriteLine("No"); }
        }
    }
}