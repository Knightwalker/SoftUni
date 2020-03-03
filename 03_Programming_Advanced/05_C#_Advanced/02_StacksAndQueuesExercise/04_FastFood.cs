using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {
            int foodQuantity = int.Parse(Console.ReadLine());
            string[] ordersArr = Console.ReadLine().Split(" ");

            Queue<int> ordersQueue = new Queue<int>();
            foreach (var order in ordersArr)
            {
                ordersQueue.Enqueue(int.Parse(order));
            }

            // Find the biggest order and print it
            if (ordersQueue.Count > 0)
            {
                int maxNum = ordersQueue.Peek();
                foreach (var num in ordersQueue)
                {
                    if (maxNum < num)
                    {
                        maxNum = num;
                    }
                }
                Console.WriteLine(maxNum);
            }

            // Complete the orders
            if (ordersQueue.Count > 0)
            {
                while (ordersQueue.Count > 0)
                {
                    int currentOrder = ordersQueue.Peek();
                    if ((foodQuantity - currentOrder) >= 0)
                    {
                        ordersQueue.Dequeue();
                        foodQuantity -= currentOrder;

                    }
                    else
                    {
                        break;
                    }
                }
            }

            // Print remaining orders
            if (ordersQueue.Count > 0)
            {
                Console.Write("Orders left: ");
                while (ordersQueue.Count > 0)
                {
                    Console.Write(ordersQueue.Dequeue());
                    if (ordersQueue.Count > 0) { Console.Write(" "); }
                }
            }
            else
            {
                Console.WriteLine("Orders complete");
            }

        }
    }
}