using System;

namespace Coding
{
    class Program
    {
        static void Main(string[] args)
        {
            string number = Console.ReadLine();

            for (int i = number.Length-1; i >= 0 ; i--)
            {
                switch (number[i])
                {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        var symbol = int.Parse(number[i].ToString()) + 33;
                        Console.WriteLine(new string((char)symbol, int.Parse(number[i].ToString())));
                        break;
                    default:
                        Console.WriteLine("ZERO");
                        break;
                }
            }
        }
    }
}
