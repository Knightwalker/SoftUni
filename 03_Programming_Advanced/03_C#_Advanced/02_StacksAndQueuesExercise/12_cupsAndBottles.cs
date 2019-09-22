using System;
using System.Collections.Generic;
using System.Linq;

namespace StacksAndQueuesExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] cupsArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int[] bottlesArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

            Stack<int> bottlesStack = new Stack<int>(bottlesArr);
            Queue<int> cupsQueue = new Queue<int>(cupsArr);
            int wastedWater = 0;

            while (bottlesStack.Count > 0 && cupsQueue.Count > 0)
            {
                int currentBottleValue = bottlesStack.Pop();
                int currentCupValue = cupsQueue.Peek();

                if (currentCupValue - currentBottleValue <= 0)
                {
                    wastedWater += Math.Abs(currentCupValue - currentBottleValue);
                    cupsQueue.Dequeue();
                }
                else
                {
                    currentCupValue -= currentBottleValue;
                    while (bottlesStack.Count > 0)
                    {
                        currentBottleValue = bottlesStack.Pop();
                        if (currentCupValue - currentBottleValue <= 0)
                        {
                            wastedWater += Math.Abs(currentCupValue - currentBottleValue);
                            cupsQueue.Dequeue();
                            break;
                        }
                        else
                        {
                            currentCupValue -= currentBottleValue;
                        }

                    }
                }
            }

            if (cupsQueue.Count == 0)
            {
                Console.WriteLine($"Bottles: {String.Join(" ", bottlesStack)}");
                Console.WriteLine($"Wasted litters of water: {wastedWater}");
            }
            else if (bottlesStack.Count == 0)
            {
                Console.WriteLine($"Cups: {String.Join(" ", cupsQueue)}");
                Console.WriteLine($"Wasted litters of water: {wastedWater}");
            }

        }
    }
}