public class Program
{
    public static void Main(string[] args)
    {
        ArrayList<int> list = new ArrayList<int>();             
        list.Add(1);
        list.Add(2);
        list.Add(3);
        list.Add(4);
        list.RemoveAt(0);
        list.RemoveAt(0);
        list.RemoveAt(0);
        System.Console.WriteLine(list.Count);
    }
}
