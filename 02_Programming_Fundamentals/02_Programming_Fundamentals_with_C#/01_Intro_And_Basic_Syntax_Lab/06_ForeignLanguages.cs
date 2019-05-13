using System;

class ForeignLanguages
{
    static void Main(string[] args)
    {
        string country = Console.ReadLine();
        string language = "";

        if (country == "USA") { language = "English"; }
        else if (country == "England") { language = "English"; }
        else if (country == "Spain") { language = "Spanish"; }
        else if (country == "Argentina") { language = "Spanish"; }
        else if (country == "Mexico") { language = "Spanish"; }
        else { language = "unknown"; }

        Console.WriteLine(language);
    }
}
