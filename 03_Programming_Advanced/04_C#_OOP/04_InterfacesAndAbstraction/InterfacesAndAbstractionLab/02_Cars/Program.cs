using System;
using System.Text;

namespace Cars
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            ICar seat = new Seat("Leon", "Grey");
            ICar tesla = new Tesla("Model 3", "Red", 2);

            Console.WriteLine(seat.ToString());
            Console.WriteLine(tesla.ToString());
        }
    }

    public interface IElectricCar
    {
        int Battery { get; }
    }

    public interface ICar
    {
        public string Model { get; set; }
        public string Color { get; set; }
        public string Start();
        public string Stop();
    }

    public class Seat : ICar
    {
        private string name = "Seat";

        public Seat(string model, string color)
        {
            this.Model = model;
            this.Color = color;
        }

        public string Model { get; set; }
        public string Color { get; set; }

        public string Start()
        {
            return "Engine start";
        }

        public string Stop()
        {
            return "Breaaak!";
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{this.Color} {this.name} {this.Model}");
            sb.AppendLine(this.Start());
            sb.Append(this.Stop());
            return sb.ToString();
        }
    }

    public class Tesla : ICar, IElectricCar
    {
        private string name = "Tesla";

        public Tesla(string model, string color, int battery)
        {
            this.Model = model;
            this.Color = color;
            this.Battery = battery;
        }

        public string Model { get; set; }
        public string Color { get; set; }
        public int Battery { get; set; }

        public string Start()
        {
            return "Engine start";
        }

        public string Stop()
        {
            return "Breaaak!";
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{this.Color} {this.name} {this.Model} with {this.Battery} Batteries");
            sb.AppendLine(this.Start());
            sb.Append(this.Stop());
            return sb.ToString();
        }
    }

}
