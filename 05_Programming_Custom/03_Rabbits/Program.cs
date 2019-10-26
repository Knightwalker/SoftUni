namespace Rabbits
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Linq;

    class StartUp
    {
        static void Main()
        {
            //Initialize the repository (Cage)
            Cage cage = new Cage("Wildness", 20);
            //Initialize entity
            Rabbit rabbit = new Rabbit("Fluffy", "Blanc de Hotot");
            //Print Rabbit
            Console.WriteLine(rabbit); //Rabbit (Blanc de Hotot): Fluffy

            //Add Rabbit
            cage.Add(rabbit);
            Console.WriteLine(cage.Count); //1
                                           //Remove Rabbit
            cage.RemoveRabbit("Rabbit Name"); //false

            Rabbit secondRabbit = new Rabbit("Bunny", "Brazilian");
            Rabbit thirdRabbit = new Rabbit("Jumpy", "Cashmere Lop");
            Rabbit fourthRabbit = new Rabbit("Puffy", "Cashmere Lop");
            Rabbit fifthRabbit = new Rabbit("Marlin", "Brazilian");

            //Add Rabbits
            cage.Add(secondRabbit);
            cage.Add(thirdRabbit);
            cage.Add(fourthRabbit);
            cage.Add(fifthRabbit);

            //Sell Rabbit by name
            Console.WriteLine(cage.SellRabbit("Bunny")); //Rabbit (Brazilian): Bunny
                                                         //Sell Rabbit by species
            Rabbit[] soldSpecies = cage.SellRabbitsBySpecies("Cashmere Lop");
            Console.WriteLine(string.Join(", ", soldSpecies.Select(f => f.Name))); //Jumpy, Puffy

            Console.WriteLine(cage.Report());
            //Rabbits available at Wildness:
            //Rabbit (Blanc de Hotot): Fluffy
            //Rabbit (Brazilian): Marlin

        }
    }

    public class Rabbit
    {
        public Rabbit(string name, string species)
        {
            this.Name = name;
            this.Species = species;
        }

        public string Name { get; set; }
        public string Species { get; set; }
        public bool Available { get; set; } = true;

        public override string ToString()
        {
            return $"Rabbit ({this.Species}): {this.Name}";
        }

    }

    public class Cage
    {
        public List<Rabbit> data;

        public Cage(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.data = new List<Rabbit>();
        }

        public string Name { get; set; }
        public int Capacity { get; set; }
        
        public int Count { get
            {
                return this.data.Count;        
            }
        }

        public void Add(Rabbit rabbit)
        {
            if (this.data.Count < this.Capacity)
            {
                this.data.Add(rabbit);
            }
        }

        public bool RemoveRabbit(string name)
        {
            int index = this.data.FindIndex(x => x.Name == name);
            if (index >= 0)
            {
                this.data.RemoveAt(index);
                return true;
            }
            return false;
        }

        public void RemoveSpecies(string species)
        {
            this.data.RemoveAll(x => x.Species == species);
        }

        public Rabbit SellRabbit(string name)
        {
            int index = this.data.FindIndex(x => x.Name == name);
            if (index >= 0)
            {
                this.data[index].Available = false;
                return this.data[index];
            }
            return null;
        }

        public Rabbit[] SellRabbitsBySpecies(string species)
        {
            int n = 0;
            for (int i = 0; i < this.data.Count; i++)
            {
                if (this.data[i].Species == species)
                {
                    n++;
                }
            }

            Rabbit[] temp = new Rabbit[n];
            int index = 0;
            for (int i = 0; i < this.data.Count; i++)
            {
                if (this.data[i].Species == species)
                {
                    temp[index++] = this.data[i];
                }
            }

            this.RemoveSpecies(species);

            if (temp.Length > 0)
            {
                return temp;
            }
            else
            {
                return null;
            }
        }

        public StringBuilder Report()
        {
            StringBuilder resultStr = new StringBuilder();
            resultStr.AppendLine($"Rabbits available at {this.Name}:");
            foreach (var rabbit in data)
            {
                if (rabbit.Available == true)
                {
                    resultStr.AppendLine(rabbit.ToString());
                }
            }

            return resultStr;
        }

    }

}