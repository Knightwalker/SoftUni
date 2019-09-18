using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] input = Console.ReadLine().Split(" ");
            int n = int.Parse(Console.ReadLine());
            Queue<string> queue = new Queue<string>(input);

            int counter = 0;
            string child = "";
            while (queue.Count > 1)
            {
                counter++;
                if (counter == n)
                {
                    Console.WriteLine("Removed " + queue.Dequeue());
                    counter = 0;
                }
                else
                {
                    child = queue.Dequeue();
                    queue.Enqueue(child);
                }
            }
            Console.WriteLine("Last is " + queue.Dequeue());

        }
    }
}