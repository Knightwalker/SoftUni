using System;
using System.Collections.Generic;

namespace SetsAndDictionariesAdvancedLab
{
    class Program
    {
        static void Main(string[] args)
        {

            var parkingLot = new HashSet<string>();

            while (true)
            {
                string[] input = Console.ReadLine().Split(", ");
                if (input[0] == "END") { break; }
                string command = input[0];
                string car = input[1];

                if (command == "IN")
                {
                    parkingLot.Add(car);
                }
                else if (command == "OUT")
                {
                    parkingLot.Remove(car);
                }
            }

            if (parkingLot.Count > 0)
            {
                foreach (var cars in parkingLot)
                {
                    Console.WriteLine(cars);
                }
            }
            else
            {
                Console.WriteLine("Parking Lot is Empty");
            }

        }

    }
}