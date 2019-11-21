using System;
using System.Collections.Generic;

namespace _03_WildFarm
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<Animal> animalList = new List<Animal>();

            while (true)
            {
                Animal animal;
                Food food;

                string input1 = Console.ReadLine();
                if (input1 == "End") { break; }
                string input2 = Console.ReadLine();

                string[] inputArr1 = input1.Split(" ");
                string type = inputArr1[0];
                string name = inputArr1[1];
                double weight = double.Parse(inputArr1[2]);
                if (type == "Owl")
                {
                    double wingSize = double.Parse(inputArr1[3]);
                    animal = new Owl(name, weight, wingSize);
                }
                else if (type == "Hen")
                {
                    double wingSize = double.Parse(inputArr1[3]);
                    animal = new Hen(name, weight, wingSize);
                }
                else if (type == "Mouse")
                {
                    string livingRegion = inputArr1[3];
                    animal = new Mouse(name, weight, livingRegion);
                }
                else if (type == "Dog")
                {
                    string livingRegion = inputArr1[3];
                    animal = new Dog(name, weight, livingRegion);
                }
                else if (type == "Cat")
                {
                    string livingRegion = inputArr1[3];
                    string breed = inputArr1[4];
                    animal = new Cat(name, weight, livingRegion, breed);
                }
                else if (type == "Tiger")
                {
                    string livingRegion = inputArr1[3];
                    string breed = inputArr1[4];
                    animal = new Tiger(name, weight, livingRegion, breed);
                }
                else
                {
                    continue;
                }

                Console.WriteLine(animal.ProduceSound());
                animalList.Add(animal);

                string[] inputArr2 = input2.Split(" ");
                string foodType = inputArr2[0];
                int quantity = int.Parse(inputArr2[1]);
                if (foodType == "Vegetable")
                {
                    food = new Vegetable(quantity);
                }
                else if (foodType == "Fruit")
                {
                    food = new Fruit(quantity);
                }
                else if (foodType == "Meat")
                {
                    food = new Meat(quantity);
                }
                else if (foodType == "Seeds")
                {
                    food = new Seeds(quantity);
                }
                else
                {
                    continue;
                }

                try
                {
                    animal.EatFood(food);
                }
                catch (ArgumentException ex)
                {
                    Console.WriteLine(ex.Message);
                }

            } // END While...loop

            foreach (var animal in animalList)
            {
                Console.WriteLine(animal);
            }
        
        }
    }

}
