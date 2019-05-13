using System;

namespace _06_StringsAndObjects
{
    class Program
    {
        static void Main(string[] args)
        {
            string greeting = "Hello";
            string word = "World";
            object varConcat1 = greeting + " " + word;
            string varConcat2 = (string)varConcat1;
            Console.WriteLine("{0}", varConcat2);
        }
    }
}