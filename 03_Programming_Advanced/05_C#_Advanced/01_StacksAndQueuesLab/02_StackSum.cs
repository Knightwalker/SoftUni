using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] numbersInputArr = Console.ReadLine().Split(" ");
            Stack<int> stack = new Stack<int>();

            for (int i = 0; i < numbersInputArr.Length; i++)
            {
                stack.Push(int.Parse(numbersInputArr[i]));
            }

            string commandsInput = "";
            while (true)
            {
                commandsInput = Console.ReadLine().ToLower();
                if (commandsInput == "end") { break; }

                string[] commandsInputArr = commandsInput.Split(" ");
                if (commandsInputArr[0] == "add")
                {
                    int n1 = int.Parse(commandsInputArr[1]);
                    int n2 = int.Parse(commandsInputArr[2]);
                    stack.Push(n1);
                    stack.Push(n2);
                }
                else if (commandsInputArr[0] == "remove")
                {
                    int n = int.Parse(commandsInputArr[1]);
                    if (stack.Count >= n)
                    {
                        for (int i = 0; i < n; i++)
                        {
                            stack.Pop();
                        }
                    }
                }
            }

            int stackSum = 0;
            while (stack.Count > 0)
            {
                stackSum += stack.Pop();
            }
            Console.WriteLine("Sum: " + stackSum);

        }
    }
}