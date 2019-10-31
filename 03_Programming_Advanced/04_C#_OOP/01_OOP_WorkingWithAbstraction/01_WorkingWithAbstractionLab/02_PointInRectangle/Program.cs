using System;

namespace _02_PointInRectangle
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] rectangleCoordinates = Console.ReadLine().Split(" ");
            int topLeftX = int.Parse(rectangleCoordinates[0]);
            int topLeftY = int.Parse(rectangleCoordinates[1]);
            int bottomRightX = int.Parse(rectangleCoordinates[2]);
            int bottomRightY = int.Parse(rectangleCoordinates[3]);

            Rectangle rect = new Rectangle(topLeftX, topLeftY, bottomRightX, bottomRightY);

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] pointCoordinates = Console.ReadLine().Split(" ");
                int x = int.Parse(pointCoordinates[0]);
                int y = int.Parse(pointCoordinates[1]);

                Point point = new Point(x, y);
                Console.WriteLine(rect.Contains(point));
            }

        }
    }

    public class Point
    {
        public Point(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }

        public int X { get; set; }
        public int Y { get; set; }
    }

    public class Rectangle
    {

        public Rectangle(int topLeftX, int topLeftY, int bottomRightX, int bottomRightY)
        {
            this.topLeftX = topLeftX;
            this.topLeftY = topLeftY;
            this.bottomRightX = bottomRightX;
            this.bottomRightY = bottomRightY;
        }

        public int topLeftX { get; set; }
        public int topLeftY { get; set; }
        public int bottomRightX { get; set; }
        public int bottomRightY { get; set; }

        public bool Contains(Point point)
        {
            if (point.X >= this.topLeftX && point.X <= this.bottomRightX)
            {
                if (point.Y >= this.topLeftY && point.Y <= this.bottomRightY)
                {
                    return true;
                }
            }

            return false;
        }

    }

}
