using System;

namespace _02_CustomStack
{
    class Program
    {
        static void Main(string[] args)
        {
            var stack = new CustomStack();
            for (int i = 0; i < 10; i++)
            {
                stack.Push(i);
            }

            Console.WriteLine(stack.Peek());
            stack.Pop();

            stack.ForEach(x => Console.WriteLine(x));

        }
    }

    class CustomStack
    {
        private int[] items;

        public CustomStack()
        {
            this.items = new int[4];
            this.Count = 0;
            this.Capacity = 4;
        }

        public int Count { get; private set; }
        public int Capacity { get; private set; }

        public void Push(int element)
        {
            if (this.Count == this.Capacity) { this.ReSize(); }

            this.items[Count] = element;
            this.Count++;
        }

        public void Pop()
        {
            this.items[Count - 1] = default(int);
            this.Count--;

            if (this.Count * 4 < this.Capacity) { Shrink(); }
        }

        public int Peek()
        {
            var item = this.items[Count - 1];
            return item;
        }

        public void ForEach(Action<int> action)
        {
            for (int i = 0; i < this.Count; i++)
            {
                action(this.items[i]);
            }
        }

        private void ReSize()
        {
            int[] tempArr = new int[this.Count * 2];
            for (int i = 0; i < this.Count; i++)
            {
                tempArr[i] = this.items[i];
            }
            this.items = tempArr;
            this.Capacity *= 2;
        }

        private void Shrink()
        {
            int[] tempArr = new int[this.Capacity / 2];
            for (int i = 0; i < this.Count; i++)
            {
                tempArr[i] = this.items[i];
            }
            this.items = tempArr;
            this.Capacity /= 2;
        }


    }
}
