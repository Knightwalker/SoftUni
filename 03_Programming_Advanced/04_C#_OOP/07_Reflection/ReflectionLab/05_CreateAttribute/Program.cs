using System;

[Author("Ventsi")]
class StartUp
{
    [Author("Gosho")]
    static void Main(string[] args)
    {
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