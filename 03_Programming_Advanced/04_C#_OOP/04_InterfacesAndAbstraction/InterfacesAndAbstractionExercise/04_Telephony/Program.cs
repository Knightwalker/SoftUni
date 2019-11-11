using System;

namespace _04_Telephony
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputOneArr = Console.ReadLine().Split(" ");
            string[] inputTwoArr = Console.ReadLine().Split(" ");

            Smartphone phone = new Smartphone();
            foreach (var number in inputOneArr)
            {
                Console.WriteLine(phone.Calling(number));
            }
            foreach (var url in inputTwoArr)
            {
                Console.WriteLine(phone.Browsing(url));
            }
        }
    }

    public interface ICallable
    {
        string Calling(string number);
    }

    public interface IBrowsable
    {
        string Browsing(string url);
    }

    public class Smartphone : ICallable, IBrowsable
    {

        public string Calling(string number)
        {
            bool validateNumber = true;
            for (int i = 0; i < number.Length; i++)
            {
                if (!char.IsDigit(number[i]))
                {
                    validateNumber = false;
                    break;
                }
            }

            if (validateNumber)
            {
                return $"Calling... {number}";
            }
            else
            {
                return $"Invalid number!";
            }

        }

        public string Browsing(string url)
        {
            bool validateUrl = true;
            for (int i = 0; i < url.Length; i++)
            {
                if (char.IsDigit(url[i]))
                {
                    validateUrl = false;
                    break;
                }
            }

            if (validateUrl)
            {
                return $"Browsing: {url}!";
            }
            else
            {
                return $"Invalid URL!";
            }

        }

    }

}