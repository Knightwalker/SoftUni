using System;

namespace _08_Threeuple
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input1 = Console.ReadLine().Split(" ");
            string input1_name = input1[0] + " " + input1[1];
            string input1_address = input1[2];
            string input1_town = input1[3];
            if (input1.Length == 5) { input1_town += " " + input1[4]; }
            var tuple1 = new MyTuple<string, string, string>(input1_name, input1_address, input1_town);

            string[] input2 = Console.ReadLine().Split(" ");
            string input2_name = input2[0];
            int input2_liters = int.Parse(input2[1]);
            string drunk = input2[2];
            bool input2_drunkornot = false;
            if(drunk == "drunk") { input2_drunkornot = true; }
            var tuple2 = new MyTuple<string, int, bool>(input2_name, input2_liters, input2_drunkornot);

            string[] input3 = Console.ReadLine().Split(" ");
            string input3_name = input3[0];
            double input3_accountbalance = double.Parse(input3[1]);
            string input3_bankname = input3[2];
            var tuple3 = new MyTuple<string, double, string>(input3_name, input3_accountbalance, input3_bankname);

            Console.WriteLine(tuple1);
            Console.WriteLine(tuple2);
            Console.WriteLine(tuple3);
        }
    }

    public class MyTuple<T1, T2, T3>
    {
        public MyTuple(T1 item1, T2 item2, T3 item3)
        {
            this.Item1 = item1;
            this.Item2 = item2;
            this.Item3 = item3;
        }

        public T1 Item1 { get; set; }
        public T2 Item2 { get; set; }
        public T3 Item3 { get; set; }

        public override string ToString()
        {
            return $"{this.Item1} -> {this.Item2} -> {this.Item3}";
        }
    }
}
