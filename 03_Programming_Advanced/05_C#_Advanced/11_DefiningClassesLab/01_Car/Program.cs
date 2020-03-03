using System;

namespace CarManufacturer
{
    public class Car
    {
        private string make = "";
        private string model = "";
        private int year = 0;

        public string Make
        {
            get { return this.make; }
            set { this.make = value; }
        }
        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }
        public int Year
        {
            get { return this.year; }
            set { this.year = value; }
        }

    }

    public class StartUp
    {
        public static void Main(string[] args)
        {
            var car = new Car();
            car.Make = "VW";
            car.Model = "MK3";
            car.Year = 1992;

            Console.WriteLine($"Make: {car.Model}\nModel: {car.Model}\nYear: {car.Year}");
        }
    }
}