using System;

namespace _01_ExperienceGaining
{
    class Program
    {
        static void Main(string[] args)
        {
            double neededExperience = double.Parse(Console.ReadLine());
            int battleCountExpected = int.Parse(Console.ReadLine());

            double TotalEarnedExperience = 0;
            int battleCountActual = 0;
            for (int i = 1; i <= battleCountExpected; i++)
            {
                string input = Console.ReadLine();
                if (input == null) { break; }
                double earnedExperience = double.Parse(input);

                if (i % 3 == 0)
                {
                    earnedExperience += earnedExperience * 0.15;
                }
                if (i % 5 == 0)
                {
                    earnedExperience -= earnedExperience * 0.10;
                }

                TotalEarnedExperience += earnedExperience;
                battleCountActual++;
                if (earnedExperience >= neededExperience) { break; }
            }

            if (TotalEarnedExperience >= neededExperience)
            {
                Console.WriteLine($"Mitko successfully collected his needed experience for {battleCountActual} battles.");
            }
            else
            {
                Console.WriteLine($"Mitko was not able to collect the needed experience, {(neededExperience - TotalEarnedExperience):f2} more needed.");
            }

        }
    }
}