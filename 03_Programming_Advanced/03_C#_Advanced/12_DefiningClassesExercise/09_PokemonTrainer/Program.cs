using System;
using System.Linq;
using System.Collections.Generic;

namespace _09_PokemonTrainer
{
    class Program
    {
        static void Main(string[] args)
        {

            List<Trainer> trainersList = new List<Trainer>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Tournament") { break; }

                string[] inputArr = input.Split(" ");
                string trainerName = inputArr[0];
                string pokemonName = inputArr[1];
                string pokemonElement = inputArr[2];
                int pokemonHealth = int.Parse(inputArr[3]);

                Pokemon pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
                Trainer trainer = new Trainer(trainerName);


            }
        }
    }

    public class Trainer
    {
        private string name;
        private int badges;
        List<Pokemon> pokemonsList;

        public Trainer(string name)
        {
            this.Name = name;
            this.Badges = 0;
            this.pokemonsList = new List<Pokemon>();
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }
        public int Badges
        {
            get { return this.badges; }
            set { this.badges = value; }
        }
        public List<Pokemon> PokemonsList
        {
            get { return this.pokemonsList; }
            set { this.pokemonsList = value; }
        }


    }

    public class Pokemon
    {
        private string name;
        private string element;
        private int health;

        public Pokemon(string name, string element, int health)
        {
            this.Name = name;
            this.Element = element;
            this.Health = health;
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }
        public string Element
        {
            get { return this.element; }
            set { this.element = value; }
        }
        public int Health
        {
            get { return this.health; }
            set { this.health = value; }
        }

    }

}
