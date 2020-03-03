using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {

            var vipList = new HashSet<string>();
            var regularList = new HashSet<string>();
            var partyList = new HashSet<string>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "PARTY") { break; }
                if (input.Length > 8) { continue; }

                if (char.IsDigit(input[0]))
                {
                    vipList.Add(input);
                }
                else
                {
                    regularList.Add(input);
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "END") { break; }

                partyList.Add(input);
            }

            foreach (var member in partyList)
            {
                vipList.Remove(member);
                regularList.Remove(member);
            }

            Console.WriteLine(vipList.Count + regularList.Count);
            foreach (var member in vipList)
            {
                Console.WriteLine(member);
            }
            foreach (var member in regularList)
            {
                Console.WriteLine(member);
            }

        }

    }
}