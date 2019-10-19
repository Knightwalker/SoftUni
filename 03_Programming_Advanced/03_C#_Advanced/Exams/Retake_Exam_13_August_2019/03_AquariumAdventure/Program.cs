using System;
using System.Collections.Generic;
using System.Text;

namespace AquariumAdventure
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            //Sample Code Usage:

            //Initialize Aquarium
            Aquarium aquarium = new Aquarium("Ocean", 5, 15);

            //Initialize Fish
            Fish fish = new Fish("Goldy", "gold", 4);

            //Print Fish
            Console.WriteLine(fish.ToString());

            //Fish: Goldy
            //Color: gold
            //Number of fins: 4

            //Add Fish
            aquarium.Add(fish);

            //Remove Fish
            Console.WriteLine(aquarium.Remove("Goldy")); // true

            Fish secondFish = new Fish("Dory", "blue", 2);
            Fish thirdFish = new Fish("Nemo", "orange", 5);

            //Add fish
            aquarium.Add(secondFish);
            aquarium.Add(thirdFish);

            //Print Aquarium report
            Console.WriteLine(aquarium.Report());

            //Aquarium Info:
            //Aquarium: Ocean ^ Size: 15
            //Fish: Dory
            //Color: blue
            //Number of fins: 2
            //Fish: Nemo
            //Color: orange
            //Number of fins: 5

        }
    }

    public class Fish
    {
        public Fish(string name, string color, int fins)
        {
            this.Name = name;
            this.Color = color;
            this.Fins = fins;
        }

        public string Name { get; set; }
        public string Color { get; set; }
        public int Fins { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Fish: { this.Name}");
            sb.AppendLine($"Color: { this.Color}");
            sb.AppendLine($"Number of fins: { this.Fins}");
            return sb.ToString().Trim();
        }
    }

    public class Aquarium
    {
        List<Fish> fishInPool = new List<Fish>();

        public Aquarium(string name, int capacity, int size)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.Size = size;
        }

        public string Name { get; set; }
        public int Capacity { get; set; }
        public int Size { get; set; }

        public void Add(Fish fish)
        {
            int index = this.fishInPool.FindIndex(x => x.Name == fish.Name);
            if (index == -1 && this.fishInPool.Count < Capacity)
            {
                this.fishInPool.Add(fish);
            }
        }

        public bool Remove(string name)
        {
            int index = this.fishInPool.FindIndex(x => x.Name == name);
            if (index >= 0)
            {
                this.fishInPool.RemoveAt(index);
                return true;
            }
            return false;   
        }

        public Fish FindFish(string name)
        {
            int index = this.fishInPool.FindIndex(x => x.Name == name);
            if (index >= 0)
            {
                return this.fishInPool[index];
            }
            return null;
        }

        public string Report()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Aquarium: {this.Name} ^ Size: {this.Size}");
            for (int i = 0; i < this.fishInPool.Count; i++)
            {
                sb.AppendLine($"{this.fishInPool[i].ToString()}");
            }

            return sb.ToString().Trim();
        }


    }

}