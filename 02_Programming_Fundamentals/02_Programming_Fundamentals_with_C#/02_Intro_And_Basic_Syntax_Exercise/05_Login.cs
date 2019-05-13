using System;

public class Login
{
	public static void Main()
	{
		string username = Console.ReadLine();
		string password = Reverse(username);
		string newPassword = "";
		int counter = 0;
		
		while(newPassword != password) 
		{
			newPassword = Console.ReadLine(); 
			
			if (newPassword != password) 
			{
				counter++;
				if (counter == 4) 
				{
					break;
				}
				Console.WriteLine("Incorrect password. Try again.");
			}
		}
		
		if (counter >= 4) 
		{
			Console.WriteLine("User {0} blocked!", username);
		} 
		else {
			Console.WriteLine("User {0} logged in.", username);
		}
	
	}
	
	public static string Reverse( string s )
	{
		char[] charArray = s.ToCharArray();
		Array.Reverse( charArray );
		return new string( charArray );
	}
  
}