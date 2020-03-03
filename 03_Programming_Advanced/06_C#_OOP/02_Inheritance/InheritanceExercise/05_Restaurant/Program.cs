using System;

namespace Restaurant
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var beer = new Beverage("kur", 1, 2);

        }
    }

    public class Product
    {
        public Product(string name, decimal price)
        {
            this.Name = name;
            this.Price = price;
        }

        public string Name { get; set; }
        public decimal Price { get; set; }
    }





    public class Beverage : Product
    {
        public Beverage(string name, decimal price, double milliliters) : base(name, price)
        {
            this.Mililiters = milliliters;
        }

        public double Mililiters { get; set; }
    }

    public class HotBeverage : Beverage
    {
        public HotBeverage(string name, decimal price, double milliliters) : base(name, price, milliliters)
        {

        }
    }

    public class ColdBeverage : Beverage
    {
        public ColdBeverage(string name, decimal price, double milliliters) : base(name, price, milliliters)
        {

        }
    }

    public class Coffee : HotBeverage
    {
        private const double CoffeeMilliliters = 50;
        private const decimal CoffeePrice = 3.50m;

        public Coffee(string name, double caffeine) : base(name, CoffeePrice, CoffeeMilliliters)
        {
            this.Caffeine = caffeine;
        }

        public double Caffeine { get; set; }
    }

    public class Tea : HotBeverage
    {
        public Tea(string name, decimal price, double milliliters) : base(name, price, milliliters)
        {

        }

    }





    public class Food : Product
    {
        public Food(string name, decimal price, double grams) : base(name, price)
        {
            this.Grams = grams;
        }

        public double Grams { get; set; }
    }

    public class MainDish : Food
    {
        public MainDish(string name, decimal price, double grams) : base(name, price, grams)
        {

        }
    }

    public class Dessert : Food
    {
        public Dessert(string name, decimal price, double grams, double calories) : base(name, price, grams)
        {
            this.Calories = calories;
        }

        public double Calories { get; set; }
    }

    public class Starter : Food
    {
        public Starter(string name, decimal price, double grams) : base(name, price, grams)
        {

        }
    }

    public class Soup : Starter
    {
        public Soup(string name, decimal price, double grams) : base(name, price, grams)
        {

        }
    }

    public class Fish : MainDish
    {
        private new const double Grams = 22;

        public Fish(string name, decimal price) : base(name, price, Grams)
        {

        }

    }

    public class Cake : Dessert
    {
        private new const double Grams = 250;
        private new const double Calories = 1000;
        private const decimal CakePrice = 5;

        public Cake(string name) : base(name, CakePrice, Grams, Calories)
        {

        }

    }
}