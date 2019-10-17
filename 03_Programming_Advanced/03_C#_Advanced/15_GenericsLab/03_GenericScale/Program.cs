using System;

namespace GenericScale
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var scale = new EqualityScale<int>(1, 1);
            Console.WriteLine(scale.AreEqual()); 
        }
    }

    public class EqualityScale<T> where T : IComparable<T>
    {

        public EqualityScale(T first, T second)
        {
            First = first;
            Second = second;
        }

        public T First { get; }
        public T Second { get; }

        public bool? AreEqual()
        {
            return this.First.CompareTo(this.Second) > 0;
        }
    }

}
