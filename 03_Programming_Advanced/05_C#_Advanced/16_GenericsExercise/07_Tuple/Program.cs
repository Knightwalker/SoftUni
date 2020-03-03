using System;

namespace _07_Tuple
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input1 = Console.ReadLine().Split(" ");
            string name = input1[0] + " " + input1[1];
            string address = input1[2];
            var pairs1 = new MyTuple<string, string>(name, address);
           
            string[] input2 = Console.ReadLine().Split(" ");
            string name2 = input2[0];
            int beerLiters = int.Parse(input2[1]);
            var pairs2 = new MyTuple<string, int>(name2, beerLiters);
            
            string[] input3 = Console.ReadLine().Split(" ");
            int input3int = int.Parse(input3[0]);
            double input3double = double.Parse(input3[1]);
            var pairs3 = new MyTuple<int, double>(input3int, input3double);

            Console.WriteLine(pairs1);
            Console.WriteLine(pairs2);
            Console.WriteLine(pairs3);
        }
    }

    public class MyTuple<T1, T2>
    {
        public MyTuple(T1 item1, T2 item2)
        {
            this.Item1 = item1;
            this.Item2 = item2;
        }

        public T1 Item1 { get; set; }
        public T2 Item2 { get; set; }

        public override string ToString()
        {
            return $"{this.Item1} -> {this.Item2}";
        }
    }

}
