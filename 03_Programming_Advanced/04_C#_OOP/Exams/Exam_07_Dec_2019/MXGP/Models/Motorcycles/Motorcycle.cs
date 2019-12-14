using System;
using System.Collections.Generic;
using System.Text;

using MXGP.Models.Motorcycles.Contracts;
using MXGP.Utilities.Messages;

namespace MXGP.Models.Motorcycles
{
    public abstract class Motorcycle : IMotorcycle
    {
        private string model;
        private int horsePower;
        private double cubicCentimeters;

        public Motorcycle(string model, int horsePower, double cubicCentimeters)
        {
            this.Model = model;
            this.HorsePower = horsePower;
            this.CubicCentimeters = cubicCentimeters;
        }

        public string Model
        {
            get
            {
                return this.model;
            }
            private set
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    //throw new ArgumentException(string.Format(ExceptionMessages.InvalidModel, value, 4));
                    throw new ArgumentException($"Model {value} cannot be less than 4 symbols.");
                }
                if (value.Length < 4)
                {
                    //throw new ArgumentException(string.Format(ExceptionMessages.InvalidModel, value, 4));
                    throw new ArgumentException($"Model {value} cannot be less than 4 symbols.");
                }
                this.model = value;
            }
        }

        public virtual int HorsePower
        {
            get
            {
                return this.horsePower;
            }
            protected set
            {
                this.horsePower = value;
            }
        }

        public double CubicCentimeters
        {
            get
            {
                return this.cubicCentimeters;
            }
            private set
            {
                this.cubicCentimeters = value;
            }
        }

        public double CalculateRacePoints(int laps)
        {
            return (this.cubicCentimeters / (double)(this.horsePower * laps));
        }

    }

    public class PowerMotorcycle : Motorcycle
    {
        public PowerMotorcycle(string model, int horsePower) : base(model, horsePower, 450)
        {

        }

        public override int HorsePower
        {
            get
            {
                return base.HorsePower;
            }
            protected set
            {
                if (value < 70 || value > 100)
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidHorsePower, value));
                    //throw new ArgumentException($"Invalid horse power: {value}.");
                }
                base.HorsePower = value;
            }
        }

    }

    public class SpeedMotorcycle : Motorcycle
    {
        public SpeedMotorcycle(string model, int horsePower) : base(model, horsePower, 125)
        {

        }

        public override int HorsePower
        {
            get
            {
                return base.HorsePower;
            }
            protected set
            {
                if (value < 50 || value > 69)
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidHorsePower, value));
                    //throw new ArgumentException($"Invalid horse power: {value}.");
                }
                base.HorsePower = value;
            }
        }

    }

}
