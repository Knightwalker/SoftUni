using System;
using System.Linq;
using System.Reflection;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        Spy spy = new Spy();
        //string result = spy.StealFieldInfo("Hacker", "username", "password");
        //string result = spy.AnalyzeAcessModifiers("Hacker");
        string result = spy.RevealPrivateMethods("Hacker");
        Console.WriteLine(result);
    }
}

public class Hacker
{
    public string username = "securityGod82";
    private string password = "mySuperSecretPassw0rd";

    public string Password
    {
        get => this.password;
        set => this.password = value;
    }

    private int Id { get; set; }

    public double BankAccountBalance { get; private set; }

    public void DownloadAllBankAccountsInTheWorld()
    {
    }
}

public class Spy
{
    public string StealFieldInfo(string investigatedClass, params string[] requestedFields)
    {
        Type classType = Type.GetType(investigatedClass);
        FieldInfo[] classFields = classType.GetFields(BindingFlags.Instance | BindingFlags.Static | BindingFlags.NonPublic | BindingFlags.Public);

        Object classInstance = Activator.CreateInstance(classType, new object[] { });

        StringBuilder builder = new StringBuilder();
        builder.AppendLine($"Class under investigation: {investigatedClass}");
        foreach (FieldInfo field in classFields.Where(f => requestedFields.Contains(f.Name)))
        {
            builder.AppendLine($"{field.Name} = {field.GetValue(classInstance)}");
        }

        return builder.ToString().Trim();
    }

    public string AnalyzeAcessModifiers(string investigatedClass)
    {
        Type classType = Type.GetType(investigatedClass);
        FieldInfo[] classFields = classType.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance);
        MethodInfo[] classPublicMethods = classType.GetMethods(BindingFlags.Public | BindingFlags.Instance);
        MethodInfo[] classNonPublicMethods = classType.GetMethods(BindingFlags.Instance | BindingFlags.NonPublic);

        StringBuilder sb = new StringBuilder();

        foreach (FieldInfo field in classFields)
        {
            sb.AppendLine($"{field.Name} must be private!");
        }

        foreach (MethodInfo method in classNonPublicMethods.Where(m => m.Name.StartsWith("get")))
        {
            sb.AppendLine($"{method.Name} have to be public!");
        }

        foreach (MethodInfo method in classPublicMethods.Where(m => m.Name.StartsWith("set")))
        {
            sb.AppendLine($"{method.Name} have to be private!");
        }

        return sb.ToString().Trim();
    }

    public string RevealPrivateMethods(string className)
    {
        StringBuilder sb = new StringBuilder();
        Type classType = Type.GetType(className);
        MethodInfo[] classMethods = classType.GetMethods(BindingFlags.Instance | BindingFlags.NonPublic);

        sb.AppendLine($"All Private Methods of Class: {className}");
        sb.AppendLine($"Base Class: {classType.BaseType.Name}");

        foreach (var method in classMethods)
        {
            sb.AppendLine(method.Name);
        }

        return sb.ToString().Trim();
    }

}

