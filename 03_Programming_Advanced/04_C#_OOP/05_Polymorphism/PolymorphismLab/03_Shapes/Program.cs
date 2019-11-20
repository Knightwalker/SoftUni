using System;

namespace Shapes
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    public abstract class Shape
    {

        public abstract double CalculatePerimeter();
        public abstract double CalculateArea();

        public virtual string Draw()
        {
            return "Drawing ";
        }

    }

    public class Rectangle : Shape
    {
        private int height;
        private int width;

        public Rectangle(int height, int width)
        {
            this.Height = height;
            this.Width = width;
        }

        public int Height
        {
            get { return this.height; }
            set { this.height = value; }
        }
        public int Width
        {
            get { return this.width; }
            set { this.width = value; }
        }

        public override double CalculateArea()
        {
            return Width * Height;
        }

        public override double CalculatePerimeter()
        {
            return 2 * Width + 2 * Height;
        }

        public override string Draw()
        {
            return base.Draw() + this.GetType().Name;
        }

    }

    public class Circle : Shape
    {
        private double radius;

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public double Radius
        {
            get { return this.radius; }
            private set { this.radius = value; }
        }

        public override double CalculateArea()
        {
            return Math.PI * Math.Pow(Radius, 2);
        }

        public override double CalculatePerimeter()
        {
            return 2 * Math.PI * Radius;
        }

        public override string Draw()
        {
            return base.Draw() + this.GetType().Name;
        }

    }

}