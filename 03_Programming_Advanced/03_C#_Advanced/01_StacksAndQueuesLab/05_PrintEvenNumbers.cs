using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputArr = Console.ReadLine().Split(" ");
            Queue<int> queue = new Queue<int>();

            for (int i = 0; i < inputArr.Length; i++)
            {
                queue.Enqueue(int.Parse(inputArr[i]));
            }

            while (queue.Count > 0)
            {
                if (queue.Peek() % 2 == 0)
                {
                    Console.Write(queue.Dequeue());
                    if (queue.Count > 1) { Console.Write(", "); }
                }
                else
                {
                    queue.Dequeue();
                }
            }
        }
    }
}