using System.Text;

namespace P02_CarsSalesman
{
    class Engine
    {
        public string model;
        public int power;
        public int displacement;
        public string efficiency;

        public Engine(string model, int power)
        {
            this.model = model;
            this.power = power;
            this.displacement = -1;
            this.efficiency = "n/a";
        }

        public Engine(string model, int power, int displacement) : this(model, power)
        {
            this.displacement = displacement;
            this.efficiency = "n/a";
        }

        public Engine(string model, int power, string efficiency) : this(model, power)
        {
            this.displacement = -1;
            this.efficiency = efficiency;
        }

        public Engine(string model, int power, int displacement, string efficiency) : this(model, power)
        {
            this.displacement = displacement;
            this.efficiency = efficiency;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendFormat($"  {this.model}:\n");
            sb.AppendFormat($"    Power: {this.power}\n");
            sb.AppendFormat($"    Displacement: {(this.displacement == -1 ? "n/a" : this.displacement.ToString())}\n");
            sb.AppendFormat($"    Efficiency: {this.efficiency}\n");

            return sb.ToString();
        }
    }

}
