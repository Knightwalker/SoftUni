using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using MXGP.Models.Motorcycles;
using MXGP.Models.Races;
using MXGP.Models.Riders;
using MXGP.Repositories;
using MXGP.Models.Riders.Contracts;

namespace MXGP.Core.Contracts
{
    class ChampionshipController : IChampionshipController
    {
        MotorcycleRepository motorcycleRepository;
        RiderRepository riderRepository;
        RaceRepository raceRepository;

        public ChampionshipController()
        {
            this.motorcycleRepository = new MotorcycleRepository();
            this.riderRepository = new RiderRepository();
            this.raceRepository = new RaceRepository();
        }

        public string CreateRider(string riderName)
        {
            int indexRider = riderRepository.Models.FindIndex(x => x.Name == riderName);

            if (indexRider >= 0) // if rider exists -> throw exception
            {
                throw new ArgumentException($"Rider {riderName} is already created.");
            }

            Rider rider = new Rider(riderName);
            riderRepository.Add(rider);
            return $"Rider {rider.Name} is created.";

        }

        public string CreateMotorcycle(string type, string model, int horsePower)
        {
            if (type == "Power")
            {
                int index = motorcycleRepository.Models.FindIndex(x => x.Model == model);
                if (index >= 0) // if motorcycle exists -> throw exception
                {
                    throw new ArgumentException($"Motorcycle {model} is already created.");
                }

                motorcycleRepository.Add(new PowerMotorcycle(model, horsePower));
                return $"PowerMotorcycle {model} is created.";
            }
            else if (type == "Speed")
            {
                int index = motorcycleRepository.Models.FindIndex(x => x.Model == model);
                if (index >= 0) // if motorcycle exists -> throw exception
                {
                    throw new ArgumentException($"Motorcycle {model} is already created.");
                }

                motorcycleRepository.Add(new SpeedMotorcycle(model, horsePower));
                return $"SpeedMotorcycle {model} is created.";
            }
            return null;
        }

        public string CreateRace(string name, int laps)
        {
            int indexRace = raceRepository.Models.FindIndex(x => x.Name == name);
            
            if (indexRace >= 0) // if race exists -> throw exception
            {
                throw new InvalidOperationException($"Race {name} is already created.");
            }

            Race race = new Race(name, laps);
            raceRepository.Add(race);
            return $"Race {race.Name} is created.";

        }

        public string AddRiderToRace(string raceName, string riderName)
        {
            int indexRace = raceRepository.Models.FindIndex(x => x.Name == raceName);
            int indexRider = riderRepository.Models.FindIndex(x => x.Name == riderName);

            if (indexRace < 0)
            {
                throw new InvalidOperationException($"Race {raceName} could not be found.");
            }
            if (indexRider < 0)
            {
                throw new InvalidOperationException($"Rider {riderName} could not be found.");
            }

            raceRepository.Models[indexRace].AddRider(riderRepository.Models[indexRider]);
            return $"Rider {riderName} added in {raceName} race.";

        }

        public string AddMotorcycleToRider(string riderName, string motorcycleModel)
        {
            int indexRider = riderRepository.Models.FindIndex(x => x.Name == riderName);
            int indexMotor = motorcycleRepository.Models.FindIndex(x => x.Model == motorcycleModel);

            if (indexRider < 0)
            {
                throw new InvalidOperationException($"Rider {riderName} could not be found.");
            }
            if (indexMotor < 0)
            {
                throw new InvalidOperationException($"Motorcycle {motorcycleModel} could not be found.");
            }

            riderRepository.Models[indexRider].AddMotorcycle(motorcycleRepository.Models[indexMotor]);
            return $"Rider {riderName} received motorcycle {motorcycleModel}.";
        }

        public string StartRace(string raceName)
        {
            int index = raceRepository.Models.FindIndex(x => x.Name == raceName);
            if (index < 0)
            {
                throw new InvalidOperationException($"Race {raceName} could not be found.");
            }

            Race race = raceRepository.Models[index];
            if (race.Riders.Count < 3)
            {
                throw new InvalidOperationException($"Race {raceName} cannot start with less than 3 participants.");
            }

            raceRepository.Remove(race);
            List<IRider> sortedRiders = race.Riders.OrderByDescending(x => x.Motorcycle.CalculateRacePoints(race.Laps)).ToList();
            return $"Rider {sortedRiders[0].Name} wins {race.Name} race.\n" +
                   $"Rider {sortedRiders[1].Name} is second in {race.Name} race.\n" +
                   $"Rider {sortedRiders[2].Name} is third in {race.Name} race.";
        }

    }
}
