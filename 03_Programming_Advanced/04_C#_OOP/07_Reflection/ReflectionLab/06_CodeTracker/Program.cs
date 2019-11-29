using System;
using System.Linq;
using System.Reflection;

[Author("Ventsi")]
class StartUp
{
    [Author("Gosho")]
    static void Main(string[] args)
    {
        var tracker = new Tracker();
        tracker.PrintMethodsByAuthor();
    }
}

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)] //false - не може да се слага 2 пъти върху един и същи клас/ метод
public class AuthorAttribute : Attribute
{
    public AuthorAttribute(string name)
    {
        this.Name = name;
    }
    public string Name { get; set; }
}

public class Tracker
{
    public void PrintMethodsByAuthor()
    {
        //var types = Assembly.GetExecutingAssembly().GetTypes();
        var type = typeof(StartUp);

        var methods = type.GetMethods(
            BindingFlags.Public | BindingFlags.NonPublic |
            BindingFlags.Instance | BindingFlags.Static);

        foreach (var method in methods)
        {
            //method.CustomAttributes.Where(x => x.AttributeType == typeof(AuthorAttribute));   OR:
            var authorAttributes = method.GetCustomAttributes<AuthorAttribute>();

            foreach (AuthorAttribute attr in authorAttributes)
            {
                Console.WriteLine($"{method.Name} is written by {attr.Name}");
            }

        }

    }
}