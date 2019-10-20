using System;

namespace _02_FriendsMaintenance
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] collection = Console.ReadLine().Split(", ");
            int count_blacklister = 0;
            int count_errors = 0;

            while (true)
            {
                string[] inputArr = Console.ReadLine().Split(" ");
                if (inputArr[0] == "Report") { break; }

                if (inputArr[0] == "Blacklist")
                {
                    string name = inputArr[1];
                    int index = -1;
                    for (int i = 0; i < collection.Length; i++)
                    {
                        if (collection[i] == name)
                        {
                            index = i;
                        }
                    }
                    if (index >= 0)
                    {
                        collection[index] = "Blacklisted";
                        count_blacklister++;
                        Console.WriteLine($"{name} was blacklisted.");
                    }
                    else if (index == -1)
                    {
                        Console.WriteLine($"{name} was not found.");
                    }

                }
                else if (inputArr[0] == "Error")
                {
                    int index = int.Parse(inputArr[1]);
                    count_errors++;
                    if (index >= 0 && index < collection.Length)
                    {
                        if (collection[index] != "Blacklisted" && collection[index] != "Lost")
                        {
                            string current = collection[index];
                            collection[index] = "Lost";
                            Console.WriteLine($"{current} was lost due to error.");
                        }
                    }

                } else if (inputArr[0] == "Change")
                {
                    string oldName = inputArr[1];
                    string newName = inputArr[2];

                    int index = -1;
                    for (int i = 0; i < collection.Length; i++)
                    {
                        if (collection[i] == oldName)
                        {
                            index = i;
                        }
                    }
                    if (index >= 0)
                    {
                        collection[index] = newName;
                        Console.WriteLine($"{oldName} changed his username to {newName}.");
                    }
                    else if (index == -1)
                    {
                        Console.WriteLine($"{oldName} was not found.");
                    }

                }

            } // END While-Loop

            Console.WriteLine($"Blacklisted users: {count_blacklister}.");
            Console.WriteLine($"Errors occurred: {count_errors}.");
            foreach (var name in collection)
            {
                if (name != "Blacklisted" && name != "Lost")
                {
                    Console.Write($"{name} ");
                }
            }

        }
    }
}
