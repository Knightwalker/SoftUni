using System;
using System.Collections.Generic;
using System.Text;

namespace ViceCity.Models.Guns
{
    public class Rifle : Gun
    {
        private const int bulletsPerBarrel = 50;
        private const int totalBullets = 500;
        public Rifle(string name)
            : base(name, bulletsPerBarrel, totalBullets)
        {

        }
        public override int Fire()
        {
            if (BulletsPerBarrel >= 5)
            {
                BulletsPerBarrel -= 5;
                return 5;
            }
            else if (BulletsPerBarrel <= 0 && TotalBullets > 0)
            {
                if (TotalBullets >= 50)
                {
                    BulletsPerBarrel += 50;
                    TotalBullets -= 50;
                }
                else if (TotalBullets < 50)
                {
                    BulletsPerBarrel += TotalBullets;
                    TotalBullets = 0;
                }
                BulletsPerBarrel -= 5;
                return 5;
            }
            else
            {
                return 0;
            }
        }
    }
}
