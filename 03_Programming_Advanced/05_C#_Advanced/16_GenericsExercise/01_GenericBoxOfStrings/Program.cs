using System;

namespace _01_GenericBoxOfStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();

                Box<string> box = new Box<string>(input);
                Console.WriteLine(box.ToString());
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
