using System;

namespace _14_MagicLetter
{
    class Program
    {
        static void Main(string[] args)
        {
            char first = char.Parse(Console.ReadLine());
            char second = char.Parse(Console.ReadLine());
            char to_avoid = char.Parse(Console.ReadLine());

            for (char a = first; a <= second; a++)
            {
                for (char b = first; b <= second; b++)
                {
                    for (char c = first; c <= second; c++)
                    {
                        if (a != to_avoid && b != to_avoid && c != to_avoid)
                        {
                            Console.Write($"{a}{b}{c} ");
                        }
                    }
                }
            }
        }
    }
}