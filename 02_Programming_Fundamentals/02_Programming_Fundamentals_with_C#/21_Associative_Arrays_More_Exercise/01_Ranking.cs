using System;
using System.Collections.Generic;
using System.Linq;

class MainClass 
{
  public static void Main (string[] args) 
  {
    var contestDatabase = new Dictionary<string, string>();

    while(true)
    {
      string input = Console.ReadLine();
      if(input == "end of contests") { break; }
      string[] newInput = input.Split(":", StringSplitOptions.RemoveEmptyEntries).ToArray();
      string contest = newInput[0];
      string password = newInput[1];

      if(!contestDatabase.ContainsKey(contest))
      {
        contestDatabase[contest] = password;
      }
    }

    var submissionsDatabase = new Dictionary<string, Dictionary<string, int>>();

    while(true)
    {
      string input = Console.ReadLine();
      if(input == "end of submissions") { break; }
      string[] newInput = input.Split("=>", StringSplitOptions.RemoveEmptyEntries).ToArray();

      string contest = newInput[0];
      string password = newInput[1];
      string username = newInput[2];
      int points = int.Parse(newInput[3]); 

      if(contestDatabase.ContainsKey(contest))
      {
        if(password == contestDatabase[contest])
        {
          if(!submissionsDatabase.ContainsKey(username))
          {
            submissionsDatabase[username] = new Dictionary<string, int>();
          }
          
          if(!submissionsDatabase[username].ContainsKey(contest))
          {
            submissionsDatabase[username][contest] = 0;
          }

          if(submissionsDatabase[username][contest] < points)
          {
            submissionsDatabase[username][contest] = points;
          }
        }
      }
    }
    
    string bestCandidate = String.Empty;
    int bestPoints = 0;
    foreach(var kvp in submissionsDatabase)
    {
      int currentPoints = kvp.Value.Values.Sum();
      if(currentPoints > bestPoints)
      {
        bestPoints = currentPoints;
        bestCandidate = kvp.Key;
      }
    }


    Console.WriteLine($"Best candidate is {bestCandidate} with total {bestPoints} points.");
    Console.WriteLine("Ranking: ");

    foreach(var kvp in submissionsDatabase.OrderBy(x => x.Key))
    {
      Console.WriteLine(kvp.Key);

      foreach(var kvp2 in kvp.Value.OrderByDescending(x => x.Value))
      {
        Console.WriteLine($"#  {kvp2.Key} -> {kvp2.Value}");
      }
    }
  }
}