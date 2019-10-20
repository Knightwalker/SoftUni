using System;
using System.Collections.Generic;

namespace _04_GenericSwapMethodIntegers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Box<int>> boxList = new List<Box<int>>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                int input = int.Parse(Console.ReadLine());
                Box<int> box = new Box<int>(input);
                boxList.Add(box);
            }

            string[] command = Console.ReadLine().Split(" ");
            int index1 = int.Parse(command[0]);
            int index2 = int.Parse(command[1]);
            GenericSwapMethodStrings(boxList, index1, index2);

            foreach (var box in boxList)
            {
                Console.WriteLine(box);
            }

        }

        static void GenericSwapMethodStrings<T>(List<Box<T>> list, int index1, int index2)
        {
            if (index1 >= 0 && index1 < list.Count && index2 >= 0 && index2 < list.Count)
            {
                var temp = list[index1];
                list[index1] = list[index2];
                list[index2] = temp;
            }
        }

    }

    class Box<T>
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
