using System;

class Program
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        int[] array = new int[n];
        Generate(array, 0);
    }

    static void Generate(int[] array, int index)
    {
        if (index == array.Length)
        {
            Console.WriteLine(String.Join(" ", array));
        }
        else
        {
            for (int i = 0; i <= 1; i++)
            {
                array[index] = i;
                Generate(array, index + 1);
            }
        }
    }
}