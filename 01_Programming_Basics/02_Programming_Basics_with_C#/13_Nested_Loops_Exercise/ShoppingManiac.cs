using System;

namespace NestedLoopsExercises
{
    class Program
    {
        static void Main()
        {
            int money = int.Parse(Console.ReadLine());

            int clothesCount = 0;

            int spendMoney = 0;

            string command = string.Empty;

            while ((command = Console.ReadLine()) != "enough")
            {
                
                if(command == "enter")
                {
                    string input = "";

                    while (money > 0 && (input = Console.ReadLine()) != "leave")
                    {
                        int cost = int.Parse(input);
                        if(money < cost)
                        {
                            Console.WriteLine("Not enough money.");
                            continue;
                        }
                        else
                        {
                            money -= cost;
                            spendMoney += cost;
                            clothesCount++;
                        }
                    }
                    if (money <= 0)
                    {
                        break;
                    }
                }
            }
            Console.WriteLine($"For {clothesCount} clothes I spent {spendMoney} lv and have {money} lv left.");
        }
    }
}
