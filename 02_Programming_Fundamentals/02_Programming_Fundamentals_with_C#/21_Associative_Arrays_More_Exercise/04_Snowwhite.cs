using System;
using System.Linq;
using System.Collections.Generic;

namespace TestTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var dwarfDict = new Dictionary<string, int>();

            while(true)
            {
                string[] input = Console.ReadLine().Split(" <:> ").ToArray();
                if(input[0] == "Once upon a time") { break; }

                string dwarfName = input[0];
                string dwarfHatColor = input[1];
                int dwarfPhysics = int.Parse(input[2]);

                if (!dwarfDict.ContainsKey(dwarfName + " " + dwarfHatColor))
                {
                    dwarfDict[dwarfName + " " + dwarfHatColor] = dwarfPhysics;
                }
                else
                {
                    if (dwarfDict[dwarfName + " " + dwarfHatColor] < dwarfPhysics)
                    {
                        dwarfDict[dwarfName + " " + dwarfHatColor] = dwarfPhysics;
                    }
                }
            }

            foreach (var dwarf in dwarfDict
                .OrderByDescending(x => x.Value)
                .ThenByDescending(x => dwarfDict.Where(y => y.Key.Split(' ')[1] == x.Key.Split(' ')[1]).Count()))
            {
                Console.WriteLine("({0}) {1} <-> {2}", dwarf.Key.Split(' ')[1], dwarf.Key.Split(' ')[0], dwarf.Value);
            }
        }
    }
}