using System;

namespace GameTimeSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            int day = 0; // Monday
            int minutes = 480; // 8'00 o'clock am

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "STOP") { break; }

                // main logic
                int newMinutes = int.Parse(input);

                if ((minutes + newMinutes) <= 1440)
                {
                    minutes += newMinutes;
                }
                else {
                    minutes = (minutes + newMinutes) - 1440;
                    day++;
                }

                if (day == 7) { day = 0; }

                // update the time in the view
                string d = "";
                if (day == 0) { d = "Monday"; }
                else if (day == 1) { d = "Tuesday"; }
                else if (day == 2) { d = "Wednesday"; }
                else if (day == 3) { d = "Thursday"; }
                else if (day == 4) { d = "Friday"; }
                else if (day == 5) { d = "Saturday"; }
                else if (day == 6) { d = "Sunday"; }

                int h = minutes / 60;
                int m = minutes % 60;
                string postfix = "";
                if (minutes <= 720) { postfix = "AM"; }
                else if (minutes > 720) { h -= 12; postfix = "PM"; }

                Console.WriteLine($"{d} {h:d2}:{m:d2} {postfix}");
            }

        }
    }
}
