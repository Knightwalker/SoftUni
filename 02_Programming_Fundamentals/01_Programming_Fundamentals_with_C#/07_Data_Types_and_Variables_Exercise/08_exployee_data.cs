using System;

namespace _08_Employee_Data
{
    class Program
    {
        static void Main(string[] args)
        {
            string first_name = Console.ReadLine();
            string last_name = Console.ReadLine();
            sbyte age = sbyte.Parse(Console.ReadLine());
            char gender = char.Parse(Console.ReadLine());
            long id_number = long.Parse(Console.ReadLine());
            int employee_number = int.Parse(Console.ReadLine());

            Console.WriteLine($"First name: {first_name}");
            Console.WriteLine($"Last name: {last_name}");
            Console.WriteLine($"Age: {age}");
            Console.WriteLine($"Gender: {gender}");
            Console.WriteLine($"Personal ID: {id_number}");
            Console.WriteLine($"Unique Employee number: {employee_number}");
        }
    }
}