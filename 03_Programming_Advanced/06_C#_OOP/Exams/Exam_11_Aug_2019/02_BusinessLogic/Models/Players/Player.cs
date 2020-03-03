using System;
using System.Collections.Generic;
using System.Text;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Models.Players.Contracts;
using ViceCity.Repositories;
using ViceCity.Repositories.Contracts;

namespace ViceCity.Models.Players
{
    public abstract class Player : IPlayer
    {
        private string name;
        private int lifePoints;
        private IRepository<IGun> gunRepository;
        public Player(string name, int lifePoints)
        {
            Name = name;
            LifePoints = lifePoints;
            gunRepository = new GunRepository();
        }
        public string Name
        {
            get
            {
                return name;
            }
            private set
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Player's name cannot be null or a whitespace!");
                }
                else
                {
                    name = value;
                }
            }
        }

        public bool IsAlive
        {
            get
            {
                if (LifePoints > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public IRepository<IGun> GunRepository
        {
            get
            {
                return gunRepository;
            }
        }

        public int LifePoints
        {
            get
            {
                return lifePoints;
            }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Player life points cannot be below zero!");
                }
                else
                {
                    lifePoints = value;
                }
            }
        }

        public void TakeLifePoints(int points)
        {
            LifePoints = LifePoints - points < 0 ? LifePoints = 0 : LifePoints = LifePoints - points;
        }
    }
}
