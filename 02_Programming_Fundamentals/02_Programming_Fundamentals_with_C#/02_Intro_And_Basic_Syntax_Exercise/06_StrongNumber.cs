using System;

public class StrongNumber
{
	public static void Main()
	{
		string stringNumber = Console.ReadLine();
		int intNumber = int.Parse(stringNumber);
		int factorialOfEachDigit = 0;
		
		for (int i = 0; i <= stringNumber.Length - 1; i++) 
		{
			char digit = stringNumber[i];
			int number = int.Parse(digit.ToString());
			factorialOfEachDigit += Factorial(number);
		}
		
		if (factorialOfEachDigit == intNumber) 
		{
			Console.WriteLine("yes");
		} else 
		{
			Console.WriteLine("no");
		}
			
	}
	
	// Method that calculates the factorial of a number.
	public static int Factorial (int number)
	{
		int result = 1;
		for (int i = number; i >= 1; i--) 
		{
			result *= i;
		}
		
		return result;
	}
	
}