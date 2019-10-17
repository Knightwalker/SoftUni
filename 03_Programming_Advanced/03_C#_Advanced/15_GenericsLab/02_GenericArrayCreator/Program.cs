using System;

namespace GenericArrayCreator
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var arr = ArrayCreator.Create<int>(100, 5);
        }
    }

    public class ArrayCreator
    {
        public static T[] Create<T>(int lenght, T value)
        {
            var array = new T[lenght];
            for (int i = 0; i < lenght; i++)
            {
                array[i] = value;
            }

            return array;
        }
    }
}
