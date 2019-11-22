using System;
using System.Linq;

namespace _05_GeneratingCombinations
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] set = Console.ReadLine().Split().Select(x => int.Parse(x)).ToArray();
            int n = int.Parse(Console.ReadLine());
            int[] vect = new int[n];

            GenCombs(set, vect, 0, 0);
        }

        static void GenCombs(int[] set, int[] vect, int index, int border)
        {

            if (index == vect.Length)
            {
                Console.WriteLine(String.Join(" ", vect));
                return;
            }

            for (int i = border; i < set.Length; i++)
            {
                vect[index] = set[i];
                GenCombs(set, vect, index + 1, i + 1);
            }

        }
    }
}