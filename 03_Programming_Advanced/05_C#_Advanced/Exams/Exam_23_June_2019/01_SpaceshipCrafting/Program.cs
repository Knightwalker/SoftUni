using System;
using System.Linq;
using System.Collections.Generic;

namespace _01_SpaceshipCrafting
{
    class Program
    {
        static void Main(string[] args)
        {

            var liquidsArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            var itemsArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

            var materialsDict = new Dictionary<string, int> {
                {"Glass", 0},
                {"Aluminium", 0},
                {"Lithium", 0},
                {"Carbon fiber", 0}
            };

            var liquidsQueue = new Queue<int>(liquidsArr);
            var itemsStack = new Stack<int>(itemsArr);

            while (liquidsQueue.Count > 0 && itemsStack.Count > 0)
            {
                int liquid = liquidsQueue.Peek();
                int item = itemsStack.Peek();
                int total = liquid + item;
                bool check_combined = false;

                if (total == 25)
                {
                    materialsDict["Glass"] += 1;
                    check_combined = true;
                }
                else if (total == 50)
                {
                    materialsDict["Aluminium"] += 1;
                    check_combined = true;
                }
                else if (total == 75)
                {
                    materialsDict["Lithium"] += 1;
                    check_combined = true;
                }
                else if (total == 100)
                {
                    materialsDict["Carbon fiber"] += 1;
                    check_combined = true;
                }

                if (check_combined)
                {
                    liquidsQueue.Dequeue();
                    itemsStack.Pop();
                }
                else
                {
                    liquidsQueue.Dequeue();
                    itemsStack.Pop();
                    item += 3;
                    itemsStack.Push(item);
                }

            } // END While-Loop

            bool check_buildship = materialsDict.All(m => m.Value > 0);
            if (check_buildship)
            {
                Console.WriteLine("Wohoo! You succeeded in building the spaceship!");
            }
            else
            {
                Console.WriteLine("Ugh, what a pity! You didn't have enough materials to build the spaceship.");
            }

            if (liquidsQueue.Count <= 0)
            {
                Console.WriteLine("Liquids left: none");
            }
            else
            {
                var liquidsQueueList = new List<int>();
                while (liquidsQueue.Count > 0)
                {
                    liquidsQueueList.Add(liquidsQueue.Peek());
                    liquidsQueue.Dequeue();
                }
                Console.WriteLine($"Liquids left: {String.Join(", ", liquidsQueueList)}");
            }

            if (itemsStack.Count <= 0)
            {
                Console.WriteLine("Physical items left: none");
            }
            else
            {
                var itemsStackList = new List<int>();
                while (itemsStack.Count > 0)
                {
                    itemsStackList.Add(itemsStack.Peek());
                    itemsStack.Pop();
                }
                Console.WriteLine($"Physical items left: {String.Join(", ", itemsStackList)}");
            }

            foreach (var material in materialsDict.OrderBy(key => key.Key))
            {
                Console.WriteLine($"{material.Key}: {material.Value}");
            }

        }
    }
}
