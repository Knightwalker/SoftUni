using System;
using System.Collections.Generic;
using System.Text;

namespace SpaceStationRecruitment
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            //Initialize the repository
            SpaceStation spaceStation = new SpaceStation("Apolo", 10);
            //Initialize entity
            Astronaut astronaut = new Astronaut("Stephen", 40, "Bulgaria");
            //Print Astronaut
            Console.WriteLine(astronaut); //Astronaut: Stephen, 40 (Bulgaria)

            //Add Astronaut
            spaceStation.Add(astronaut);
            //Remove Astronaut
            spaceStation.Remove("Astronaut name"); //false

            Astronaut secondAstronaut = new Astronaut("Mark", 34, "UK");

            //Add Astronaut
            spaceStation.Add(secondAstronaut);

            Astronaut oldestAstronaut = spaceStation.GetOldestAstronaut(); // Astronaut with name Stephen
            Astronaut astronautStephen = spaceStation.GetAstronaut("Stephen"); // Astronaut with name Stephen
            Console.WriteLine(oldestAstronaut); //Astronaut: Stephen, 40 (Bulgaria)
            Console.WriteLine(astronautStephen); //Astronaut: Stephen, 40 (Bulgaria)

            Console.WriteLine(spaceStation.Count); //2

            Console.WriteLine(spaceStation.Report());
            //Astronauts working at Space Station Apolo:
            //Astronaut: Stephen, 40 (Bulgaria)
            //Astronaut: Mark, 34 (UK)
        }
    }

    public class Astronaut
    {
        public Astronaut(string name, int age, string country)
        {
            this.Name = name;
            this.Age = age;
            this.Country = country;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Country { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Astronaut: {this.Name}, {this.Age} ({this.Country})");
            return sb.ToString().Trim();
        }
    }

    public class SpaceStation
    {
        List<Astronaut> data;

        public SpaceStation(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.data = new List<Astronaut>();
        }

        public string Name { get; set; }
        public int Capacity { get; set; }  
        public int Count { get
            {
                return this.data.Count;
            }
        }

        public void Add(Astronaut astronaut)
        {
            if (data.Count < this.Capacity)
            {
                data.Add(astronaut);
            }
        }

        public bool Remove(string name)
        {
            int index = data.FindIndex(x => x.Name == name);
            if (index != -1)
            {
                data.RemoveAt(index);
                return true;
            }
            return false;
        }

        public Astronaut GetOldestAstronaut()
        {
            Astronaut astronaut = new Astronaut("", 0, "");

            int oldestPerson = int.MinValue;
            foreach (var person in data)
            {
                if (person.Age > oldestPerson)
                {
                    oldestPerson = person.Age;
                    astronaut = person;
                }
            }

            return astronaut;
        }

        public Astronaut GetAstronaut(string name)
        {
            int index = data.FindIndex(x => x.Name == name);
            if (index >= 0)
            {
                return data[index];
            }

            return null;
        }

        public string Report()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Astronauts working at Space Station {this.Name}:");
            foreach (var person in data)
            {
                sb.AppendLine(person.ToString());
            }
            return sb.ToString().Trim();
        }

    }

}
