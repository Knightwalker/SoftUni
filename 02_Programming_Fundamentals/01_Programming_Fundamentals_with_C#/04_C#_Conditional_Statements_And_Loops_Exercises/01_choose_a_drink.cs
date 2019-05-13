using System;

namespace _01_ChooseADrink
{
    class Program
    {
        static void Main(string[] args)
        {
            string profession = Console.ReadLine().ToLower();
            string res = "";

            if (profession == "athlete") { res = "Water"; }
            else if (profession == "businessman" || profession == "businesswoman") { res = "Coffee"; }
            else if (profession == "softuni student") { res = "Beer"; }
            else { res = "Tea"; }

            Console.WriteLine(res);
        }
    }
}