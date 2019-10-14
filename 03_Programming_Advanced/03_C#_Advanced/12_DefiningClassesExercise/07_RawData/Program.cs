using System;
using System.Linq;
using System.Collections.Generic;

namespace _07_RawData
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Car> carList = new List<Car>();

            for (int i = 0; i < n; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" ");
                string model = inputArr[0];
                int engineSpeed = int.Parse(inputArr[1]);
                int enginePower = int.Parse(inputArr[2]);
                int cargoWeight = int.Parse(inputArr[3]);
                string cargoType = inputArr[4];
                double tire1Pressure = double.Parse(inputArr[5]);
                int tire1Age = int.Parse(inputArr[6]);
                double tire2Pressure = double.Parse(inputArr[7]);
                int tire2Age = int.Parse(inputArr[8]);
                double tire3Pressure = double.Parse(inputArr[9]);
                int tire3Age = int.Parse(inputArr[10]);
                double tire4Pressure = double.Parse(inputArr[11]);
                int tire4Age = int.Parse(inputArr[12]);

                var car = new Car(model, engineSpeed, enginePower, cargoWeight, cargoType, tire1Pressure, tire1Age, tire2Pressure, tire2Age, tire3Pressure, tire3Age, tire4Pressure, tire4Age);
                carList.Add(car);
            }

            string state = Console.ReadLine();

            if (state == "fragile")
            {
                var carsByType = carList
                    .Where(c => c.Cargo.CargoType == "fragile" &&
                    c.TiresList.Any(t => t.TirePressure < 1))
                    .Select(c => c.Model)
                    .ToList();

                Console.WriteLine(string.Join(Environment.NewLine, carsByType));

            }
            else if (state == "flamable")
            {
                var carsByType = carList
                  .Where(c => c.Cargo.CargoType == "flamable" &&
                  c.Engine.EnginePower > 250)
                  .Select(c => c.Model)
                  .ToList();

                Console.WriteLine(string.Join(Environment.NewLine, carsByType));
            }

        }
    }

    class Car
    {
        private string model;
        private Engine engine;
        private Cargo cargo;
        private List<Tire> tiresList;

        public Car(string model, int engineSpeed, int enginePower, int cargoWeight, string cargoType, double tire1Pressure, int tire1Age, double tire2Pressure, int tire2Age, double tire3Pressure, int tire3Age, double tire4Pressure, int tire4Age)
        {
            this.Model = model;
            this.Engine = new Engine(engineSpeed, enginePower);
            this.Cargo = new Cargo(cargoWeight, cargoType);

            List<Tire> currentTiresList = new List<Tire>();
            var tire1 = new Tire(tire1Pressure, tire1Age);
            var tire2 = new Tire(tire2Pressure, tire2Age);
            var tire3 = new Tire(tire3Pressure, tire3Age);
            var tire4 = new Tire(tire4Pressure, tire4Age);
            currentTiresList.Add(tire1);
            currentTiresList.Add(tire2);
            currentTiresList.Add(tire3);
            currentTiresList.Add(tire4);
            this.TiresList = currentTiresList;
        }

        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }
        public Engine Engine
        {
            get { return this.engine; }
            set { this.engine = value; }
        }
        public Cargo Cargo
        {
            get { return this.cargo; }
            set { this.cargo = value; }
        }
        public List<Tire> TiresList
        {
            get { return this.tiresList; }
            set { this.tiresList = value; }
        }
    }

    class Engine
    {
        private int engineSpeed;
        private int enginePower;

        public Engine(int engineSpeed, int enginePower)
        {
            this.EngineSpeed = engineSpeed;
            this.EnginePower = enginePower;
        }

        public int EngineSpeed
        {
            get { return this.engineSpeed; }
            set { this.engineSpeed = value; }
        }
        public int EnginePower
        {
            get { return this.enginePower; }
            set { this.enginePower = value; }
        }

    }

    class Cargo
    {
        private int cargoWeight;
        private string cargoType;

        public Cargo(int cargoWeight, string cargoType)
        {
            this.CargoWeight = cargoWeight;
            this.CargoType = cargoType;
        }

        public int CargoWeight
        {
            get { return this.cargoWeight; }
            set { this.cargoWeight = value; }
        }

        public string CargoType
        {
            get { return this.cargoType; }
            set { this.cargoType = value; }
        }
    }

    class Tire
    {
        private double tirePressure;
        private int tireAge;

        public Tire(double tirePressure, int tireAge)
        {
            this.TirePressure = tirePressure;
            this.TireAge = tireAge;
        }

        public double TirePressure
        {
            get { return this.tirePressure; }
            set { this.tirePressure = value; }
        }

        public int TireAge
        {
            get { return this.tireAge; }
            set { this.tireAge = value; }
        }

    }
}
