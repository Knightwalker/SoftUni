using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _03_Stack
{
    public class Startup
    {
        public static void Main()
        {
            var stack = new Stack<int>();

            var comand = Console.ReadLine();
            while (!comand.Equals("END"))
            {
                var comandArgs = comand.Split(new[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries);

                if (comandArgs[0].Equals("Push"))
                {
                    var numbers = comandArgs.Skip(1).ToList().Select(int.Parse).ToList();
                    foreach (var number in numbers)
                    {
                        stack.Push(number);
                    }
                }
                else
                {
                    try
                    {
                        stack.Pop();
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.Message);
                    }
                }

                comand = Console.ReadLine();
            }

            var result = GetStringResult(stack);

            if (result != string.Empty)
            {
                Console.WriteLine($"{result}{Environment.NewLine}{result}");
            }
        }

        private static string GetStringResult(Stack<int> stack)
        {
            var sb = new StringBuilder();
            while (stack.Count() != 0)
            {
                sb.AppendLine($"{stack.Pop()}");
            }

            return sb.ToString().Trim();
        }
    }


    public class Stack<T> : IEnumerable<T>
    {
        private IList<T> customStack;

        public Stack()
        {
            this.customStack = new List<T>();
        }

        public void Push(T item)
        {
            this.customStack.Insert(0, item);
        }

        public T Pop()
        {
            if (!this.customStack.Any())
            {
                throw new ArgumentException("No elements");
            }

            var popedItem = customStack.First();
            customStack.RemoveAt(0);
            return popedItem;
        }

        public IEnumerator<T> GetEnumerator()
        {
            return this.customStack.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

}
