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
        private string name;
        private IPilot pilot;

        public BaseMachine(string name, double attackPoints, double defensePoints, double healthPoints)
        {
            this.Name = name;
            this.AttackPoints = attackPoints;
            this.DefensePoints = defensePoints;
            this.HealthPoints = healthPoints;

            this.Targets = new List<string>();
            this.pilot = null;
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Machine name cannot be null or empty.");
                }
                this.name = value;
            }
        }

        public IPilot Pilot
        {
            get
            {
                return this.pilot;
            }
            set
            {
                if (value == null)
                {
                    throw new NullReferenceException("Pilot cannot be null.");
                }

                this.pilot = value;
            }
        }

        public double HealthPoints { get; set; }
        public double AttackPoints { get; protected set; }
        public double DefensePoints { get; protected set; }
        public IList<string> Targets { get; }

        public void Attack(IMachine target)
        {

            if (target == null)
            {
                throw new NullReferenceException("Target cannot be null");
            }

        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"- {this.Name}");
            sb.AppendLine($" *Type: {this.GetType().Name}");
            sb.AppendLine($" *Health: {this.HealthPoints}");
            sb.AppendLine($" *Attack: {this.AttackPoints}");
            sb.AppendLine($" *Defense: {this.DefensePoints}");

            if (this.Targets.Count > 0)
            {
                sb.AppendLine($" *Targets: {string.Join(", ", this.Targets)}");
            }
            else
            {
                sb.AppendLine($" *Targets: None");
            }

            return sb.ToString();
        }

    }

    public class Fighter : BaseMachine, IFighter
    {
        public Fighter(string name, double attackPoints, double defensePoints) : base(name, attackPoints + 50, defensePoints - 25, 200)
        {
            this.AggressiveMode = true;
        }

        public bool AggressiveMode { get; private set; }

        public void ToggleAggressiveMode()
        {
            if (this.AggressiveMode == true)
            {
                this.AggressiveMode = false;
                this.AttackPoints -= 50;
                this.DefensePoints += 25;
            }
            else if (this.AggressiveMode == false)
            {
                this.AggressiveMode = true;
                this.AttackPoints += 50;
                this.DefensePoints -= 25;
            }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(base.ToString());

            if (this.AggressiveMode == true)
            {
                sb.AppendLine($" *Aggressive: ON");
            }
            else
            {
                sb.AppendLine($" *Aggressive: OFF");
            }

            return sb.ToString();
        }

    }

    public class Tank : BaseMachine, ITank
    {
        public Tank(string name, double attackPoints, double defensePoints) : base(name, attackPoints - 40, defensePoints + 30, 100)
        {
            this.DefenseMode = true;
        }

        public bool DefenseMode { get; private set; }

        public void ToggleDefenseMode()
        {
            if (this.DefenseMode == true)
            {
                this.DefenseMode = false;
                this.AttackPoints += 40;
                this.DefensePoints -= 30;
            }
            else if (this.DefenseMode == false)
            {
                this.DefenseMode = true;
                this.AttackPoints -= 40;
                this.DefensePoints += 30;
            }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(base.ToString());

            if (this.DefenseMode == true)
            {
                sb.AppendLine($" *Defense: ON");
            }
            else
            {
                sb.AppendLine($" *Defense: OFF");
            }

            return sb.ToString();
        }

    }

    public class Pilot : IPilot
    {
        private string name;

        public Pilot(string name)
        {
            this.Name = name;
            this.Machines = new List<IMachine>();
        }

        public string Name
        {
            get { return this.name; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value) || string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("Pilot name cannot be null or empty string.");
                }

                this.name = value;
            }
        }

        public List<IMachine> Machines { get; }

        public void AddMachine(IMachine machine)
        {
            if (machine == null)
            {
                throw new NullReferenceException("Null machine cannot be added to the pilot.");
            }

            this.Machines.Add(machine);

        }

        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{this.Name} - {this.Machines.Count} machines");

            foreach (var machine in this.Machines)
            {
                sb.AppendLine(machine.ToString());
            }

            return sb.ToString();

        }

    }

}