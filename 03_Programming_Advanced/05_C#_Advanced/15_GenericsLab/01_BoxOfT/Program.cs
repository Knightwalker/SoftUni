using System;
using System.Collections.Generic;

namespace BoxOfT
{
    class StartUp
    {
        static void Main(string[] args)
        {
            Box<int> box = new Box<int>();
            box.Add(1);
            box.Add(2);
            box.Add(3);
            Console.WriteLine(box.Remove());
            box.Add(4);
            box.Add(5);
            Console.WriteLine(box.Remove());
        }
    }

    public class Box<T>
    {
        private List<T> list;

        public Box()
        {
            this.list = new List<T>();
        }

        public int Count
        {
            get { return this.list.Count; }
        }

        public void Add(T element)
        {
            this.list.Add(element);
        }

        public T Remove()
        {
            if (this.list.Count <= 0)
            {
                throw new InvalidOperationException();
            }

            var element = list[this.Count - 1];
            this.list.RemoveAt(this.list.Count - 1);
            return element;
        }

    }

}
