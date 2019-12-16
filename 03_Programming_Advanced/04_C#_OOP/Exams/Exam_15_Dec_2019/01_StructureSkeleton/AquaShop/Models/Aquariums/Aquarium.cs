using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using AquaShop.Models.Aquariums.Contracts;
using AquaShop.Models.Decorations.Contracts;
using AquaShop.Models.Fish.Contracts;

namespace AquaShop.Models.Aquariums
{
    public abstract class Aquarium : IAquarium
    {
        private string name;
        private List<IDecoration> decorations;
        private List<IFish> fishes;

        public Aquarium(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.decorations = new List<IDecoration>();
            this.fishes = new List<IFish>();
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Aquarium name cannot be null or empty.");
                }
                this.name = value;
            }
        }

        public int Capacity
        {
            get;
            private set;
        }

        public ICollection<IDecoration> Decorations => this.decorations.AsReadOnly();
        public ICollection<IFish> Fish => this.fishes.AsReadOnly();
        public int Comfort => this.Decorations.Sum(s => s.Comfort);

        public void AddFish(IFish fish)
        {
            if (this.Capacity > this.fishes.Count)
            {
                this.fishes.Add(fish);
            }
            else
            {
                throw new InvalidOperationException("Not enough capacity.");
            }
        }

        public bool RemoveFish(IFish fish)
        {
            int index = this.fishes.FindIndex(f => f.Name == fish.Name);
            if (index >= 0)
            {
                this.fishes.RemoveAt(index);
                return true;
            }
            return false;
        }

        public void AddDecoration(IDecoration decoration)
        {
            this.decorations.Add(decoration);
        }

        public void Feed()
        {
            foreach (var fish in fishes)
            {
                fish.Eat();
            }
        }

        public string GetInfo()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{this.Name} ({this.GetType().Name}):");
            sb.AppendLine($"Fish: {(fishes.Count == 0 ? "none" : string.Join(", ", fishes.Select(x => x.Name)))}");
            sb.AppendLine($"Decorations: {this.Decorations.Count}");
            sb.AppendLine($"Comfort: {this.Comfort}");

            return sb.ToString().Trim();
        }

    }
}
