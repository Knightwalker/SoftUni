using System;

public class RageExpenses
{
	public static void Main()
	{
		int LostGames = int.Parse(Console.ReadLine());
		float PriceHeadset = float.Parse(Console.ReadLine());
		float PriceMouse = float.Parse(Console.ReadLine());
		float PriceKeyboard = float.Parse(Console.ReadLine());
		float PriceDisplay = float.Parse(Console.ReadLine());
		
      	int counterEachSecondGame = 0;
		int counterEachThirdGame = 0;
		
		int counterHeadset = 0;
		int counterMouse = 0;
		int counterKeyboard= 0;
		int counterDisplay = 0;
	
		for(int i = 1; i <= LostGames; i++)
		{
			counterEachSecondGame++;
			counterEachThirdGame++;

			if(counterEachSecondGame == 2)
			{
				counterHeadset++;
			}
			if(counterEachThirdGame == 3)
			{
				counterMouse++;
				if(counterEachSecondGame == 2)
				{
					counterKeyboard++;
					if(counterKeyboard % 2 == 0)
					{
						counterDisplay++;
					}
				}
			}
			
			if (counterEachSecondGame == 2) { counterEachSecondGame = 0; }
			if (counterEachThirdGame == 3) { counterEachThirdGame = 0; }
		}
		
		double sum = PriceHeadset * counterHeadset + PriceMouse * counterMouse + PriceKeyboard * counterKeyboard + PriceDisplay * counterDisplay;
		Console.WriteLine("Rage expenses: {0:F2} lv.", sum);
	}
	
}