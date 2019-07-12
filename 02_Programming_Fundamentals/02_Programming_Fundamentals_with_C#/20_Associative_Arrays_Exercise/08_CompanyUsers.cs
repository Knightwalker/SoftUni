using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dictCompanyUsers = new Dictionary<string, List<string>>();

        while (true)
        {
            string[] input = Console.ReadLine().Split(" -> ");
            if (input[0] == "End") { break; }

            string companyName = input[0];
            string userId = input[1];

            if (!dictCompanyUsers.ContainsKey(companyName))
            {
                dictCompanyUsers[companyName] = new List<string>();

            }
            if (!dictCompanyUsers[companyName].Contains(userId))
            {
                dictCompanyUsers[companyName].Add(userId);

            }
        }

        foreach (var item in dictCompanyUsers.OrderBy(x => x.Key))
        {
            Console.WriteLine(item.Key);
            foreach (var name in item.Value)
            {
                Console.WriteLine("-- " + name);
            }
        }

    }
}