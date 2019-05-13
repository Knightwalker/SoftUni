// ##### ##### ##### ##### #####
// Variant by Kris
// ##### ##### ##### ##### #####

using System;
					
public class Division_V1
{
	public static void Main()
	{
		int number = int.Parse(Console.ReadLine());
		
		bool divisionByTen = false;
		bool divisionBySeven = false;
		bool divisionBySix = false;
		bool divisonByThree = false;
		bool divisonByTwo = false;
		
		if (number % 10 == 0) { divisionByTen = true; } 
		else if (number % 7 == 0){ divisionBySeven = true; } 
		else if (number % 6 == 0) { divisionBySix = true; } 
		else if (number % 3 == 0) { divisonByThree = true; } 
		else if (number % 2 == 0) { divisonByTwo = true; } 
		
		if (divisionByTen == true) {
			Console.WriteLine("The number is divisible by 10");
		} else if (divisionBySeven == true) {
			Console.WriteLine("The number is divisible by 7");
		} else if (divisionBySix == true) {
			Console.WriteLine("The number is divisible by 6");
		} else if (divisonByThree == true) {
			Console.WriteLine("The number is divisible by 3");
		} else if (divisonByTwo == true) {
			Console.WriteLine("The number is divisible by 2");
		} else {
			Console.WriteLine("Not divisible");
		}
		
	}
}

// ##### ##### ##### ##### #####
// Variant by Kali	
// ##### ##### ##### ##### #####

using System;

public class Division_V2
{
	public static void Main()
	{
		int number = int.Parse(Console.ReadLine());
		
		
		if (number == 0)
		{
			Console.WriteLine("The number is divisible by 10");
		}
		
		if (number % 7 == 0 && number != 0)
		{
			Console.WriteLine("The number is divisible by 7");
		} else
		{
			if (number % 2 == 0 && number % 3 == 0 && number != 0)
			{
				if (number % 6 == 0)
				{
					if(number % 10 == 0)
					{
						Console.WriteLine("The number is divisible by 10");

					}
					else
					{
						Console.WriteLine("The number is divisible by 6");
					}
				}
				else 
				{
					Console.WriteLine("The number is divisible by 3");
				}
			} else if (number % 2 == 0 && number != 0)	
			{
				if (number % 10 == 0)
				{
					Console.WriteLine("The number is divisible by 10");
				} else
				{
					Console.WriteLine("The number is divisible by 2");
				}
			} else if (number % 3 == 0 && number != 0)
			{
				Console.WriteLine("The number is divisible by 3");
			} else if (number != 0)
			{
				Console.WriteLine("Not divisible");
			}
		}
		
	}
}