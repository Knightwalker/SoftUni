using System;
using System.Collections.Generic;

namespace PersonsInfo
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var lines = int.Parse(Console.ReadLine());
            var persons = new List<Person>();
            for (int i = 0; i < lines; i++)
            {
                var cmdArgs = Console.ReadLine().Split();
                var person = new Person(cmdArgs[0],
                                        cmdArgs[1],
                                        int.Parse(cmdArgs[2]),
                                        decimal.Parse(cmdArgs[3]));

                persons.Add(person);
            }
            var parcentage = decimal.Parse(Console.ReadLine());
            persons.ForEach(p => p.IncreaseSalary(parcentage));
            persons.ForEach(p => Console.WriteLine(p.ToString()));

        }
    }

    public class Person
    {
        private string firstName;
        private string lastName;
        private int age;
        private decimal salary;

        public Person(string firstName, string lastName, int age, decimal salary)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.salary = salary;
        }

        public int Age
        {
            get
            {
                return this.age;
            }
        }

        public override string ToString()
        {
            return $"{this.firstName} {this.lastName} receives {this.salary:F2} leva.";
        }

        public void IncreaseSalary(decimal bonus)
        {
            if (this.age >= 30)
            {
                this.salary += this.salary * bonus / 100;
            }
            else
            {
                this.salary += this.salary * bonus / 200;
            }
        }
    }

}
