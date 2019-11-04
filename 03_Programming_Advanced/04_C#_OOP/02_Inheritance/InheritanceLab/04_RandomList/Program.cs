using System;
using System.Collections.Generic;

namespace CustomRandomList
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var randomList = new RandomList();
            randomList.Add("1");
            randomList.Add("2");
            randomList.Add("3");
            randomList.Add("4");

            Console.WriteLine(randomList.RandomString());

        }
    }

    public class RandomList : List<string>
    {
        private Random random = new Random();

        public string RandomString()
        {
            int index = this.random.Next(0, this.Count);
            return this[index];
        }

        public string RemoveRandomElement()
        {
            int index = this.random.Next(0, this.Count);
            string el = this[index];
            this.RemoveAt(index);
            return el;
        }

    }

}
