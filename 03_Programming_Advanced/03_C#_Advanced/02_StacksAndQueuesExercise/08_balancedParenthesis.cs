using System;
using System.Collections.Generic;

namespace StacksAndQueuesExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Stack<char> balancedParenthesesStack = new Stack<char>();

            for (int i = 0; i < input.Length; i++)
            {
                char currentBracket = input[i];
                if (balancedParenthesesStack.Count == 0)
                {
                    balancedParenthesesStack.Push(currentBracket);
                    continue;
                }

                char lastBracket = balancedParenthesesStack.Pop(); 

                if (lastBracket == '{' && currentBracket == '}')
                {
                    continue;
                }
                else if (lastBracket == '[' && currentBracket == ']')
                {
                    continue;
                }
                else if (lastBracket == '(' && currentBracket == ')')
                {
                    continue;
                }
                else
                {
                    balancedParenthesesStack.Push(lastBracket);
                    balancedParenthesesStack.Push(currentBracket);
                }
            }

            if (balancedParenthesesStack.Count == 0)
            {
                Console.WriteLine("YES");
            }
            else
            {
                Console.WriteLine("NO");
            }
            
        }
    }
}