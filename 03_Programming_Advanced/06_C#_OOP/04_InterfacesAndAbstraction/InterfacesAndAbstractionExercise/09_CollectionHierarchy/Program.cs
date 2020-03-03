using System;
using System.Collections.Generic;

namespace _09_CollectionHierarchy
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lineOneArr = Console.ReadLine().Split(" ");
            int n = int.Parse(Console.ReadLine());

            AddCollection collection1 = new AddCollection();
            AddRemoveCollection collection2 = new AddRemoveCollection();
            MyList collection3 = new MyList();

            // Add Elements
            foreach (var item in lineOneArr)
            {
                Console.Write($"{collection1.Add(item)} "); 
            }
            Console.WriteLine();
            foreach (var item in lineOneArr)
            {
                Console.Write($"{collection2.Add(item)} ");
            }
            Console.WriteLine();
            foreach (var item in lineOneArr)
            {
                Console.Write($"{collection3.Add(item)} ");
            }
            Console.WriteLine();

            // Remove Elements
            for (int i = 0; i < n; i++)
            {
                Console.Write($"{collection2.Remove()} ");
            }
            Console.WriteLine();
            for (int i = 0; i < n; i++)
            {
                Console.Write($"{collection3.Remove()} ");
            }
            Console.WriteLine();

        }
    }

    public class AddCollection
    {
        private List<string> collection;

        public AddCollection()
        {
            this.collection = new List<string>();
        }

        public int Add(string item)
        {
            this.collection.Add(item);
            return this.collection.Count - 1;
        }

    }

    public class AddRemoveCollection
    {
        private List<string> collection;

        public AddRemoveCollection()
        {
            this.collection = new List<string>();
        }

        public int Add(string item)
        {
            this.collection.Insert(0, item);
            return 0;
        }

        public string Remove()
        {
            if (this.collection.Count > 0)
            {
                string element = this.collection[this.collection.Count - 1];
                this.collection.RemoveAt(this.collection.Count - 1);
                return element;
            }
            return "Collection is empty";
        }
    }

    public class MyList
    {
        private List<string> collection;

        public MyList()
        {
            this.collection = new List<string>();
        }

        public int Used
        {
            get
            {
                return this.collection.Count;
            }
        }

        public int Add(string item)
        {
            this.collection.Insert(0, item);
            return 0;
        }

        public string Remove()
        {
            if (this.collection.Count > 0)
            {
                string element = this.collection[0];
                this.collection.RemoveAt(0);
                return element;
            }
            return "Collection is empty";
        }

    }

}
