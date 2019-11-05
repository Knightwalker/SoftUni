using System;

namespace NeedForSpeed
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            Vehicle vehicle = new Vehicle(300, 100);
            Vehicle car = new Car(300, 100);

            vehicle.Drive(10);
            car.Drive(10);

            Console.WriteLine(vehicle.Fuel);
            Console.WriteLine(car.Fuel);
            
        }
    }

    public class Vehicle
    {
        double DefaultFuelConsumption = 1.25;

        public Vehicle(int horsePower, double fuel)
        {
            this.HorsePower = horsePower;
            this.Fuel = fuel;
        }

        public int HorsePower { get; set; }
        public double Fuel { get; set; }

        public virtual double FuelConsumption => DefaultFuelConsumption;

        public void Drive(double km)
        {
            if (this.Fuel - km * this.FuelConsumption >= 0)
            {
                this.Fuel -= km * this.FuelConsumption;
            }
        }

    }

    public class Car : Vehicle
    {
        double DefaultFuelConsumption = 3;

        public Car(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }

        public override double FuelConsumption => DefaultFuelConsumption;

    }

    public class FamilyCar : Car
    {
        public FamilyCar(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }
    }

    public class SportCar : Car
    {
        double DefaultFuelConsumption = 10;

        public SportCar(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }

        public override double FuelConsumption => DefaultFuelConsumption;
    }

    public class Motorcycle : Vehicle
    {
        public Motorcycle(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }
    }

    public class CrossMotorcycle : Motorcycle
    {
        public CrossMotorcycle(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }
    }

    public class RaceMotorcycle : Motorcycle
    {
        double DefaultFuelConsumption = 8;

        public RaceMotorcycle(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }

        public override double FuelConsumption => DefaultFuelConsumption;

    }

}
