using System;

namespace NestedLoopsExercises
{
    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());  
            int l = int.Parse(Console.ReadLine());

            for (int firstSymbol = 1; firstSymbol < n; firstSymbol++)
            {
                for (int secondSymbol = 1; secondSymbol < n; secondSymbol++)
                {
                    for (char thirdSymbol = 'a'; thirdSymbol < 'a'+l; thirdSymbol++)
                    {
                        for (char fourthSymbol = 'a' ; fourthSymbol < 'a'+l; fourthSymbol++)
                        {
                            for (int fifthSymbol = 1; fifthSymbol <= n; fifthSymbol++)
                            {
                                if(fifthSymbol > firstSymbol && fifthSymbol > secondSymbol)
                                {
                                    Console.Write($"{firstSymbol}{secondSymbol}{thirdSymbol}{fourthSymbol}{fifthSymbol} ");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
