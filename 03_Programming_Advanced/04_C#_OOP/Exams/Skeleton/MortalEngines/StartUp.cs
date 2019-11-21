namespace MortalEngines
{

    using System;
    using System.Collections.Generic;
    using System.Text;

    using MortalEngines.Entities.Contracts;

    public class StartUp
    {
        public static void Main()
        {
        }
    }

    public abstract class BaseMachine : IMachine
    {

        public BaseMachine(string name, double attackPoints, double defensePoints, double healthPoints)
        {
            this.Name = name;
            this.AttackPoints = attackPoints;
            this.DefensePoints = defensePoints;
            this.HealthPoints = healthPoints;
        }

        public string Name
        {
            get
            {
                return this.Name;
            }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Machine name cannot be null or empty.");
                }
                this.Name = value;
            }
        }
        public IPilot Pilot { get; set; }
        public double HealthPoints { get; set; }
        public double AttackPoints { get; }
        public double DefensePoints { get; }
        public IList<string> Targets { get; }

        public void Attack(IMachine target)
        {

        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            return sb.ToString();
        }
    }
}