using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());

            Stack<int> stack = new Stack<int>();
            for (int i = 0; i < n; i++)
            {
                string[] commandArr = Console.ReadLine().Split();
                if (commandArr[0] == "1")
                {
                    stack.Push(int.Parse(commandArr[1]));
                }
                else if (commandArr[0] == "2")
                {
                    if (stack.Count > 0) { stack.Pop(); }
                }
                else if (commandArr[0] == "3")
                {
                    if (stack.Count > 0)
                    {
                        int maxNum = stack.Pop();
                        stack.Push(maxNum);
                        foreach (var num in stack)
                        {
                            if (maxNum < num)
                            {
                                maxNum = num;
                            }
                        }
                        Console.WriteLine(maxNum);
                    }
                }
                else if (commandArr[0] == "4")
                {
                    if (stack.Count > 0)
                    {
                        int minNum = stack.Pop();
                        stack.Push(minNum);
                        foreach (var num in stack)
                        {
                            if (minNum > num)
                            {
                                minNum = num;
                            }
                        }
                        Console.WriteLine(minNum);
                    }
                }
            }

            while (stack.Count > 0)
            {
                Console.Write(stack.Pop());
                if (stack.Count > 0) { Console.Write(", "); }
            }
        }
    }
}