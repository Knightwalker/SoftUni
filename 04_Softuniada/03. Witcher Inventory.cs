using System;
using System.Linq;
using System.Collections.Generic;

namespace FundamentalsMidExam
{
    class Program_3
    {
        static void Main(string[] args)
        {
            string[] itemsArr = Console.ReadLine().Split(", ");
            var inventorySystem = new List<string>(itemsArr);

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "heartbeat") { break; }

                string[] inputArr = input.Split(" / ");
                if (inputArr[0] == "add")
                {
                    string item = inputArr[1];

                    // add the item only if the item does not exist
                    int itemIndex = inventorySystem.IndexOf(item);
                    if (itemIndex < 0)
                    {
                        inventorySystem.Add(item);
                    }
                    else
                    {
                        Console.WriteLine($"{item} already exists!");
                    }

                }
                else if (inputArr[0] == "swap")
                {
                    int index1 = int.Parse(inputArr[1]);
                    int index2 = int.Parse(inputArr[2]);
                    if ((index1 >= 0 && index1 < inventorySystem.Count) && (index2 >= 0 && index2 < inventorySystem.Count))
                    {
                        string temp = inventorySystem[index1];
                        inventorySystem[index1] = inventorySystem[index2];
                        inventorySystem[index2] = temp;
                    }
                }
                else if (inputArr[0] == "equip")
                {
                    string item = inputArr[1];
                    int itemIndex = inventorySystem.IndexOf(item);
                    if (itemIndex >= 0)
                    {
                        inventorySystem[itemIndex] = inventorySystem[itemIndex] + ":equipped";
                    }
                    else
                    {
                        Console.WriteLine($"{item} does not exist!");
                    }
                }
                else if (inputArr[0] == "remove")
                {
                    int index = int.Parse(inputArr[1]);
                    if (index >= 0 && index < inventorySystem.Count)
                    {
                        inventorySystem.RemoveAt(index);
                    }
                }
                else if (inputArr[0] == "open inventory")
                {
                    string mode = inputArr[1];
                    if (mode == "default")
                    {
                        Console.WriteLine(String.Join(", ", inventorySystem));
                    }
                    else if (mode == "equipped")
                    {
                        var tempList = new List<string>();
                        for (int i = 0; i < inventorySystem.Count; i++)
                        {
                            string[] currentItemArr = inventorySystem[i].Split(":");
                            if (currentItemArr.Length > 1)
                            {
                                if (currentItemArr[1] == "equipped")
                                {
                                    tempList.Add(inventorySystem[i]);
                                }
                            }
                        }
                        Console.WriteLine(String.Join(", ", tempList));
                    }
                }
            } // END WHILE-LOOP

        }
    }
}