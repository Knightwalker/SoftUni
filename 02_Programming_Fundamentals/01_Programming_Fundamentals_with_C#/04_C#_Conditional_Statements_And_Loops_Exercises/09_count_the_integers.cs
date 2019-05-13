using System;

namespace _09_CountTheIntegers
{
    class Program
    {
        static void Main(string[] args)
        {
            bool loop = true;
            int res = 0;

            while (loop)
            {
                try {
                    int n = int.Parse(Console.ReadLine());
                    res += 1;
                }
                catch (Exception)
                {
                    loop = false;
                }

            }

            Console.WriteLine(res);

        }
    }
}