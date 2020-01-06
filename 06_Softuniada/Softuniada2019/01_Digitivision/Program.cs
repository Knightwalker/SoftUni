using System;

namespace _01_Digitivision
{
    class Program
    {
        static void Main(string[] args)
        {
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());
            int n3 = int.Parse(Console.ReadLine());
            int[] arr = new int[3] { n1, n2, n3 };

            int sum = n1 + n2 + n3;
            bool digitivision = false;

            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = 0; j < arr.Length; j++)
                {
                    for (int k = 0; k < arr.Length; k++)
                    {
                        if (i == j || j == k || i == k) { continue; } // skip repeating combinations
                        //Console.WriteLine($"{arr[i]}{arr[j]}{arr[k]}");

                        double num = double.Parse(arr[i].ToString() + arr[j].ToString() + arr[k].ToString());
                        if (num % sum == 0)
                        {
                            digitivision = true;
                            break;
                        }

                    }
                }
            }

            if (digitivision)
            {
                Console.WriteLine("Digitivision successful!");
            }
            else
            {
                Console.WriteLine("No digitivision possible.");
            }

        }
    }
}