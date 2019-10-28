using System;
using System.Collections.Generic;

namespace _06_EqualityLogic
{
    public class Startup
    {
        public static void Main()
        {
            var hashSet = new HashSet<Person>();
            var sortedSet = new SortedSet<Person>();

            var counter = int.Parse(Console.ReadLine());
            for (int i = 0; i < counter; i++)
            {
                var personArgs = Console.ReadLine().Split();
                var person = new Person(personArgs[0], int.Parse(personArgs[1]));

                hashSet.Add(person);
                sortedSet.Add(person);
            }

            Console.WriteLine(hashSet.Count);
            Console.WriteLine(sortedSet.Count);
        }
    }


    public class Person : IEqualityComparer<Person>, IComparable<Person>
    {
        public string Name { get; protected set; }
        public int Age { get; protected set; }

        public Person(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        public override bool Equals(object obj)
        {
            var objAsPerson = obj as Person;
            return this.Name == objAsPerson.Name && this.Age == objAsPerson.Age;
        }

        public override int GetHashCode()
        {
            return this.Name.GetHashCode() + this.Age.GetHashCode();
        }

        public int CompareTo(Person other)
        {
            var result = this.Name.CompareTo(other.Name);
            if (result == 0)
            {
                result = this.Age.CompareTo(other.Age);
            }

            return result;
        }

        public bool Equals(Person x, Person y)
        {
            return base.Equals(y);
        }

        public int GetHashCode(Person obj)
        {
            return base.GetHashCode();
        }
    }

}
