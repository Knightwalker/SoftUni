namespace _03_WildFarm
{
    using System;

    public abstract class Animal
    {
        public Animal(string name, double weight)
        {
            this.Name = name;
            this.Weight = weight;
            this.FoodEaten = 0;
        }

        public string Name { get; set; }
        public double Weight { get; set; }
        public int FoodEaten { get; set; }

        public abstract string ProduceSound();
        public abstract void EatFood(Food food);

    }

    public abstract class Bird : Animal
    {
        public Bird(string name, double weight, double wingSize) : base(name, weight)
        {
            this.WingSize = wingSize;
        }

        public double WingSize { get; set; }

        public override string ToString()
        {
            return $"{this.GetType().Name} [{this.Name}, {this.WingSize}, {this.Weight}, {this.FoodEaten}]";
        }

    }

    public class Owl : Bird
    {
        public Owl(string name, double weight, double wingSize) : base(name, weight, wingSize)
        {
        }

        public override string ProduceSound()
        {
            return $"Hoot Hoot";
        }

        public override void EatFood(Food food)
        {
 
            if (food.GetType().Name != "Meat")
            {
                throw new ArgumentException($"Owl does not eat {food.GetType().Name}!");
            }

            this.FoodEaten += food.Quantity;
            this.Weight += 0.25 * food.Quantity;
           
        }

    }

    public class Hen : Bird
    {
        public Hen(string name, double weight, double wingSize) : base(name, weight, wingSize)
        {
        }

        public override string ProduceSound()
        {
            return $"Cluck";
        }

        public override void EatFood(Food food)
        {
            this.FoodEaten += food.Quantity;
            this.Weight += 0.35 * food.Quantity;
        }

    }

    public abstract class Mammal : Animal
    {
        public Mammal(string name, double weight, string livingRegion) : base(name, weight)
        {
            this.LivingRegion = livingRegion;
        }

        public string LivingRegion { get; set; }
    }

    public class Mouse : Mammal
    {
        public Mouse(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
        }

        public override string ProduceSound()
        {
            return $"Squeak";
        }

        public override void EatFood(Food food)
        {

            if (food.GetType().Name != "Vegetable" && food.GetType().Name != "Fruit")
            {
                throw new ArgumentException($"Mouse does not eat {food.GetType().Name}!");
            }

            this.FoodEaten += food.Quantity;
            this.Weight += 0.10 * food.Quantity;

        }

        public override string ToString()
        {
            return $"{this.GetType().Name} [{this.Name}, {this.Weight}, {this.LivingRegion}, {this.FoodEaten}]";
        }

    }

    public class Dog : Mammal
    {
        public Dog(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
        }

        public override string ProduceSound()
        {
            return $"Woof!";
        }

        public override void EatFood(Food food)
        {

            if (food.GetType().Name != "Meat")
            {
                throw new ArgumentException($"Dog does not eat {food.GetType().Name}!");
            }

            this.FoodEaten += food.Quantity;
            this.Weight += 0.40 * food.Quantity;

        }

    }

    public abstract class Feline : Mammal
    {
        public Feline(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion)
        {
            this.Breed = breed;
        }

        public string Breed { get; set; }

        public override string ToString()
        {
            return $"{this.GetType().Name} [{this.Name}, {this.Breed}, {this.Weight}, {this.LivingRegion}, {this.FoodEaten}]";
        }

    }

    public class Cat : Feline
    {
        public Cat(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
        {
        }

        public override string ProduceSound()
        {
            return $"Meow";
        }

        public override void EatFood(Food food)
        {

            if (food.GetType().Name != "Meat" && food.GetType().Name != "Vegetable")
            {
                throw new ArgumentException($"Cat does not eat {food.GetType().Name}!");
            }

            this.FoodEaten += food.Quantity;
            this.Weight += 0.30 * food.Quantity;

        }

    }

    public class Tiger : Feline
    {
        public Tiger(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
        {
        }

        public override string ProduceSound()
        {
            return $"ROAR!!!";
        }

        public override void EatFood(Food food)
        {

            if (food.GetType().Name != "Meat")
            {
                throw new ArgumentException($"Tiger does not eat {food.GetType().Name}!");
            }

            this.FoodEaten += food.Quantity;
            this.Weight += 1.00 * food.Quantity;

        }

    }

}
