using System;
using System.Linq;
using System.Collections.Generic;

namespace DefiningClasses
{
    public class StartUp
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());
            var family = new Family();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ");
                string name = input[0]; 
                int age = int.Parse(input[1]);

                var person = new Person(name, age);
                family.AddMember(person);
            }

            var oldestPerson = family.GetOldestMember();
            Console.WriteLine($"{oldestPerson.Name} {oldestPerson.Age}");

        }
    }

    public class Person
    {
        private string name;
        private int age;

        public Person()
        {
            this.Name = "No name";
            this.Age = 1;
        }

        public Person(int age) : this()
        {
            this.Age = age;
        }

        public Person(string name, int age) : this(age)
        {
            this.Name = name;
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }
        public int Age
        {
            get { return this.age; }
            set { this.age = value; }
        }

    }

    public class Family
    {
        private List<Person> peopleList;

        public Family()
        {
            this.peopleList = new List<Person>();
        }

        public void AddMember(Person member)
        {
            this.peopleList.Add(member);
        }

        public Person GetOldestMember()
        {
            var oldestPerson = new Person();

            oldestPerson = this.peopleList
                  .OrderByDescending(p => p.Age)
                  .First();

            return oldestPerson;
        }

    }
}