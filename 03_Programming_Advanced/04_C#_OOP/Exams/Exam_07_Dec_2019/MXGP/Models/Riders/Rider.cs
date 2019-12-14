using System;
using System.Collections.Generic;
using System.Text;

using MXGP.Models.Motorcycles.Contracts;
using MXGP.Models.Riders.Contracts;

namespace MXGP.Models.Riders
{
    public class Rider : IRider
    {
        private string name;
        private int numberOfWins;
        private bool canParticipate;

        public Rider(string name)
        {
            this.Name = name;
            this.NumberOfWins = 0;
            this.CanParticipate = false;
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException($"Name {value} cannot be less than 5 symbols.");
                }
                if (value.Length < 5)
                {
                    throw new ArgumentException($"Name {value} cannot be less than 5 symbols.");
                }
                this.name = value;
            }
        }

        public IMotorcycle Motorcycle
        {
            get;
            private set;
        }

        public int NumberOfWins
        {
            get
            {
                return this.numberOfWins;
            }
            private set
            {
                this.numberOfWins = value;
            }
        }

        public bool CanParticipate
        {
            get
            {
                if (this.Motorcycle == null)
                {
                    return false;
                }
                return true;
            }
            private set
            {
                this.canParticipate = value;
            }
        }

        public void WinRace()
        {
            this.NumberOfWins++;
        }

        public void AddMotorcycle(IMotorcycle motorcycle)
        {
            if (motorcycle == null)
            {
                throw new ArgumentNullException("Motorcycle cannot be null.");
            }
            this.Motorcycle = motorcycle;
        }
    }
}
