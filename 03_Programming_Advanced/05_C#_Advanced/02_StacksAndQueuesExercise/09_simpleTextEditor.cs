using System;
using System.Collections.Generic;

namespace StacksAndQueuesExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string text = "";
            Stack<string> textEditorStack = new Stack<string>();
            textEditorStack.Push(text);

            for (int i = 0; i < n; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" ");
                string inputKey = inputArr[0];

                if (inputKey == "1")
                {
                    string inputValue = inputArr[1];
                    text += inputValue;
                    textEditorStack.Push(text);
                }
                else if (inputKey == "2")
                {
                    int removeCount = int.Parse(inputArr[1]);
                    text = text.Substring(0, text.Length - removeCount);
                    textEditorStack.Push(text);
                }
                else if (inputKey == "3")
                {
                    int index = int.Parse(inputArr[1]);
                    Console.WriteLine(text[index - 1]);

                }
                else if (inputKey == "4")
                {
                    textEditorStack.Pop();
                    text = textEditorStack.Peek();
                }
            }

        }
    }
}