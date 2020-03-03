using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Models.Neghbourhoods.Contracts;
using ViceCity.Models.Players.Contracts;

namespace ViceCity.Models.Neghbourhoods
{
    public class GangNeighbourhood : INeighbourhood
    {
        public void Action(IPlayer mainPlayer, ICollection<IPlayer> civilPlayers)
        {
            if (mainPlayer.IsAlive
                && mainPlayer.GunRepository.Models.Count > 0)
            {
                while (mainPlayer.GunRepository.Models.Any(g => g.CanFire == true)
                   && civilPlayers.Any(cP => cP.IsAlive == true))
                {
                    var mainPlayerGun = mainPlayer.GunRepository.Models.First(g => g.CanFire == true);
                    var civilPlayer = civilPlayers.First(cp => cp.IsAlive == true);
                    civilPlayer.TakeLifePoints(mainPlayerGun.Fire());
                }
            }

            if (mainPlayer.IsAlive && civilPlayers.Any(cP => cP.IsAlive == true))
            {
                foreach (IPlayer cP in civilPlayers.Where(cP => cP.IsAlive == true).ToList())
                {
                    foreach (IGun gun in cP.GunRepository.Models.Where(g => g.CanFire == true).ToList())
                    {
                        while (gun.CanFire)
                        {
                            mainPlayer.TakeLifePoints(gun.Fire());
                            if (!mainPlayer.IsAlive)
                            {
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
}
