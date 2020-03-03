using System;
using System.Collections.Generic;

namespace _06_GenericCountMethodDouble
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Box<double>> boxList = new List<Box<double>>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                double input = double.Parse(Console.ReadLine());
                Box<double> box = new Box<double>(input);
                boxList.Add(box);
            }

            double el = double.Parse(Console.ReadLine());
            Console.WriteLine(GenericCountMethod<double>(boxList, el));

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
