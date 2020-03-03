using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());
            Queue<string> queue = new Queue<string>();

            int counter = 0;
            string input = "";
            while (true)
            {
                input = Console.ReadLine();
                if (input == "end") { break; }

                if (input == "green")
                {
                    int len = n;
                    if (queue.Count < n)
                    {
                        len = queue.Count;
                    }
                    for (int i = 0; i < len; i++)
                    {
                        Console.WriteLine(queue.Dequeue() + " passed!");
                        counter++;
                    }
                }
                else
                {
                    queue.Enqueue(input);
                }
            }
            Console.WriteLine($"{counter} cars passed the crossroads.");

        }
    }
}