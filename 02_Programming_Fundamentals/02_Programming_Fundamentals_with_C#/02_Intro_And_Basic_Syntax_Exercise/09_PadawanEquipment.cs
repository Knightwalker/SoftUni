using System;

public class PadawanEquipment
{
	public static void Main()
	{
		decimal money = decimal.Parse(Console.ReadLine());
		int students = int.Parse(Console.ReadLine());
		decimal PriceLightsabers = decimal.Parse(Console.ReadLine());
		decimal PriceRobes = decimal.Parse(Console.ReadLine());
		decimal PriceBelts = decimal.Parse(Console.ReadLine());
		
		decimal sumSabers = PriceLightsabers * (decimal)(Math.Ceiling((students + 0.10 * students)));
		decimal sumRobes = PriceRobes * students;
		decimal sumBelts = PriceBelts * (students - (students / 6));
		
		decimal sumAll = sumSabers + sumRobes + sumBelts;
		
		if (sumAll <= money)
		{
			Console.WriteLine("The money is enough - it would cost {0:F2}lv.", sumAll);
		} else 
		{
			decimal needMore = sumAll - money;
			Console.WriteLine("Ivan Cho will need {0:F2}lv more.", needMore);
		}
	}
	
}