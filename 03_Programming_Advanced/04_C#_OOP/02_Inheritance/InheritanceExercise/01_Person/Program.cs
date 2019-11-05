using System;
using System.Text;

namespace Person
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());

            Child child = new Child(name, age);
            Console.WriteLine(child);
        }
    }

    public class Person
    {
        private int age;
        
        public Person(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name { get; set; }

        public int Age
        {
            get
            {
                return this.age;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Invalid age!");
                }
                this.age = value;
            }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {this.Name}, Age: {this.Age}");
            return sb.ToString();
        }

    }

    public class Child : Person
    {
        public Child(string name, int age) : base(name, age)
        {
                
        }
    }
}