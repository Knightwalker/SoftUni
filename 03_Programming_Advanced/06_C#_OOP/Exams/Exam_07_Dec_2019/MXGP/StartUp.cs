using System;

namespace MXGP
{
    using MXGP.Core.Contracts;
    using Models.Motorcycles;

    public class StartUp
    {
        public static void Main(string[] args)
        {

            ChampionshipController championshipController = new ChampionshipController();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                string[] inputArr = input.Split(" ");
                if (inputArr[0] == "CreateRider")
                {
                    string name = inputArr[1];
                    try
                    {
                        Console.WriteLine(championshipController.CreateRider(name));
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }
                }
                else if (inputArr[0] == "CreateMotorcycle")
                {
                    string type = inputArr[1];
                    string model = inputArr[2];
                    int horsePower = int.Parse(inputArr[3]);
                    try
                    {
                        Console.WriteLine(championshipController.CreateMotorcycle(type, model, horsePower));
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }  
                }
                else if (inputArr[0] == "AddMotorcycleToRider")
                {
                    string riderName = inputArr[1];
                    string motorcycleModel = inputArr[2];
                    // Console.WriteLine(championshipController.AddMotorcycleToRider(riderName, motorcycleModel));
                    try
                    {
                        Console.WriteLine(championshipController.AddMotorcycleToRider(riderName, motorcycleModel));
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }
                }
                else if (inputArr[0] == "AddRiderToRace")
                {
                    string raceName = inputArr[1];
                    string riderName = inputArr[2];
                    // Console.WriteLine(championshipController.AddRiderToRace(raceName, riderName));
                    try
                    {
                        Console.WriteLine(championshipController.AddRiderToRace(raceName, riderName));
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }
                }
                else if (inputArr[0] == "CreateRace")
                {
                    string name = inputArr[1];
                    int laps = int.Parse(inputArr[2]);
                    // Console.WriteLine(championshipController.CreateRace(name, laps));
                    try
                    {
                        Console.WriteLine(championshipController.CreateRace(name, laps));
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }
                }
                else if (inputArr[0] == "StartRace")
                {
                    string raceName = inputArr[1];
                    // Console.WriteLine(championshipController.StartRace(raceName));
                    try
                    {
                        Console.WriteLine(championshipController.StartRace(raceName));
                    }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }
                }

            }

        }
    }
}
