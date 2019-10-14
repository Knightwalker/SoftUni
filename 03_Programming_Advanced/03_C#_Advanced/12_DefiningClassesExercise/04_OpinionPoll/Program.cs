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

            var oldestMembersList = family.GetOldestMembersList();
            foreach (var member in oldestMembersList.OrderBy(x => x.Name))
            {
                Console.WriteLine($"{member.Name} - {member.Age}");
            }

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
        private List<Person> membersList;

        public Family()
        {
            this.membersList = new List<Person>();
        }

        public void AddMember(Person member)
        {
            this.membersList.Add(member);
        }

        public Person GetOldestMember()
        {
            var oldestMember = new Person();

            oldestMember = this.membersList
                  .OrderByDescending(p => p.Age)
                  .First();

            return oldestMember;
        }

        public List<Person> GetOldestMembersList()
        {
            var oldestMembersList = new List<Person>();

            foreach (var member in this.membersList)
            {
                if (member.Age > 30)
                {
                    oldestMembersList.Add(member);
                }
            }

            return oldestMembersList;

        }

    }
}