using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dictExam = new Dictionary<string, int>();
        var dictSubm = new Dictionary<string, int>();

        while (true)
        {
            string[] input = Console.ReadLine().Split("-");
            if (input[0] == "exam finished") { break; }

            if (input.Length == 3) {
                string username = input[0];
                string language = input[1];
                int points = int.Parse(input[2]);

                // User - Points
                if (!dictExam.ContainsKey(username)) {
                    dictExam[username] = 0;
                }
                if (points > dictExam[username]) {
                    dictExam[username] = points;
                }

                // Language - Submissions
                if (!dictSubm.ContainsKey(language))
                {
                    dictSubm[language] = 0;
                }
                dictSubm[language]++;

            } else if (input.Length == 2 && input[1].ToLower() == "banned") {
                string username = input[0];
                dictExam.Remove(username);
            }
        }

        Console.WriteLine("Results:");
        foreach (var item in dictExam.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
        {
            Console.WriteLine(item.Key + " | " + item.Value);
        }
        Console.WriteLine("Submissions:");
        foreach (var item in dictSubm.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
        {
            Console.WriteLine(item.Key + " - " + item.Value);
        }

    }
}