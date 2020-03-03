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
                int index = trainersList.FindIndex(t => t.Name == trainerName);

                if (index == -1)
                {
                    Trainer trainer = new Trainer(trainerName);
                    trainersList.Add(trainer);
                    trainersList[trainersList.Count - 1].Add(pokemon);
                }

                else
                {
                    trainersList[index].Add(pokemon);
                }

            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                foreach (var trainer in trainersList)
                {
                    bool checkPokemonsForStat = false;
                    foreach (var pokemon in trainer.PokemonsList)
                    {
                        if (pokemon.Element == input)
                        {
                            checkPokemonsForStat = true;
                            break;
                        }
                    }

                    if (checkPokemonsForStat)
                    {
                        trainer.Badges += 1;
                    }
                    else
                    {
                        for (int i = 0; i < trainer.PokemonsList.Count; i++)
                        {
                            Pokemon currentPokemon = trainer.PokemonsList[i];
                            currentPokemon.Health -= 10;
                            if (currentPokemon.Health <= 0)
                            {
                                trainer.PokemonsList.RemoveAt(i);
                                i--;
                            }
                        } 
                    }
                } // END Foreach-Loop

            } // END While-Loop

            // Print Result
            foreach (var trainer in trainersList.OrderByDescending(t => t.Badges))
            {
                Console.WriteLine($"{trainer.Name} {trainer.Badges} {trainer.PokemonsList.Count}");
            }

        } // END Main-Method

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

        public void Add(Pokemon pokemon)
        {
            this.pokemonsList.Add(pokemon);
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
