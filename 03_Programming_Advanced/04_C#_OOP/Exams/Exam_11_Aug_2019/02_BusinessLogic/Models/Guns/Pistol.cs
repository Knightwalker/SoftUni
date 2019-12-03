using System;
using System.Collections.Generic;
using System.Text;

namespace ViceCity.Models.Guns
{
    public class Pistol : Gun
    {
        private const int bulletsPerBarrel = 10;
        private const int totalBullets = 100;
        public Pistol(string name)
            : base(name, bulletsPerBarrel, totalBullets)
        {

        }
        public override int Fire()
        {
            if (BulletsPerBarrel >= 1)
            {
                BulletsPerBarrel--;
                return 1;
            }
            else if (BulletsPerBarrel <= 0 && TotalBullets > 0)
            {
                if (TotalBullets >= 10)
                {
                    BulletsPerBarrel += 10;
                    TotalBullets -= 10;
                }
                else if (TotalBullets < 10)
                {
                    BulletsPerBarrel += TotalBullets;
                    TotalBullets = 0;
                }
                BulletsPerBarrel--;
                return 1;
            }
            else
            {
                return 0;
            }
        }
    }
}
