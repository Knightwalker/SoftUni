using System;

namespace _05_DateModifier
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstDate = Console.ReadLine();
            string secondDate = Console.ReadLine();

            var diff = new DateModifier();

            Console.WriteLine(diff.FindDifference(firstDate, secondDate));
        }
    }

    public class DateModifier
    {
        public double FindDifference(string firstDate, string secondDate)
        {
            DateTime dateOne = DateTime.Parse(firstDate);
            DateTime dateTwo = DateTime.Parse(secondDate);

            return Math.Abs((dateOne - dateTwo).TotalDays);
        }
    }

}
