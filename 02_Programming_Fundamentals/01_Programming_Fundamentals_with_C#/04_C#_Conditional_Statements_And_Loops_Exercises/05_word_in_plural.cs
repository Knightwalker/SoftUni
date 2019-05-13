using System;

namespace _05_WordsInPlural
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine();
            string new_word = "";

            bool word_y = word.EndsWith("y");
            bool word_Z = word.EndsWith("o") || word.EndsWith("s") || word.EndsWith("x") || word.EndsWith("z") || word.EndsWith("ch") || word.EndsWith("sh");

            if (word_y)
            {
                new_word = word.Remove(word.Length - 1, 1);
                Console.WriteLine($"{new_word}ies");
            }
            else if (word_Z)
            {
                Console.WriteLine($"{word}es");
            }
            else { Console.WriteLine($"{word}s"); }

        }
    }
}