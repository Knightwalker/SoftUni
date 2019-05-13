using System;

class TheatrePromotion
{
    static void Main(string[] args)
    {
        string day = Console.ReadLine().ToLower();
        int age = int.Parse(Console.ReadLine());
        int ticket = 0;

        bool validate_age = age >= 0 && age <= 122;
        bool young = age >= 0 && age <= 18;
        bool middle = age > 18 && age <= 64;
        bool old = age > 64 && age <= 122;

        if (day == "weekday")
        {
            if (young) { ticket = 12; }
            else if (middle) { ticket = 18; }
            else if (old) { ticket = 12; }
        }
        else if (day == "weekend")
        {
            if (young) { ticket = 15; }
            else if (middle) { ticket = 20; }
            else if (old) { ticket = 15; }
        }
        else if (day == "holiday")
        {
            if (young) { ticket = 5; }
            else if (middle) { ticket = 12; }
            else if (old) { ticket = 10; }
        }

        if (validate_age) { Console.WriteLine($"{ticket}$"); }
        else if (!validate_age) { Console.WriteLine("Error!"); }
    }
}
