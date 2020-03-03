using System;
using System.Collections.Generic;
using System.Text;
using ViceCity.Models.Guns.Contracts;

namespace ViceCity.Models.Guns
{
    public abstract class Gun : IGun
    {
        private string name;
        private int bulletsPerBarrel;
        private int totalBullets;
        public Gun(string name, int bulletsPerBarrel, int totalBullets)
        {
            Name = name;
            BulletsPerBarrel = bulletsPerBarrel;
            TotalBullets = totalBullets;
        }
        public string Name
        {
            get
            {
                return name;
            }
            private set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name cannot be null or a white space!");
                }
                else
                {
                    name = value;
                }
            }
        }

        public int BulletsPerBarrel
        {
            get
            {
                return bulletsPerBarrel;
            }
            protected set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Bullets cannot be below zero!");
                }
                else
                {
                    bulletsPerBarrel = value;
                }
            }
        }

        public int TotalBullets
        {
            get
            {
                return totalBullets;
            }
            protected set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Total bullets cannot be below zero!");
                }
                else
                {
                    totalBullets = value;
                }
            }
        }

        public bool CanFire
        {
            get
            {
                if (TotalBullets + BulletsPerBarrel > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public virtual int Fire()
        {
            return 0;
        }
    }
}
