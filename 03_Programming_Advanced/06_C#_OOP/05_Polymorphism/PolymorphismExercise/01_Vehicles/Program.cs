using System;

namespace _01_Vehicles
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] carInfoArr = Console.ReadLine().Split(" ");
            string carName = carInfoArr[0];
            double carFuelQuantity = double.Parse(carInfoArr[1]);
            double carLitersPerKm = double.Parse(carInfoArr[2]);
            Car car = new Car(carName, carFuelQuantity, carLitersPerKm);

            string[] truckInfoArr = Console.ReadLine().Split(" ");
            string truckName = truckInfoArr[0];
            double truckFuelQuantity = double.Parse(truckInfoArr[1]);
            double truckLitersPerKm = double.Parse(truckInfoArr[2]);
            Truck truck = new Truck(truckName, truckFuelQuantity, truckLitersPerKm);

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] commandArr = Console.ReadLine().Split(" ");
                string command = commandArr[0];
                string vehicle = commandArr[1];

                if (command == "Drive")
                {
                    double distance = double.Parse(commandArr[2]);
                    if (vehicle == "Car")
                    {
                        car.Drive(distance);
                    } else if (vehicle == "Truck")
                    {
                        truck.Drive(distance);
                    }
                }
                else if (command == "Refuel")
                {
                    double liters = double.Parse(commandArr[2]);
                    if (vehicle == "Car")
                    {
                        car.Refuel(liters);
                    }
                    else if (vehicle == "Truck")
                    {
                        truck.Refuel(liters);
                    }
                }

            }

            Console.WriteLine($"Car: {car.FuelQuantity:F2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:F2}");

        }
    }

    public class Vehicle
    {
        public Vehicle(string name, double fuelQuantity, double litersPerKm)
        {
            this.Name = name;
            this.FuelQuantity = fuelQuantity;
            this.LitersPerKm = litersPerKm;
        }

        public string Name { get; set; }
        public double FuelQuantity { get; set; }
        public double LitersPerKm { get; set; }

    }

    public class Car : Vehicle
    {
        public Car(string name, double fuelQuantity, double litersPerKm) : base(name, fuelQuantity, litersPerKm)
        {
        }

        public void Drive(double distance)
        {
            double fuelConsumptionPerKm = this.LitersPerKm + 0.9;
            double fuelConsumptionNeeded = fuelConsumptionPerKm * distance;

            if (fuelConsumptionNeeded <= this.FuelQuantity)
            {
                Console.WriteLine($"{this.Name} travelled {distance} km");
                this.FuelQuantity -= fuelConsumptionNeeded;
            }
            else
            {
                Console.WriteLine($"{this.Name} needs refueling");
            }
        }

        public void Refuel(double fuel)
        {
            this.FuelQuantity += fuel;
        }

    }

    public class Truck : Vehicle
    {
        public Truck(string name, double fuelQuantity, double litersPerKm) : base(name, fuelQuantity, litersPerKm)
        {
        }

        public void Drive(double distance)
        {
            double fuelConsumptionPerKm = this.LitersPerKm + 1.6;
            double fuelConsumptionNeeded = fuelConsumptionPerKm * distance;

            if (fuelConsumptionNeeded <= this.FuelQuantity)
            {
                Console.WriteLine($"{this.Name} travelled {distance} km");
                this.FuelQuantity -= fuelConsumptionNeeded;
            }
            else
            {
                Console.WriteLine($"{this.Name} needs refueling");
            }
        }

        public void Refuel(double fuel)
        {
            fuel -= fuel * 0.05;
            this.FuelQuantity += fuel;
        }

    }

}