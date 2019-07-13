using System;
using System.Collections.Generic;
using System.Linq;

namespace KaliKris
{
    class Program
    {
        static void Main(string[] args)
        {
            var judgeDict = new Dictionary<string, Dictionary<string, int>>();
            var individualDict = new Dictionary<string, Dictionary<string, int>>();

            while (true)
            {
                string[] input = Console.ReadLine().Split(" -> ").ToArray();
                if (input[0] == "no more time") { break; }

                string username = input[0];
                string contest = input[1];
                int points = int.Parse(input[2]);

                //region#1
                if(!judgeDict.ContainsKey(contest))
                {
                    judgeDict[contest] = new Dictionary<string, int>();
                }

                if (!judgeDict[contest].ContainsKey(username))
                {
                    judgeDict[contest].Add(username, points);
                }
                else
                {
                    if (judgeDict[contest][username] < points)
                    {
                        judgeDict[contest][username] = points;
                    }
                }
                //end of region#1

                //region#2
                if (!individualDict.ContainsKey(username))
                {
                    individualDict[username] = new Dictionary<string, int>();
                }

                if (!individualDict[username].ContainsKey(contest))
                {
                    individualDict[username].Add(contest, points);
                }
                else
                {
                    if (individualDict[username][contest] < points)
                    {
                        individualDict[username][contest] = points;
                    }
                }
                //end of region#2
            }

            foreach (var item in judgeDict)
            {
                int counter = 1;
                Console.WriteLine($"{item.Key}: {item.Value.Count()} participants");
                foreach (var item2 in item.Value.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
                {
                    Console.WriteLine($"{counter}. {item2.Key} <::> {item2.Value}");
                    counter++;
                }
            }

            var statisticsDict = new Dictionary<string, int>();
            foreach (var item in individualDict)
            {
                if (!statisticsDict.ContainsKey(item.Key))
                {
                    statisticsDict[item.Key] = 0;
                }

                foreach (var item2 in item.Value)
                {
                    statisticsDict[item.Key] += item2.Value;
                }
            }

            int counter2 = 1;
            Console.WriteLine("Individual standings:");
            foreach (var item in statisticsDict.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {     
                Console.WriteLine($"{counter2++}. {item.Key} -> {item.Value}");
            }
        }
    }
}