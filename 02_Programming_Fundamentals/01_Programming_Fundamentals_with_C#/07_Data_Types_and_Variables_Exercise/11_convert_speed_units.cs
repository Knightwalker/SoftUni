using System;

namespace _11_ConvertSpeedUnits
{
    class Program
    {
        static void Main(string[] args)
        {
            int distance = int.Parse(Console.ReadLine());
            int hours = int.Parse(Console.ReadLine());
            int minutes = int.Parse(Console.ReadLine());
            int seconds = int.Parse(Console.ReadLine());
            int time = seconds + minutes * 60 + hours * 3600;

            float mPerS = (float)distance / time;
            float kmPerH = ((float)distance / 1000) / ((float)time / 3600);
            float mpPerH = ((float)distance / 1609) / ((float)time / 3600);

            Console.WriteLine($"{mPerS:0.######}");
            Console.WriteLine($"{kmPerH:0.######}");
            Console.WriteLine($"{mpPerH:0.######}");
        }
    }
}