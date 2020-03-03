using System;
using System.Collections.Generic;

namespace StacksAndQueuesExercise
{
    class Program
    {
        static void Main(string[] args)
        {

            int greenLight = int.Parse(Console.ReadLine());
            int yellowLight = int.Parse(Console.ReadLine());
            int counterCarsPassed = 0;
            Queue<string> crossroadsQueue = new Queue<string>();

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "END") { break; }

                if (command == "green")
                {
                    int currentGreenLight = greenLight;
                    int currentYellowLight = yellowLight;

                    while (true)
                    {
                        if (crossroadsQueue.Count <= 0) { break; }
                        if (currentGreenLight <= 0) { break; }

                        string currentCar = crossroadsQueue.Dequeue();
                        for (int i = 0; i < currentCar.Length; i++)
                        {
                            if (currentGreenLight + currentYellowLight <= 0)
                            {
                                Console.WriteLine("A crash happened!");
                                Console.WriteLine($"{currentCar} was hit at {currentCar[i]}.");
                                return;
                            }
                            else
                            {
                                if (currentGreenLight > 0) { currentGreenLight--; }
                                else if (currentYellowLight > 0) { currentYellowLight--; }
                            }
                        }

                        counterCarsPassed++;         

                    }

                }
                else
                {
                    crossroadsQueue.Enqueue(command);
                }

            }

            Console.WriteLine("Everyone is safe.");
            Console.WriteLine($"{counterCarsPassed} total cars passed the crossroads.");

        }
    }
}