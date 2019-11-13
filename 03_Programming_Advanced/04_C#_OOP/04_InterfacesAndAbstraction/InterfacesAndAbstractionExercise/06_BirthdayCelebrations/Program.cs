using System;
using System.Collections.Generic;

namespace _06_BirthdayCelebrations
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<Citizen> borderControlList = new HashSet<Citizen>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                string[] inputArr = input.Split(" ");
                if (inputArr[0] == "Pet")
                {
                    string name = inputArr[1];
                    string birthdate = inputArr[2];
                    Pet pet = new Pet(name, "n/a", birthdate);
                    borderControlList.Add(pet);
                }
                else if (inputArr[0] == "Robot")
                {
                    string model = inputArr[1];
                    string id = inputArr[2];
                    Robot robot = new Robot(model, id, "n/a");
                    borderControlList.Add(robot);
                }
                else if (inputArr[0] == "Citizen")
                {
                    string name = inputArr[1];
                    int age = int.Parse(inputArr[2]);
                    string id = inputArr[3];
                    string birthdate = inputArr[4];
                    Person person = new Person(name, age, id, birthdate);
                    borderControlList.Add(person);
                }

            }

            string year = Console.ReadLine();

            foreach (var citizen in borderControlList)
            {
                if (citizen.Birthdate.EndsWith(year))
                {
                    Console.WriteLine(citizen.Birthdate);
                }
            }
        }
    }

    public class Citizen
    {
        public Citizen(string id, string birthdate)
        {
            this.ID = id;
            this.Birthdate = birthdate;
        }

        public string ID { get; set; }
        public string Birthdate { get; set; }

    }

    public class Robot : Citizen
    {
        public Robot(string model, string id, string birthdate) : base(id, birthdate)
        {
            this.Model = model;
        }

        public string Model { get; set; }
    }

    public class Person : Citizen
    {
        public Person(string name, int age, string id, string birthdate) : base(id, birthdate)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
    }

    public class Pet : Citizen
    {
        public Pet(string name, string id, string birthdate) : base(id, birthdate)
        {
            this.Name = name;
        }

        public string Name { get; set; }
    }

}