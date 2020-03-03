namespace _03_WildFarm
{
    public abstract class Food
    {
        public Food(int quantity)
        {
            this.Quantity = quantity;
        }

        public int Quantity { get; set; }
    }

    public class Vegetable : Food
    {
        public Vegetable(int quantity) : base(quantity)
        {

        }
    }

    public class Fruit : Food
    {
        public Fruit(int quantity) : base(quantity)
        {

        }
    }

    public class Meat : Food
    {
        public Meat(int quantity) : base(quantity)
        {

        }
    }

    public class Seeds : Food
    {
        public Seeds(int quantity) : base(quantity)
        {

        }
    }

}
