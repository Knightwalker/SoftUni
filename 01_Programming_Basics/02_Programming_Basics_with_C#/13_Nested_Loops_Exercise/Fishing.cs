using System;
using System.Linq;

namespace NestedLoopsExercises
{
    class Program
    {
        static void Main()
        {
            int quata = int.Parse(Console.ReadLine());

            int fishCounter = 0;

            double profit = 0;
            double lost = 0;

            string fishtName = "";

            while ((fishtName = Console.ReadLine()) != "Stop")
            {
                double currentFishPrice = 0;

                double fishKg = double.Parse(Console.ReadLine());
                fishCounter++;

                if (fishCounter % 3 == 0)
                {
                    for (int i = 0; i < fishtName.Length; i++)
                    {
                        currentFishPrice += fishtName[i];
                    }
                    profit += currentFishPrice / fishKg;
                }
                else
                {
                    for (int i = 0; i < fishtName.Length; i++)
                    {
                        currentFishPrice += fishtName[i];
                    }
                    lost += currentFishPrice / fishKg;
                }
                if(fishCounter == quata)
                {
                    Console.WriteLine("Lyubo fulfilled the quota!");
                    break;
                }
            }
            
            if(profit > lost)
            {
                Console.WriteLine($"Lyubo's profit from {fishCounter} fishes is {profit-lost:F2} leva.");
            }
            else
            {
                Console.WriteLine($"Lyubo lost {lost - profit:f2} leva today.");
            }
        }
    }
}
