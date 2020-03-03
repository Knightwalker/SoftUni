using System;

namespace Zoo
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var snake = new Snake("gosho");
            Console.WriteLine(snake);
        }
    }

    public class Animal
    {
        public Animal(string name)
        {
            this.Name = name;
        }

        public string Name { get; set; }

        public override string ToString()
        {
            return this.Name;
        }
    }

    public class Reptile : Animal
    {
        public Reptile(string name) : base(name)
        {

        }
    }

    public class Mammal : Animal
    {
        public Mammal(string name) : base(name)
        {

        }
    }

    public class Lizard : Reptile
    {
        public Lizard(string name) : base(name)
        {

        }
    }

    public class Snake : Reptile
    {
        public Snake(string name) : base(name)
        {

        }
    }

    public class Gorilla : Mammal
    {
        public Gorilla(string name) : base(name)
        {

        }
    }

    public class Bear : Mammal
    {
        public Bear(string name) : base(name)
        {

        }
    }

}