using System;

namespace _03_Ferrari
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string drivername = Console.ReadLine();
            Ferrari ferrari = new Ferrari(drivername);
            Console.WriteLine(ferrari.ToString());
        }
    }

    public interface IDrivable
    {
        public string Drive();
        public string Brake();
    }

    public class Ferrari : IDrivable
    {
        private string model = "488-Spider";

        public Ferrari(string drivername)
        {
            this.DriverName = drivername;
        }

        public string DriverName { get; set; }

        public string Drive()
        {
            return "Gas!";
        }

        public string Brake()
        {
            return "Brakes!";
        }

        public override string ToString()
        {
            return $"{this.model}/{this.Brake()}/{this.Drive()}/{this.DriverName}";
        }
    }

}
