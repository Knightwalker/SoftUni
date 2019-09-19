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
            Stack<int> stack = new Stack<int>();

            // Push N amount of numbers in the stack
            for (int i = 0; i < N; i++)
            {
                stack.Push(int.Parse(numbers[i]));
            }

            // Pop S amount of numbers in the stack
            for (int i = 0; i < S; i++)
            {
                stack.Pop();
            }

            // Conditions and Printing
            if (stack.Contains(X))
            {
                Console.WriteLine("true");
            }
            else if (stack.Count <= 0)
            {
                Console.WriteLine("0");
            }
            else
            {
                if (stack.Count > 0)
                {
                    int minNum = stack.Pop();
                    while (stack.Count > 0)
                    {
                        int currentNum = stack.Pop();
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