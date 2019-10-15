using System;
using System.Collections.Generic;
using System.Text;

namespace SoftUniParking
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var car = new Car("Skoda", "Fabia", 65, "CC1856BG");
            var car2 = new Car("Audi", "A3", 110, "EB8787MN");

            Console.WriteLine(car.ToString());
            //Make: Skoda
            //Model: Fabia
            //HorsePower: 65
            //RegistrationNumber: CC1856BG

            var parking = new Parking(5);
            Console.WriteLine(parking.AddCar(car));
            //Successfully added new car Skoda CC1856BG

            Console.WriteLine(parking.AddCar(car));
            //Car with that registration number, already exists!

            Console.WriteLine(parking.AddCar(car2));
            //Successfully added new car Audi EB8787MN

            Console.WriteLine(parking.GetCar("EB8787MN").ToString());
            //Make: Audi
            //Model: A3
            //HorsePower: 110
            //RegistrationNumber: EB8787MN

            Console.WriteLine(parking.RemoveCar("EB8787MN"));
            //Successfullyremoved EB8787MN

            Console.WriteLine(parking.Count);
            //1

        }
    }

    public class Car
    {
        public Car(string make, string model, int horsePower, string registrationNumber)
        {
            this.Make = make;
            this.Model = model;
            this.HorsePower = horsePower;
            this.RegistrationNumber = registrationNumber;
        }

        public string Make { get; set; }
        public string Model { get; set; }
        public int HorsePower { get; set; }
        public string RegistrationNumber { get; set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Make: {this.Make}");
            sb.AppendLine($"Model: {this.Model}");
            sb.AppendLine($"HorsePower: {this.HorsePower}");
            sb.AppendLine($"RegistrationNumber: {this.RegistrationNumber}");
            return sb.ToString().Trim();
        }

    }

    public class Parking
    {
        private List<Car> carsList;
        private int capacity;

        public Parking(int capacity)
        {
            this.carsList = new List<Car>();
            this.capacity = capacity;
        }

        public int Count => this.carsList.Count();

        public string AddCar(Car car)
        {
            //check if car with the same registration number exists
            int index = carsList.FindIndex(t => t.RegistrationNumber == car.RegistrationNumber);
            if (index >= 0)
            {
                return "Car with that registration number, already exists!";
            }

            //check if the parking is full
            if (carsList.Count >= capacity)
            {
                return "Parking is full!";
            }

            //finally add the car
            this.carsList.Add(car);
            return $"Successfully added new car {car.Make} {car.RegistrationNumber}";
        }

        public Car GetCar(string registrationNumber)
        {
            //check if car with the same registration number exists
            int index = carsList.FindIndex(t => t.RegistrationNumber == registrationNumber);
            if (index == -1)
            {
                return null;
            }
            else
            {
                return carsList[index];
            }
        }

        public string RemoveCar(string registrationNumber)
        {
            //check if car with the same registration number exists
            int index = carsList.FindIndex(t => t.RegistrationNumber == registrationNumber);
            if (index == -1)
            {
                return "Car with that registration number, doesn't exist!";
            }
            else
            {
                carsList.RemoveAt(index);
                return $"Successfully removed {registrationNumber}";
            }
        }

        public void RemoveSetOfRegistrationNumber(List<string> registrationNumbers)
        {
            foreach (var currentNumber in registrationNumbers)
            {
                this.carsList.RemoveAll(x => x.RegistrationNumber == currentNumber);
            }
        }

        //public string RemoveSetOfRegistrationNumber(List<string> registrationNumbers)
        //{
        //    string removedCars = "";
        //    int index = 0;
        //    foreach (var car in carsList)
        //    {
        //        foreach (var registrationNumber in registrationNumbers)
        //        {
        //            if (car.RegistrationNumber == registrationNumber)
        //            {
        //                carsList.RemoveAt(index);
        //                this.Count -= 1;
        //                removedCars += $"Successfully removed {car.RegistrationNumber}\n";
        //                continue;
        //            }
        //        }
        //        index++;
        //    }
        //
        //    return removedCars;
        //
        //}

    }

}
