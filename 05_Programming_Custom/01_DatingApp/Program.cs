using System;
using System.Collections.Generic;
using System.Linq;

namespace _01_DatingApp
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] malesArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int[] femalesArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

            var malesStack = new Stack<int>(malesArr);
            var femalesQueue = new Queue<int>(femalesArr);

            int matches = 0;
            while (malesStack.Count > 0 && femalesQueue.Count > 0)
            {
                int m = malesStack.Peek();
                int f = femalesQueue.Peek();

                // if values are less or equal to 0, remove and continue
                if (m <= 0)
                {
                    malesStack.Pop();
                    continue;
                }
                if (f <= 0)
                {
                    femalesQueue.Dequeue();
                    continue;
                }

                // special case
                if (m % 25 == 0)
                {
                    malesStack.Pop();
                    if (malesStack.Count > 0)
                    {
                        malesStack.Pop();
                    }
                    continue;
                }
                if (f % 25 == 0)
                {
                    femalesQueue.Dequeue();
                    if (femalesQueue.Count > 0)
                    {
                        femalesQueue.Dequeue();
                    }
                    continue;
                }

                // if values are equal, match them
                if (m == f)
                {
                    malesStack.Pop();
                    femalesQueue.Dequeue();
                    matches++;
                }
                else
                {
                    malesStack.Pop();
                    femalesQueue.Dequeue();
                    m -= 2;
                    malesStack.Push(m);
                }

            } // END While...loop

            Console.WriteLine($"Matches: {matches}");
            if (malesStack.Count > 0)
            {
                Console.WriteLine($"Males left: {String.Join(", ", malesStack)}");
            }
            else
            {
                Console.WriteLine("Males left: none");
            }
            if (femalesQueue.Count > 0)
            {
                Console.WriteLine($"Females left: {String.Join(", ", femalesQueue)}");
            }
            else
            {
                Console.WriteLine("Females left: none");
            }

        }
    }
}
