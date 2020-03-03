using System;
using System.Collections.Generic;
using System.Text;

using MXGP.Models.Races.Contracts;
using MXGP.Models.Riders.Contracts;
using MXGP.Utilities.Messages;

namespace MXGP.Models.Races
{
    public class Race : IRace
    {
        private string name;
        private int laps;
        private List<IRider> riders;

        public Race(string name, int laps)
        {
            this.Name = name;
            this.Laps = laps;
            this.riders = new List<IRider>(); // setting the field
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    //throw new ArgumentException(string.Format(ExceptionMessages.RaceInvalid, value));
                    throw new ArgumentException("Name {name} cannot be less than 5 symbols.");
                }
                if (value.Length < 5)
                {
                    //throw new ArgumentException(string.Format(ExceptionMessages.RaceInvalid, value));
                    throw new ArgumentException("Name {name} cannot be less than 5 symbols.");
                }
                this.name = value;
            }
        }

        public int Laps
        {
            get
            {
                return this.laps;
            }
            private set
            {
                if (value < 1)
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidNumberOfLaps, value));
                    //throw new ArgumentException("Laps cannot be less than 1.");
                }
                this.laps = value;
            }
        }

        public IReadOnlyCollection<IRider> Riders
        {
            get
            {
                return this.riders.AsReadOnly();
            }
        }

        public void AddRider(IRider rider)
        {
            if (rider == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.RiderInvalid));
                //throw new ArgumentNullException("Rider cannot be null.");
            }
            if (rider.CanParticipate == false)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.RiderNotParticipate, rider.Name));
                //throw new ArgumentException($"Rider {rider.name} could not participate in race.");
            }
            if (this.riders.FindIndex(n => n.Name == rider.Name) >= 0)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.RiderAlreadyAdded, rider.Name, this.name));
                //throw new ArgumentNullException($"Rider {rider.Name} is already added in {this.Name} race.");
            }

            this.riders.Add(rider);

        }
    }

}
