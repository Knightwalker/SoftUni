using System;

namespace _02_VehiclesExtension
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] carInfoArr = Console.ReadLine().Split(" ");
            string carName = carInfoArr[0];
            double carFuelQuantity = double.Parse(carInfoArr[1]);
            double carLitersPerKm = double.Parse(carInfoArr[2]);
            int carTankCapacity = int.Parse(carInfoArr[3]);
            Car car = new Car(carName, carFuelQuantity, carLitersPerKm, carTankCapacity);

            string[] truckInfoArr = Console.ReadLine().Split(" ");
            string truckName = truckInfoArr[0];
            double truckFuelQuantity = double.Parse(truckInfoArr[1]);
            double truckLitersPerKm = double.Parse(truckInfoArr[2]);
            int truckTankCapacity = int.Parse(truckInfoArr[3]);
            Truck truck = new Truck(truckName, truckFuelQuantity, truckLitersPerKm, truckTankCapacity);

            string[] busInfoArr = Console.ReadLine().Split(" ");
            string busName = busInfoArr[0];
            double busFuelQuantity = double.Parse(busInfoArr[1]);
            double busLitersPerKm = double.Parse(busInfoArr[2]);
            int busTankCapacity = int.Parse(busInfoArr[3]);
            Bus bus = new Bus(busName, busFuelQuantity, busLitersPerKm, busTankCapacity);

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
                    }
                    else if (vehicle == "Truck")
                    {
                        truck.Drive(distance);
                    }
                    else if (vehicle == "Bus")
                    {
                        bus.Drive(distance);
                    }
                }
                else if (command == "DriveEmpty")
                {
                    double distance = double.Parse(commandArr[2]);
                    bus.DriveEmpty(distance);
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
                    else if (vehicle == "Bus")
                    {
                        bus.Refuel(liters);
                    }
                }

            }

            Console.WriteLine($"Car: {car.FuelQuantity:F2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:F2}");
            Console.WriteLine($"Bus: {bus.FuelQuantity:F2}");

        }
    }

    public class Vehicle
    {
        public Vehicle(string name, double fuelQuantity, double litersPerKm, int tankCapacity)
        {
            this.Name = name;

            if (fuelQuantity > tankCapacity)
            {
                FuelQuantity = 0;
            }
            else
            {
                FuelQuantity = fuelQuantity;
            }

            this.LitersPerKm = litersPerKm;
            this.TankCapacity = tankCapacity;
        }

        public string Name { get; set; }
        public double FuelQuantity { get; set; }
        public double LitersPerKm { get; set; }
        public double TankCapacity { get; set; }

        public virtual void Refuel(double fuel)
        {
            if (fuel < 0)
            {
                Console.WriteLine("Fuel must be a positive number");
                return;
            }

            if (fuel > this.TankCapacity)
            {
                Console.WriteLine($"Cannot fit {fuel} fuel in the tank");
            }
            else
            {
                this.FuelQuantity += fuel;
            }

        }

    }

    public class Car : Vehicle
    {
        public Car(string name, double fuelQuantity, double litersPerKm, int tankCapacity) : base(name, fuelQuantity, litersPerKm, tankCapacity)
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

    }

    public class Truck : Vehicle
    {
        public Truck(string name, double fuelQuantity, double litersPerKm, int tankCapacity) : base(name, fuelQuantity, litersPerKm, tankCapacity)
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

        public override void Refuel(double fuel)
        {       

            if (fuel <= 0)
            {
                Console.WriteLine("Fuel must be a positive number");
                return;
            }

            if (fuel > this.TankCapacity)
            {
                Console.WriteLine($"Cannot fit {fuel} fuel in the tank");
            }
            else
            {
                fuel -= fuel * 0.05;
                this.FuelQuantity += fuel;
            }

        }

    }

    public class Bus : Vehicle
    {
        public Bus(string name, double fuelQuantity, double litersPerKm, int tankCapacity) : base(name, fuelQuantity, litersPerKm, tankCapacity)
        {
        }

        public void Drive(double distance)
        {
            double fuelConsumptionPerKm = this.LitersPerKm + 1.4;
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

        public void DriveEmpty(double distance)
        {
            double fuelConsumptionPerKm = this.LitersPerKm;
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

    }

}