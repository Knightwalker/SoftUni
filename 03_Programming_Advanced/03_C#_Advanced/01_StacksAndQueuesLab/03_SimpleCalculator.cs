using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            Stack<string> stack = new Stack<string>();
            int inputArrLenght = inputArr.Length;
            for (int i = inputArrLenght - 1; i >= 0; i--)
            {
                stack.Push(inputArr[i]);
            }

            while (stack.Count > 1)
            {
                int operand1 = int.Parse(stack.Pop());
                string opr = stack.Pop();
                int operand2 = int.Parse(stack.Pop());

                if (opr == "+")
                {
                    int result = operand1 + operand2;
                    stack.Push(result.ToString());
                }
                else if (opr == "-")
                {
                    int result = operand1 - operand2;
                    stack.Push(result.ToString());
                }
            }

            Console.WriteLine(stack.Pop());

        }
    }
}