using System;
using System.Collections.Generic;

namespace _05_GenericCountMethodString
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Box<string>> boxList = new List<Box<string>>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                Box<string> box = new Box<string>(input);
                boxList.Add(box);
            }

            string el = Console.ReadLine();
            Console.WriteLine(GenericCountMethod<string>(boxList, el));

        }

        static int GenericCountMethod<T>(List<Box<T>> list, T el) where T : IComparable
        {
            int count = 0;
            foreach (var item in list)
            {
                if (item.Value.CompareTo(el) > 0)
                {
                    count++;
                }
            }
            return count;
        }

    }

    class Box<T> where T : IComparable
    {
        public Box(T value)
        {
            this.Value = value;
        }

        public T Value { get; set; }

        public override string ToString()
        {
            string str = $"{Value.GetType()}: {this.Value}";
            return str;
        }
    }
}
