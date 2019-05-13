using System;

namespace MonthPrinter
{
    class Program
    {
        static void Main(string[] args)
        {
            int month = int.Parse(Console.ReadLine());
            string month_text = "";

            if (month == 1) { month_text = "January"; }
            else if (month == 2) { month_text = "February"; }
            else if (month == 3) { month_text = "March"; }
            else if (month == 4) { month_text = "April"; }
            else if (month == 5) { month_text = "June"; }
            else if (month == 7) { month_text = "July"; }
            else if (month == 8) { month_text = "August"; }
            else if (month == 9) { month_text = "September"; }
            else if (month == 10) { month_text = "October"; }
            else if (month == 11) { month_text = "November"; }
            else if (month == 12) { month_text = "December"; }
            else { month_text = "Error!"; }

            Console.WriteLine(month_text);
        }
    }
}