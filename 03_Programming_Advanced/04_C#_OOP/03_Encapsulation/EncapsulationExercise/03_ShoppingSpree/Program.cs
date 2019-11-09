using System;
using System.Collections.Generic;
using System.Linq;

namespace _03_ShoppingSpree
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string[] input1 = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);
            string[] input2 = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);
            List<Person> persons = new List<Person>();
            List<Product> products = new List<Product>();

            foreach (var pair in input1)
            {
                var tokens = pair.Split('=');
                string name = tokens[0];
                decimal money = decimal.Parse(tokens[1]);

                try
                {
                    persons.Add(new Person(name, money));
                }
                catch (ArgumentException ex)
                {
                    Console.WriteLine(ex.Message);
                    return;
                }
            }

            foreach (var pair in input2)
            {
                var tokens = pair.Split('=');

                try
                {
                    products.Add(new Product(tokens[0], decimal.Parse(tokens[1])));
                }
                catch (ArgumentException ex)
                {
                    Console.WriteLine(ex.Message);
                    return;
                }
            }

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "END") { break; }

                var tokens = command.Split();
                string personName = tokens[0];
                string productName = tokens[1];

                var person = persons.Single(p => p.Name == personName);
                var product = products.Single(p => p.Name == productName);

                if (!person.BuyProduct(product))
                {
                    Console.WriteLine($"{person.Name} can't afford {product.Name}");
                }
                else
                {
                    Console.WriteLine($"{person.Name} bought {product.Name}");
                }
            }

            foreach (var person in persons)
            {
                string productsBought = person.Products.Count == 0 ? "Nothing bought" : String.Join(", ", person.Products.Select(p => p.Name));

                Console.WriteLine($"{person.Name} - {productsBought}");
            }
        }
    }

    public class Person
    {
        private string name;
        private decimal money;
        private List<Product> products;

        public Person(string name, decimal money)
        {
            this.Name = name;
            this.Money = money;
            this.products = new List<Product>();
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            private set
            {
                if (String.IsNullOrEmpty(value) || String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be empty");
                }

                this.name = value;
            }
        }

        private decimal Money
        {
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Money cannot be negative");
                }

                this.money = value;
            }
        }

        public IReadOnlyCollection<Product> Products
        {
            get
            {
                return this.products;
            }
        }

        public bool BuyProduct(Product product)
        {
            if (this.money >= product.Cost)
            {
                this.money -= product.Cost;
                this.products.Add(product);
                return true;
            }

            return false;
        }
    }

    public class Product
    {
        private string name;
        private decimal cost;

        public Product(string name, decimal cost)
        {
            this.Name = name;
            this.Cost = cost;
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            private set
            {
                if (String.IsNullOrEmpty(value) || String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be empty");
                }

                this.name = value;
            }
        }

        public decimal Cost
        {
            get
            {
                return this.cost;
            }

            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Money cannot be negative");
                }

                this.cost = value;
            }
        }
    }

}
