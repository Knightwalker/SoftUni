using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(" ");
            string[] numbers = Console.ReadLine().Split(" ");
            int N = int.Parse(input[0]);
            int S = int.Parse(input[1]);
            int X = int.Parse(input[2]);
            Queue<int> queue = new Queue<int>();

            // Enqueue N amount of numbers in the queue
            for (int i = 0; i < N; i++)
            {
                queue.Enqueue(int.Parse(numbers[i]));
            }

            // Dequeue S amount of numbers in the queue
            for (int i = 0; i < S; i++)
            {
                queue.Dequeue();
            }

            // Conditions and Printing
            if (queue.Contains(X))
            {
                Console.WriteLine("true");
            }
            else if (queue.Count <= 0)
            {
                Console.WriteLine("0");
            }
            else
            {
                if (queue.Count > 0)
                {
                    int minNum = queue.Dequeue();
                    while (queue.Count > 0)
                    {
                        int currentNum = queue.Dequeue();
                        if (currentNum < minNum)
                        {
                            minNum = currentNum;
                        }
                    }
                    Console.WriteLine(minNum);
                }
            }
        }
    }
}