using System;
using System.Collections.Generic;
using System.Linq;

namespace _07_FoodShortage
{
    class Program
    {
        static void Main(string[] args)
        {
            List<IBuyer> dystopianSociety = new List<IBuyer>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] inputArr = Console.ReadLine().Split(" ");
                if (inputArr.Length == 4)
                {
                    string name = inputArr[0];
                    int age = int.Parse(inputArr[1]);
                    string id = inputArr[2];
                    string birthdate = inputArr[3];
                    Citizen citizen = new Citizen(name, age, id, birthdate);
                    dystopianSociety.Add(citizen);
                }
                else if (inputArr.Length == 3)
                {
                    string name = inputArr[0];
                    int age = int.Parse(inputArr[1]);
                    string group = inputArr[2];
                    Rebel rebel = new Rebel(name, age, group);
                    dystopianSociety.Add(rebel);
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                int index = dystopianSociety.FindIndex(x => x.Name == input);
                if (index >= 0)
                {
                    dystopianSociety[index].BuyFood();
                } 

            }

            Console.WriteLine(dystopianSociety.Sum(b => b.Food));

        }
    }

    public interface IBuyer
    {
        public string Name { get; set; }
        public int Food { get; set; }
        public void BuyFood();
    }

    public class Citizen : IBuyer
    {
        public Citizen(string name, int age, string id, string birthdate)
        {
            this.Name = name;
            this.Age = age;
            this.ID = id;
            this.Birthdate = birthdate;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string ID { get; set; }
        public string Birthdate { get; set; }

        public int Food { get; set; } = 0;

        public void BuyFood()
        {
            this.Food += 10;
        }

    }

    public class Rebel : IBuyer
    {
        public Rebel(string name, int age, string group)
        {
            this.Name = name;
            this.Age = age;
            this.Group = group;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Group { get; set; }

        public int Food { get; set; } = 0;

        public void BuyFood()
        {
            this.Food += 5;
        }

    }

}
