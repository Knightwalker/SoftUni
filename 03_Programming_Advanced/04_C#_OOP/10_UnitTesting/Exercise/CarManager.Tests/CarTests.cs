using CarManager;
using System;
using NUnit.Framework;

namespace Tests
{
    public class CarTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TestConstructor()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;

            Car car = new Car(make, model, fuelConsumption, fuelCapacity);
            Assert.AreEqual(make, car.Make);
            Assert.AreEqual(model, car.Model);
            Assert.AreEqual(fuelConsumption, car.FuelConsumption);
            Assert.AreEqual(fuelCapacity, car.FuelCapacity);
        }

        // [Test]
        // public void testPropMake()
        // {
        //     string make = "";
        //     string model = "Golf";
        //     double fuelConsumption = 2;
        //     double fuelCapacity = 100;
        // 
        //     Assert.Throws<ArgumentException>(() =>
        //     {
        //         Car car = new Car(make, model, fuelConsumption, fuelCapacity);
        //     });
        // }
        // 
        // [Test]
        // public void testPropModel()
        // {
        //     string make = "VW";
        //     string model = "";
        //     double fuelConsumption = 2;
        //     double fuelCapacity = 100;
        // 
        //     Assert.Throws<ArgumentException>(() =>
        //     {
        //         Car car = new Car(make, model, fuelConsumption, fuelCapacity);
        //     });
        // }
        // 
        // [Test]
        // public void testPropFuelConsumption()
        // {
        //     string make = "VW";
        //     string model = "Golf";
        //     double fuelConsumption = 0;
        //     double fuelCapacity = 100;
        // 
        //     Assert.Throws<ArgumentException>(() =>
        //     {
        //         Car car = new Car(make, model, fuelConsumption, fuelCapacity);
        //     });
        // }
        // 
        // [Test]
        // public void testPropFuelConsumption2()
        // {
        //     string make = "VW";
        //     string model = "Golf";
        //     double fuelConsumption = -100;
        //     double fuelCapacity = 100;
        // 
        //     Assert.Throws<ArgumentException>(() =>
        //     {
        //         Car car = new Car(make, model, fuelConsumption, fuelCapacity);
        //     });
        // }
        // 
        // [Test]
        // public void testPropFuelCapacity()
        // {
        //     string make = "VW";
        //     string model = "Golf";
        //     double fuelConsumption = 2;
        //     double fuelCapacity = 0;
        // 
        //     Assert.Throws<ArgumentException>(() =>
        //     {
        //         Car car = new Car(make, model, fuelConsumption, fuelCapacity);
        //     });
        // }
        // 
        // [Test]
        // public void testPropFuelCapacity2()
        // {
        //     string make = "VW";
        //     string model = "Golf";
        //     double fuelConsumption = 2;
        //     double fuelCapacity = -100;
        // 
        //     Assert.Throws<ArgumentException>(() =>
        //     {
        //         Car car = new Car(make, model, fuelConsumption, fuelCapacity);
        //     });
        // }

        [Test]
        [TestCase("", "Golf", 2, 100)]
        [TestCase("VW", "", 2, 100)]
        [TestCase("VW", "Golf", 0, 100)]
        [TestCase("VW", "Golf", -100, 100)]
        [TestCase("VW", "Golf", 2, 0)]
        [TestCase("VW", "Golf", 2, -100)]
        public void testAllPropertiesWithInvalidData(string make, string model, double fuelConsumption, double fuelCapacity)
        {
            Assert.Throws<ArgumentException>(() =>
            {
                Car car = new Car(make, model, fuelConsumption, fuelCapacity);
            });
        }

        [Test]
        public void testMethodRefuel()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;
            Car car = new Car(make, model, fuelConsumption, fuelCapacity);

            Assert.Throws<ArgumentException>(() =>
            {
                car.Refuel(-20);
            }); 
        }

        [Test]
        public void testMethodRefuel2()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;
            Car car = new Car(make, model, fuelConsumption, fuelCapacity);

            Assert.Throws<ArgumentException>(() =>
            {
                car.Refuel(0);
            });
        }

        [Test]
        public void testMethodRefuel3()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;
            Car car = new Car(make, model, fuelConsumption, fuelCapacity);
            car.Refuel(10);

            int expected = 10;
            double actual = car.FuelAmount;
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void testMethodRefuel4()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;
            Car car = new Car(make, model, fuelConsumption, fuelCapacity);
            car.Refuel(200);

            double expected = 100.0;
            double actual = car.FuelAmount;
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void testMethodDrive()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;
            Car car = new Car(make, model, fuelConsumption, fuelCapacity);
            
            car.Refuel(10);
            Assert.Throws<InvalidOperationException>(() =>
            {
                car.Drive(1000);
            });

            //var ex = Assert.Throws<InvalidOperationException>(() => db.Add(person1));
            //Assert.That(ex.Message, Is.EqualTo("Array's capacity must be exactly 16 integers!"));

        }

        [Test]
        public void testMethodDrive2()
        {
            string make = "VW";
            string model = "Golf";
            double fuelConsumption = 2;
            double fuelCapacity = 100;
            Car car = new Car(make, model, fuelConsumption, fuelCapacity);

            car.Refuel(10);
            car.Drive(100);

            double expected = 8.0;
            double actual = car.FuelAmount;
            Assert.AreEqual(expected, actual);
        }

    }
}