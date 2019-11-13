using System;

namespace _10_ExplicitInterfaces
{
    class Program
    {
        static void Main(string[] args)
        {
            while(true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                string[] inputArr = input.Split(" ");
                string name = inputArr[0];
                string country = inputArr[1];
                int age = int.Parse(inputArr[2]);

                Citizen citizen = new Citizen(name, country, age);
                Console.WriteLine(((IPerson)citizen).GetName());
                Console.WriteLine(((IResident)citizen).GetName());

            }
        }
    }

    public interface IResident
    {
        public string Name { get; set; }
        public string Country { get; set; }
        public string GetName();
    }

    public interface IPerson
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string GetName();
    }

    public class Citizen : IResident, IPerson
    {
        public Citizen(string name, string country, int age)
        {
            this.Name = name;
            this.Country = country;
            this.Age = age;
        }

        public string Name { get; set; }
        public string Country { get; set; }
        public int Age { get; set; }

        string IPerson.GetName()
        {
            return this.Name;
        }

        string IResident.GetName()
        {
            return $"Mr/Ms/Mrs {this.Name}";
        }

    }

}
