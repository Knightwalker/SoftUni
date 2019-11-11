using System;

namespace Shapes
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var radius = int.Parse(Console.ReadLine());
            IDrawable circle = new Circle(radius);

            var width = int.Parse(Console.ReadLine());
            var height = int.Parse(Console.ReadLine());
            IDrawable rect = new Rectangle(width, height);

            circle.Draw();
            rect.Draw();
        }

        public interface IDrawable
        {
            void Draw();
        }

        public class Circle : IDrawable
        {
            private int radius;

            public Circle(int radius)
            {
                this.Radius = radius;
            }

            public int Radius
            {
                get
                {
                    return this.radius;
                }

                private set
                {
                    this.radius = value;
                }
            }

            public void Draw()
            {
                double rIn = this.Radius - 0.4;
                double rOut = this.Radius + 0.4;

                for (double y = this.Radius; y >= -this.Radius; --y)
                {
                    for (double x = -this.Radius; x < rOut; x += 0.5)
                    {
                        double value = x * x + y * y;
                        if (value >= rIn * rIn && value <= rOut * rOut)
                        {
                            Console.Write("*");
                        }
                        else
                        {
                            Console.Write(" ");
                        }
                    }

                    Console.WriteLine();
                }
            }
        }

        public class Rectangle : IDrawable
        {
            private int width;
            private int height;

            public Rectangle(int width, int height)
            {
                this.Width = width;
                this.Height = height;
            }

            public int Width
            {
                get
                {
                    return this.width;
                }

                private set
                {
                    this.width = value;
                }
            }
            public int Height
            {
                get
                {
                    return this.height;
                }

                private set
                {
                    this.height = value;
                }
            }

            public void Draw()
            {
                DrawLine(this.Width, '*', '*');
                for (int i = 1; i < this.Height - 1; i++)
                {
                    DrawLine(this.Width, ' ', '*');
                }
                DrawLine(this.Width, '*', '*');
            }

            private void DrawLine(int width, char mid, char end)
            {
                Console.Write(end);
                for (int i = 1; i < width - 1; i++)
                {
                    Console.Write(mid);
                }
                Console.WriteLine(end);
            }
        }

    }
}
