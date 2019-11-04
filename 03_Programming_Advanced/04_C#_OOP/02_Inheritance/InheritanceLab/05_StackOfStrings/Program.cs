using System;
using System.Collections.Generic;

namespace CustomStack
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    public class StackOfStrings : Stack<string>
    {
        public bool IsEmpty()
        {
            if (this.Count <= 0) {
                return true;
            }
            return false;
        }

        public void AddRange(IEnumerable<string> items)
        {
            foreach (var item in items)
            {
                this.Push(item);
            }
        }

    }
}
