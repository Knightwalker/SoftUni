using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var materialsDict = new Dictionary<string, int>();
        var obtainedItemName = "";
        var obtainedItem = false;

        materialsDict["shards"] = 0;
        materialsDict["fragments"] = 0;
        materialsDict["motes"] = 0;

        while (!obtainedItem)
        {
            var arr = Console.ReadLine().Split(" ");
            for (int i = 0; i < arr.Length; i += 2)
            {
                var material = arr[i + 1].ToLower();
                var quantity = int.Parse(arr[i]);

                if (!materialsDict.ContainsKey(material))
                {
                    materialsDict[material] = 0;
                }
                materialsDict[material] += quantity;       

                if (materialsDict.ContainsKey("shards"))
                {
                    if (materialsDict["shards"] >= 250)
                    {
                        materialsDict["shards"] -= 250;
                        obtainedItem = true;
                        obtainedItemName = "Shadowmourne obtained!";
                        break;
                    }
                }
                if (materialsDict.ContainsKey("fragments"))
                {
                    if (materialsDict["fragments"] >= 250)
                    {
                        materialsDict["fragments"] -= 250;
                        obtainedItem = true;
                        obtainedItemName = "Valanyr obtained!";
                        break;
                    }
                }
                if (materialsDict.ContainsKey("motes"))
                {
                    if (materialsDict["motes"] >= 250)
                    {
                        materialsDict["motes"] -= 250;
                        obtainedItem = true;
                        obtainedItemName = "Dragonwrath obtained!";
                        break;
                    }
                }
            }
        }

        var arr2 = new string[] { "motes", "shards", "fragments"};

        Console.WriteLine(obtainedItemName);
        foreach (var item in materialsDict.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
        {
            if (arr2.Contains(item.Key))
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
        }

        foreach (var item in materialsDict.OrderBy(x => x.Key))
        {
            if (!arr2.Contains(item.Key))
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
        }

    }
}