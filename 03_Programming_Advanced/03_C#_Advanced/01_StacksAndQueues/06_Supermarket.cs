using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {

            Queue<string> queue = new Queue<string>();
            string input = "";
            while (true)
            {
                input = Console.ReadLine();
                if (input == "End") { break; }

                if (input == "Paid")
                {
                    while(queue.Count > 0)
                    {
                        Console.WriteLine(queue.Dequeue());
                    }
                }
                else
                {
                    queue.Enqueue(input);
                }
            }

            int sumPeopleRemaing = 0;
            while(queue.Count > 0)
            {
                queue.Dequeue();
                sumPeopleRemaing++;
            }

            Console.WriteLine($"{sumPeopleRemaing} people remaining.");

        }
    }
}