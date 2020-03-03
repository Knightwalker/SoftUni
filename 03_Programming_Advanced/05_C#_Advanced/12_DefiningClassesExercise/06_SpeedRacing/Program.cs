using System;
using System.Linq;
using System.Collections.Generic;

namespace _06_SpeedRacing
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var carsList = new List<Car>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ");
                string model = input[0];
                double fuelAmount = double.Parse(input[1]);
                double fuelConsumptionPerKilometer = double.Parse(input[2]);

                var car = new Car(model, fuelAmount, fuelConsumptionPerKilometer);
                carsList.Add(car);
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                string[] inputArr = input.Split(" ");
                string model = inputArr[1];
                double kmAmount = double.Parse(inputArr[2]);

                //create a reference to the current car model in the list
                var currentCarObj = carsList.Where(x => x.Model == model).FirstOrDefault();
                currentCarObj.Drive(kmAmount);
            }

            foreach (var car in carsList)
            {
                Console.WriteLine($"{car.Model} {car.FuelAmount:F2} {car.TravelledDistance}");
            }

        }
    }

    public class Car
    {
        private string model;
        private double fuelAmount;
        private double fuelConsumptionPerKilometer;
        private double travelledDistance;

        public Car(string model, double fuelAmount, double fuelConsumptionPerKilometer)
        {
            this.Model = model;
            this.FuelAmount = fuelAmount;
            this.FuelConsumptionPerKilometer = fuelConsumptionPerKilometer;
            this.TravelledDistance = 0;
        }

        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }
        public double FuelAmount
        {
            get { return this.fuelAmount; }
            set { this.fuelAmount = value; }
        }
        public double FuelConsumptionPerKilometer
        {
            get { return this.fuelConsumptionPerKilometer; }
            set { this.fuelConsumptionPerKilometer = value; }
        }
        public double TravelledDistance
        {
            get { return this.travelledDistance; }
            set { this.travelledDistance = value; }
        }

        public void Drive(double kmAmount)
        {
            if (FuelAmount >= this.FuelConsumptionPerKilometer * kmAmount)
            {
                FuelAmount -= this.FuelConsumptionPerKilometer * kmAmount;
                TravelledDistance += kmAmount;
            }
            else
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
        }

    }
}
