using System;
using System.Text;

namespace _01_RhombusOfStars
{
    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            DrawStar(n);
        }

        public static void DrawStar(int n)
        {
            StringBuilder figure = new StringBuilder();

            // top
            for (int i = 0; i < n - 1; i++)
            {
                figure.Append(new string(' ', n - 1 - i));
                DrawLineOfStars(figure, i + 1);
                figure.Append(new string(' ', n - 1 - i));
                figure.AppendLine();
            }

            // bottom
            for (int i = n - 1; i >= 0; i--)
            {
                figure.Append(new string(' ', n - 1 - i));
                DrawLineOfStars(figure, i + 1);
                figure.Append(new string(' ', n - 1 - i));
                figure.AppendLine();
            }

            Console.WriteLine(figure);
        }

        public static void DrawLineOfStars(StringBuilder figure, int numberOfStars)
        {
            for (int i = 0; i < numberOfStars; i++)
            {
                figure.Append("*");
                if (i < numberOfStars - 1)
                {
                    figure.Append(" ");
                }
         
            }
        
        }

    }
}