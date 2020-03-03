using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViceCity.Core.Contracts;
using ViceCity.Models.Guns;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Models.Neghbourhoods;
using ViceCity.Models.Neghbourhoods.Contracts;
using ViceCity.Models.Players;
using ViceCity.Models.Players.Contracts;
using ViceCity.Repositories;
using ViceCity.Repositories.Contracts;

namespace ViceCity.Core
{
    public class Controller : IController
    {
        private IPlayer mainPlayer = new MainPlayer();
        private List<IPlayer> civilPlayers = new List<IPlayer>();
        private Queue<IGun> guns = new Queue<IGun>();
        private INeighbourhood nb = new GangNeighbourhood();
        public string AddGun(string type, string name)
        {
            if (type == "Pistol")
            {
                var gun = new Pistol(name);
                guns.Enqueue(gun);
                return $"Successfully added {name} of type: {type}";
            }
            else if (type == "Rifle")
            {
                var gun = new Rifle(name);
                guns.Enqueue(gun);
                return $"Successfully added {name} of type: {type}";
            }
            else
            {
                return "Invalid gun type!";
            }
        }

        public string AddGunToPlayer(string name)
        {
            if (guns.Count == 0)
            {
                return "There are no guns in the queue!";
            }
            else if (name == "Vercetti")
            {
                mainPlayer.GunRepository.Add(guns.Peek());
                return $"Successfully added {guns.Dequeue().Name} to the Main Player: Tommy Vercetti";
            }
            else if (!civilPlayers.Any(cP => cP.Name == name))
            {
                return "Civil player with that name doesn't exists!";
            }
            else
            {
                var cP = civilPlayers.First(n => n.Name == name);
                cP.GunRepository.Add(guns.Peek());
                return $"Successfully added {guns.Dequeue().Name} to the Civil Player: {name}";
            }
        }

        public string AddPlayer(string name)
        {
            var player = new CivilPlayer(name);
            civilPlayers.Add(player);
            return $"Successfully added civil player: {name}!";
        }

        public string Fight()
        {
            StringBuilder sb = new StringBuilder();
            nb.Action(mainPlayer, civilPlayers);
            if (mainPlayer.LifePoints == 100 && civilPlayers.All(cP => cP.LifePoints == 50))
            {
                return "Everything is okay!";
            }
            else
            {
                sb.AppendLine("A fight happened:");
                sb.AppendLine($"Tommy live points: {mainPlayer.LifePoints}!");
                sb.AppendLine($"Tommy has killed: {civilPlayers.Where(cP => cP.LifePoints == 0).Count()} players!");
                sb.Append($"Left Civil Players: {civilPlayers.Where(cP => cP.LifePoints > 0).Count()}!");
                return sb.ToString().Trim();
            }
        }
    }
}
