using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var dictParking = new Dictionary<string, string>();

        int n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            string[] input = Console.ReadLine().Split(" ");
            string operation = input[0].ToLower();

            if (operation == "register") {
                string username = input[1];
                string licensePlateNumber = input[2];

                if (!dictParking.ContainsKey(username)) {
                    dictParking[username] = licensePlateNumber;
                    Console.WriteLine($"{username} registered {licensePlateNumber} successfully");

                } else {
                    Console.WriteLine($"ERROR: already registered with plate number {dictParking[username]}");
                }

            } else if (operation == "unregister") {
                string username = input[1];

                if (!dictParking.ContainsKey(username)) {
                    Console.WriteLine($"ERROR: user {username} not found");

                }
                else {
                    dictParking.Remove(username);
                    Console.WriteLine($"{username} unregistered successfully");
                }

            }
        }

        foreach (var item in dictParking)
        {
            Console.WriteLine(item.Key + " => " + item.Value);
        }

    }
}