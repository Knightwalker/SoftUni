using System;
using System.Linq;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            var vloggerDict = new Dictionary<string, Dictionary<string, SortedSet<string>>>();

            while (true)
            {
                string[] inputArr = Console.ReadLine().Split(" ");
                if (inputArr[0] == "Statistics") { break; }

                string vlogger = inputArr[0];
                string command = inputArr[1];
                string name = ""; for (int i = 2; i < inputArr.Length; i++) { name += inputArr[i]; }

                if (command == "joined")
                {
                    if (!vloggerDict.ContainsKey(vlogger))
                    {
                        vloggerDict.Add(vlogger, new Dictionary<string, SortedSet<string>>());
                        vloggerDict[vlogger].Add("followers", new SortedSet<string>());
                        vloggerDict[vlogger].Add("following", new SortedSet<string>());
                    }
                }
                else if (command == "followed")
                {
                    if (!vloggerDict.ContainsKey(vlogger) || !vloggerDict.ContainsKey(name)) { continue; }
                    if (vlogger == name) { continue; }
                    vloggerDict[vlogger]["following"].Add(name);
                    vloggerDict[name]["followers"].Add(vlogger);
                }
            }

            bool printDetailed = true;
            int counter = 0;
            Console.WriteLine($"The V-Logger has a total of {vloggerDict.Count} vloggers in its logs.");
            foreach (var vlogger in vloggerDict.OrderByDescending(x => x.Value["followers"].Count).ThenBy(x => x.Value["following"].Count))
            {
                Console.WriteLine($"{++counter}. {vlogger.Key} : {vlogger.Value["followers"].Count} followers, {vlogger.Value["following"].Count} following");
                if (printDetailed == true)
                {
                    printDetailed = false;
                    foreach (var names in vlogger.Value["followers"])
                    {
                        Console.WriteLine($"*  {names}");
                    }
                }

            }

        }

    }
}