using System;
using System.Linq;
using System.Collections.Generic;

namespace _08_CarSalesman
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Engine> enginesList = new List<Engine>();
            List<Car> carsList = new List<Car>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                inputArr = inputArr.Where(x => !string.IsNullOrEmpty(x)).ToArray();
                if (inputArr.Length == 2)
                {
                    string model = inputArr[0];
                    int power = int.Parse(inputArr[1]);
                    Engine engine = new Engine(model, power);
                    enginesList.Add(engine);
                }
                else if (inputArr.Length == 3)
                {
                    string model = inputArr[0];
                    int power = int.Parse(inputArr[1]);

                    int testForInt = -1;
                    bool isDisplacement = int.TryParse(inputArr[2], out testForInt);
                    if (isDisplacement)
                    {
                        string displacement = inputArr[2];
                        Engine engine = new Engine(model, power, displacement, "n/a");
                        enginesList.Add(engine);
                    }
                    else
                    {
                        string efficiency = inputArr[2];
                        Engine engine = new Engine(model, power, "n/a", efficiency);
                        enginesList.Add(engine);
                    }
                }
                else if (inputArr.Length == 4)
                {
                    string model = inputArr[0];
                    int power = int.Parse(inputArr[1]);
                    string displacement = inputArr[2];
                    string efficiency = inputArr[3];
                    Engine engine = new Engine(model, power, displacement, efficiency);
                    enginesList.Add(engine);
                }
            }

            int m = int.Parse(Console.ReadLine());
            for (int i = 0; i < m; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                inputArr = inputArr.Where(x => !string.IsNullOrEmpty(x)).ToArray();

                if (inputArr.Length == 2)
                {
                    string model = inputArr[0];
                    string engine = inputArr[1];

                    var currentEngineObj = enginesList.Where(x => x.Model == engine).FirstOrDefault();
                    Car car = new Car(model, currentEngineObj);
                    carsList.Add(car);
                }
                else if (inputArr.Length == 3)
                {
                    string model = inputArr[0];
                    string engine = inputArr[1];

                    int testForInt = -1;
                    bool isWeight = int.TryParse(inputArr[2], out testForInt);
                    if (isWeight)
                    {
                        string weight = inputArr[2];
                        var currentEngineObj = enginesList.Where(x => x.Model == engine).FirstOrDefault();
                        Car car = new Car(model, currentEngineObj, weight, "n/a");
                        carsList.Add(car);
                    }
                    else
                    {
                        string color = inputArr[2];
                        var currentEngineObj = enginesList.Where(x => x.Model == engine).FirstOrDefault();
                        Car car = new Car(model, currentEngineObj, "n/a", color);
                        carsList.Add(car);
                    }
                }
                else if (inputArr.Length == 4)
                {
                    string model = inputArr[0];
                    string engine = inputArr[1];
                    string weight = inputArr[2];
                    string color = inputArr[3];

                    var currentEngineObj = enginesList.Where(x => x.Model == engine).FirstOrDefault();
                    Car car = new Car(model, currentEngineObj, weight, color);
                    carsList.Add(car);
                }

            }

            foreach (var car in carsList)
            {
                Console.WriteLine($"{car.Model}:");
                Console.WriteLine($"  {car.Engine.Model}:");
                Console.WriteLine($"    Power: {car.Engine.Power}");
                Console.WriteLine($"    Displacement: {car.Engine.Displacement}");
                Console.WriteLine($"    Efficiency: {car.Engine.Efficiency}");
                Console.WriteLine($"  Weight: {car.Weight}");
                Console.WriteLine($"  Color: {car.Color}");
            }

        }
    }

    public class Car
    {
        private string model;
        private Engine engine;
        private string weight;
        private string color;

        public Car(string model, Engine engine)
        {
            this.Model = model;
            this.Engine = engine;
            this.Weight = "n/a";
            this.Color = "n/a";
        }

        public Car(string model, Engine engine, string weight, string color) : this(model, engine)
        {
            this.Weight = weight;
            this.Color = color;
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
        public string Weight
        {
            get { return this.weight; }
            set { this.weight = value; }
        }
        public string Color
        {
            get { return this.color; }
            set { this.color = value; }
        }

    }

    public class Engine
    {
        private string model;
        private int power;
        private string displacement;
        private string efficiency;

        public Engine(string model, int power)
        {
            this.Model = model;
            this.Power = power;
            this.Displacement = "n/a";
            this.Efficiency = "n/a";
        }

        public Engine(string model, int power, string displacement, string efficiency) :this(model, power)
        {
            this.Displacement = displacement;
            this.Efficiency = efficiency;
        }

        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }

        public int Power
        {
            get { return this.power; }
            set { this.power = value; }
        }
        public string Displacement
        {
            get { return this.displacement; }
            set { this.displacement = value; }
        }
        public string Efficiency
        {
            get { return this.efficiency; }
            set { this.efficiency = value; }
        }

    }
}
