using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    public static void Main(string[] args)
    {
        var ordersDict = new Dictionary<string, Dictionary<string, double>>();
        var safeEscape = 0;

        while (true) {
            safeEscape++;
            var order = Console.ReadLine().Split(" ");
            if (order[0] == "buy" || safeEscape == 50) { break; }

            string name = order[0];
            double price = double.Parse(order[1]);
            double quantity = double.Parse(order[2]);

            if (!ordersDict.ContainsKey(name)) {
                ordersDict[name] = new Dictionary<string, double>();
                ordersDict[name].Add("price", price);
                ordersDict[name].Add("quantity", quantity);

            } else {
                ordersDict[name]["price"] = price;
                ordersDict[name]["quantity"] += quantity;
            }
        }

        foreach (var item in ordersDict)
        {
            string name = item.Key;
            double price = item.Value["price"] * item.Value["quantity"];
            Console.WriteLine($"{name} -> {price:F2}");
        }

    }
}