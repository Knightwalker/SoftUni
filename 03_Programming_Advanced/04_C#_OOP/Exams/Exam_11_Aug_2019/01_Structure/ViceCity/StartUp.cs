using System;
using System.Collections.Generic;

using ViceCity.Core;
using ViceCity.Core.Contracts;

using ViceCity.Models.Players.Contracts;
using ViceCity.Repositories.Contracts;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Models.Neghbourhoods.Contracts;

namespace ViceCity
{
    public class StartUp
    {
        IEngine engine;
        static void Main(string[] args)
        {
            IEngine engine = new Engine();
            engine.Run();
        }
    }

    public abstract class Player : IPlayer
    {

        private string name;
        private int lifePoints;

        public Player(string name, int lifePoints)
        {
            this.Name = name;
            this.LifePoints = lifePoints;
            //this.GunRepository = new List<IGun>();
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            protected set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Player's name cannot be null or a whitespace!");
                }
                this.name = value;
            }
        }

        public int LifePoints
        {
            get
            {
                return this.lifePoints;
            }
            protected set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Player life points cannot be below zero!");
                }
                this.lifePoints = value;
            }
        }

        public IRepository<IGun> GunRepository { get; protected set; }

        public bool IsAlive { get; protected set; }

        public void TakeLifePoints(int points)
        {
            this.LifePoints -= points;
        }

    }

    public class MainPlayer : Player
    {
        public MainPlayer() : base("Tommy Vercetti", 100)
        {
        }



    }

    public class CivilPlayer : Player
    {
        public CivilPlayer(string name) : base(name, 50)
        {
        }


    }


    public abstract class Gun : IGun
    {
        private string name;
        private int bulletsPerBarrel;
        private int totalBullets;
        private int capacity;

        public Gun(string name, int bulletsPerBarrel, int totalBullets)
        {
            this.Name = name;
            this.BulletsPerBarrel = bulletsPerBarrel;
            this.TotalBullets = totalBullets;
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            protected set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name cannot be null or a white space!");
                }
                this.name = value;
            }
        }

        public int BulletsPerBarrel
        {
            get
            {
                return this.bulletsPerBarrel;
            }
            protected set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Bullets cannot be below zero!");
                }
                this.bulletsPerBarrel = value;
                this.capacity = value;
            }
        }

        public int TotalBullets
        {
            get
            {
                return this.totalBullets;
            }
            protected set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Total bullets cannot be below zero!");
                }
                this.totalBullets = value;
            }
        }

        public bool CanFire { get; protected set; }

        public abstract int Fire();

    }

    public class Pistol : Gun
    {
        public Pistol(string name) : base(name, 50, 100)
        {

        }

        public override int Fire()
        {
            this.TotalBullets -= 1;

            return 1;
        }
    }

    public class Rifle : Gun
    {
        public Rifle(string name) : base(name, 50, 500)
        {

        }

        public override int Fire()
        {
            this.TotalBullets -= 5;

            return 5;
        }

    }

    public class GangNeighbourhood : INeighbourhood
    {
        public void Action(IPlayer mainPlayer, ICollection<IPlayer> civilPlayers)
        {

        }
    }

    public class GunRepository : IRepository<IGun>
    {
        private List<IGun> collection;

        public GunRepository()
        {
            this.collection = new List<IGun>();
        }

        public IReadOnlyCollection<IGun> Models
        {
            get
            {
                return this.collection;
            }
        }

        public void Add(IGun model)
        {
            int index = this.collection.FindIndex(g => g.Name == model.Name);
            if (index < 0)
            {
                this.collection.Add(model);
            }
 
        }

        public bool Remove(IGun model)
        {
            int index = this.collection.FindIndex(g => g.Name == model.Name);
            if (index >= 0)
            {
                this.collection.RemoveAt(index);
                return true;
            }
            return false;
        }

        public IGun Find(string name)
        {
            int index = this.collection.FindIndex(g => g.Name == name);
            if (index >= 0)
            {
                return this.collection[index];
            }
            return null;

        }
    }

}