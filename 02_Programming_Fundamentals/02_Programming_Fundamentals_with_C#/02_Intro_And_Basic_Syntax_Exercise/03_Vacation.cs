using System;

public class Vacation
{
	public static void Main()
	{
		double numberOfPeople = double.Parse(Console.ReadLine());
		string typeOfPeople = Console.ReadLine().ToLower();
		string dayOfWeek = Console.ReadLine().ToLower();
		double price = 0.0;
		double sum = 0.0;
		
		if (dayOfWeek == "friday")
		{
			if (typeOfPeople == "students")
			{
				price = 8.45;
			} else if (typeOfPeople == "business")
			{
				price = 10.90;
			} else if (typeOfPeople == "regular")
			{
				price = 15;
			}
		}
		else if (dayOfWeek == "saturday")
		{
			if (typeOfPeople == "students")
			{
				price = 9.80;		
			} else if (typeOfPeople == "business")
			{
				price = 15.60;
			} else if (typeOfPeople == "regular")
			{
				price = 20;
			}
		}
		else if (dayOfWeek == "sunday")
		{
			if (typeOfPeople == "students")
			{
				price = 10.46;		
			} else if (typeOfPeople == "business")
			{
				price = 16;
			} else if (typeOfPeople == "regular")
			{
				price = 22.50;
			}
		}
		
		if (typeOfPeople == "students")
		{
			if (numberOfPeople >= 30)
			{
				price = price - price * 0.15;
			} 
		}
		else if (typeOfPeople == "business")
		{
			if (numberOfPeople >= 100)
			{
				numberOfPeople -= 10;
			} 
		}
		else if (typeOfPeople == "regular")
		{
			if (numberOfPeople >= 10 && numberOfPeople <= 20)
			{
				price = price - price * 0.05;
			} 
		}
		
		sum = numberOfPeople * price;
		Console.WriteLine("Total price: {0:F2}", sum);
		
	}
}