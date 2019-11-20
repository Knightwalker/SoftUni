using System;
using System.Text;

namespace Animals
{
    public class StartUp 
    {
        static void Main(string[] args)
        {
            Animal cat = new Cat("Pesho", "Whiskas");
            Animal dog = new Dog("Gosho", "Meat");

            Console.WriteLine(cat.ExplainSelf());
            Console.WriteLine(dog.ExplainSelf());

        }
    }

    public class Animal
    {
        protected Animal(string name, string favoriteFood)
        {
            this.Name = name;
            this.FavouriteFood = favoriteFood;
        }

        public string Name { get; private set; }
        public string FavouriteFood { get; private set; }

        public virtual string ExplainSelf()
        {
            return $"I am {this.Name} and my fovourite food is {this.FavouriteFood}";
        }
    }

    public class Cat : Animal
    {
        public Cat(string name, string favoriteFood) : base(name, favoriteFood)
        {

        }

        public override string ExplainSelf()
        {
            var builder = new StringBuilder();

            builder.AppendLine(base.ExplainSelf())
                .Append("MEEOW");

            return builder.ToString();
        }
    }

    public class Dog : Animal
    {
        public Dog(string name, string favoriteFood) : base(name, favoriteFood)
        {

        }

        public override string ExplainSelf()
        {
            var builder = new StringBuilder();

            builder.AppendLine(base.ExplainSelf())
                .Append("DJAAF");

            return builder.ToString();
        }
    }

}
