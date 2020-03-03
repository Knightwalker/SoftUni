using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] clothes = Console.ReadLine().Split(" ");
            Stack<int> clothesBoxStack = new Stack<int>();
            foreach (var cloth in clothes) { clothesBoxStack.Push(int.Parse(cloth)); }

            int capacity = int.Parse(Console.ReadLine());
            int racks = 1;

            int sumClothes = 0;
            while (clothesBoxStack.Count > 0)
            {
                int currentClothSize = clothesBoxStack.Peek();
                if (currentClothSize + sumClothes > capacity)
                {
                    sumClothes = clothesBoxStack.Pop();
                    racks++;
                }
                else
                {
                    sumClothes += clothesBoxStack.Pop();
                }
            }

            Console.WriteLine(racks);

        }
    }
}