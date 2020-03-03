using System;
using System.Linq;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            var contestsDict = new Dictionary<string, string>();
            var usersDict = new SortedDictionary<string, Dictionary<string, int>>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of contests") { break; }

                string[] inputArr = input.Split(":");
                string contest = inputArr[0];
                string password = inputArr[1];
                if (!contestsDict.ContainsKey(contest))
                {
                    contestsDict.Add(contest, password);
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of submissions") { break; }

                string[] inputArr = input.Split("=>");
                string contest = inputArr[0];
                string password = inputArr[1];
                string username = inputArr[2];
                int points = int.Parse(inputArr[3]);

                if (contestsDict.ContainsKey(contest))
                {
                    if (contestsDict[contest] == password)
                    {
                        if (!usersDict.ContainsKey(username))
                        {
                            usersDict.Add(username, new Dictionary<string, int>());
                        }

                        if (!usersDict[username].ContainsKey(contest))
                        {
                            usersDict[username].Add(contest, points);
                        }
                        else
                        {
                            if (points > usersDict[username][contest])
                            {
                                usersDict[username][contest] = points;
                            }
                        }
                    }
                }
            }

            string bestCandidate = "";
            int bestCandidatePoints = 0;

            foreach (var username in usersDict)
            {
                if (username.Value.Values.Sum() > bestCandidatePoints)
                {
                    bestCandidatePoints = username.Value.Values.Sum();
                    bestCandidate = username.Key;
                }
            }

            Console.WriteLine($"Best candidate is {bestCandidate} with total {bestCandidatePoints} points.");
            Console.WriteLine($"Ranking: ");
            foreach (var username in usersDict)
            {
                Console.WriteLine(username.Key);
                foreach (var contest in username.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"#  {contest.Key} -> {contest.Value}");
                }
            }

        }

    }
}