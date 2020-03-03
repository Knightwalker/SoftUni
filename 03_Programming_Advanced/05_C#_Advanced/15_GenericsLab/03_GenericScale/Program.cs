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

    public class EqualityScale<T>
    {
        private T left;
        private T right;
        public EqualityScale(T left, T right)
        {
            this.left = left;
            this.right = right;
        }
        public bool AreEqual()
        {
            bool result = this.left.Equals(this.right);
            return result;
        }
    }

}
