using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace _02_Collection
{
    public class Launcher
    {
        public static void Main()
        {
            string input = Console.ReadLine();
            ListyIterator<string> iterator = null;

            while (!input.Equals("END"))
            {
                string[] args = input.Split();

                switch (args[0])
                {
                    case "Create":

                        iterator = new ListyIterator<string>(args.Skip(1));
                        break;

                    case "Move":
                        Console.WriteLine(iterator.Move());
                        break;

                    case "HasNext":
                        Console.WriteLine(iterator.HasNext());
                        break;

                    case "Print":

                        try
                        {
                            Console.WriteLine(iterator.Print());
                        }
                        catch (ArgumentException ae)
                        {
                            Console.WriteLine(ae.Message);
                        }

                        break;

                    case "PrintAll":

                        foreach (string item in iterator)
                        {
                            Console.Write($"{item} ");
                        }

                        Console.WriteLine();
                        break;
                }

                input = Console.ReadLine();
            }
        }
    }

    public class ListyIterator<T> : IEnumerable<T>
    {
        private IList<T> elements;
        private int currentIndex;

        public ListyIterator(IEnumerable<T> inputElements)
        {
            this.elements = new List<T>(inputElements);
        }

        public bool Move()
        {
            if (this.HasNext())
            {
                this.currentIndex++;
                return true;
            }

            return false;
        }

        public bool HasNext()
        {
            if (this.currentIndex < this.elements.Count - 1)
            {
                return true;
            }

            return false;
        }

        public T Print()
        {
            if (this.elements.Count == 0)
            {
                throw new ArgumentException("Invalid Operation!");
            }

            return this.elements[this.currentIndex];
        }

        public IEnumerator<T> GetEnumerator()
        {
            foreach (T item in this.elements)
            {
                yield return item;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
