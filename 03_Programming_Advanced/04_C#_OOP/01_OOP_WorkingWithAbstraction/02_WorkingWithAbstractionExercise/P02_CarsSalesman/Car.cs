using System.Text;

namespace P02_CarsSalesman
{
    class Car
    {
        public string model;
        public Engine engine;
        public int weight;
        public string color;

        public Car(string model, Engine engine)
        {
            this.model = model;
            this.engine = engine;
            this.weight = -1;
            this.color = "n/a";
        }

        public Car(string model, Engine engine, int weight) : this(model, engine)
        {
            this.weight = weight;
            this.color = "n/a";
        }

        public Car(string model, Engine engine, string color) : this(model, engine)
        {
            this.weight = -1;
            this.color = color;
        }

        public Car(string model, Engine engine, int weight, string color) : this(model, engine)
        {
            this.weight = weight;
            this.color = color;
        }


        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendFormat($"{this.model}:\n");
            sb.Append(this.engine.ToString());
            sb.AppendFormat($"  Weight: {(this.weight == -1 ? "n/a" : this.weight.ToString())}\n");
            sb.AppendFormat($"  Color: {this.color}");

            return sb.ToString();
        }
    }

}
