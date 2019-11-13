using System;
using System.Collections.Generic;

namespace _05_BorderControl
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
                if (inputArr.Length == 2)
                {
                    string model = inputArr[0];
                    string id = inputArr[1];
                    Robot robot = new Robot(model, id);
                    borderControlList.Add(robot);

                }
                else if (inputArr.Length == 3)
                {
                    string name = inputArr[0];
                    int age = int.Parse(inputArr[1]);
                    string id = inputArr[2];
                    Person person = new Person(name, age, id);
                    borderControlList.Add(person);
                }

            }

            string fakeID = Console.ReadLine();

            foreach (var citizen in borderControlList)
            {
                if (citizen.ID.EndsWith(fakeID))
                {
                    Console.WriteLine(citizen.ID);
                }
            }


        }
    }


    public class Citizen
    {
        public Citizen(string id)
        {
            this.ID = id;
        }

        public string ID { get; set; }

    }

    public class Robot : Citizen
    {
        public Robot(string model, string id) : base(id)
        {
            this.Model = model;
        }

        public string Model { get; set; }
    }

    public class Person : Citizen
    {
        public Person(string name, int age, string id) : base(id)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
    }

}
