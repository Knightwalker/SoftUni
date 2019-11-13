using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _08_MilitaryElite
{
    public class StartUp
    {
        static void Main(string[] args)
        {

            List<ISoldier> myArmy = new List<ISoldier>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End") { break; }

                string[] inputArr = input.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                if (inputArr[0] == "Private")
                {
                    string id = inputArr[1];
                    string firstName = inputArr[2];
                    string lastName = inputArr[3];
                    decimal salary = decimal.Parse(inputArr[4]);
                    Private privateSoldier = new Private(id, firstName, lastName, salary);
                    myArmy.Add(privateSoldier);
                }
                else if (inputArr[0] == "Spy")
                {
                    string id = inputArr[1];
                    string firstName = inputArr[2];
                    string lastName = inputArr[3];
                    int codeNumber = int.Parse(inputArr[4]);
                    Spy privateSoldier = new Spy(id, firstName, lastName, codeNumber);
                    myArmy.Add(privateSoldier);
                }
                else if (inputArr[0] == "LieutenantGeneral")
                {
                    string id = inputArr[1];
                    string firstName = inputArr[2];
                    string lastName = inputArr[3];
                    decimal salary = decimal.Parse(inputArr[4]);

                    LieutenantGeneral lieutenantGeneral = new LieutenantGeneral(id, firstName, lastName, salary);
                    for (int i = 5; i < inputArr.Length; i++)
                    {
                        Private soldier = (Private)myArmy.Single(s => s.Id == inputArr[i]);
                        lieutenantGeneral.AddPrivate(soldier);
                    }        
                    myArmy.Add(lieutenantGeneral);

                }
                else if (inputArr[0] == "Engineer")
                {
                    string id = inputArr[1];
                    string firstName = inputArr[2];
                    string lastName = inputArr[3];
                    decimal salary = decimal.Parse(inputArr[4]);
                    string corps = inputArr[5];

                    if (corps != "Airforces" && corps != "Marines") { continue; }

                    List<Part> parts = new List<Part>();
                    for (int i = 6; i < inputArr.Length; i+=2)
                    {
                        string partName = inputArr[i];
                        int repairHours = int.Parse(inputArr[i + 1]);
                        Part part = new Part(partName, repairHours);
                        parts.Add(part);
                    }

                    Engineer privateEngineer = new Engineer(id, firstName, lastName, salary, corps, parts);
                    myArmy.Add(privateEngineer);
                }
                else if (inputArr[0] == "Commando")
                {
                    string id = inputArr[1];
                    string firstName = inputArr[2];
                    string lastName = inputArr[3];
                    decimal salary = decimal.Parse(inputArr[4]);
                    string corps = inputArr[5];

                    if (corps != "Airforces" && corps != "Marines") { continue; }

                    List<Mission> missions = new List<Mission>();
                    for (int i = 6; i < inputArr.Length; i += 2)
                    {
                        string codeName = inputArr[i];
                        string state = inputArr[i + 1];
                        if (state != "inProgress" && state != "Finished") { continue; }
                        Mission mission = new Mission(codeName, state);
                        missions.Add(mission);
                    }

                    Commando privateCommando = new Commando(id, firstName, lastName, salary, corps, missions);
                    myArmy.Add(privateCommando);
                }
            }

            foreach (var soldier in myArmy)
            {
                Console.WriteLine(soldier.ToString());
            }


        }
    }

    public class Soldier : ISoldier
    {

        public Soldier(string id, string firstName, string lastName)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {Id}";
        }

    }

    public class Private : Soldier, IPrivate
    {
        public Private(string id, string firstName, string lastName, decimal salary) : base(id, firstName, lastName)
        {
            this.Salary = salary;
        }

        public decimal Salary { get; set; }

        public override string ToString()
        {
            return $"Name: {this.FirstName} {this.LastName} Id: {this.Id} Salary: {this.Salary:F2}";
        }

    }

    public class Spy : Soldier, ISpy
    {
        public Spy(string id, string firstName, string lastName, int codeNumber) : base(id, firstName, lastName)
        {
            this.CodeNumber = codeNumber;
        }

        public int CodeNumber { get; private set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {this.FirstName} {this.LastName} Id: {this.Id}");
            sb.AppendLine($"Code Number: {CodeNumber}");

            return sb.ToString().Trim();
        }

    }



    public class LieutenantGeneral : Private, ILeutenantGeneral
    {
        private List<IPrivate> privates;

        public LieutenantGeneral(string id, string firstName, string lastName, decimal salary) : base(id, firstName, lastName, salary)
        {
            this.privates = this.privates = new List<IPrivate>();
        }

        public IReadOnlyCollection<IPrivate> Privates
        {
            get
            {
                return this.privates;
            }
        }

        public void AddPrivate(Private newPrivate)
        {
            this.privates.Add(newPrivate);
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {this.FirstName} {this.LastName} Id: {this.Id} Salary: {this.Salary:F2}");
            sb.AppendLine($"Privates:");

            foreach (var soldier in this.Privates)
            {
                sb.AppendLine($"  Name: {soldier.FirstName} {soldier.LastName} Id: {soldier.Id} Salary: {soldier.Salary:F2}");
            }

            return sb.ToString().Trim();
        }

    }

    public class SpecialisedSoldier : Private
    {
        public SpecialisedSoldier(string id, string firstName, string lastName, decimal salary, string corps) : base(id, firstName, lastName, salary)
        {
            this.Corps = corps;
        }

        public string Corps { get; set; }
    }

    public class Engineer : SpecialisedSoldier
    {
        public Engineer(string id, string firstName, string lastName, decimal salary, string corps, List<Part> parts) : base(id, firstName, lastName, salary, corps)
        {
            this.Parts = parts;
        }

        public List<Part> Parts { get; set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {this.FirstName} {this.LastName} Id: {this.Id} Salary: {this.Salary:F2}");
            sb.AppendLine($"Corps: {this.Corps}");
            sb.AppendLine($"Repairs:");

            foreach (var part in this.Parts)
            {
                sb.AppendLine($"  Part Name: {part.PartName} Hours Worked: {part.RepairHours}");
            }

            return sb.ToString().Trim();
        }

    }

    public class Commando : SpecialisedSoldier
    {
        public Commando(string id, string firstName, string lastName, decimal salary, string corps, List<Mission> missions) : base(id, firstName, lastName, salary, corps)
        {
            this.Missions = missions;
        }

        public List<Mission> Missions { get; set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Name: {this.FirstName} {this.LastName} Id: {this.Id} Salary: {this.Salary:F2}");
            sb.AppendLine($"Corps: {this.Corps}");
            sb.AppendLine($"Missions:");

            foreach (var mission in this.Missions)
            {
                sb.AppendLine($"  Code Name: {mission.CodeName} State: {mission.State}");
            }

            return sb.ToString().Trim();
        }

    }


    public class Part
    {
        public Part(string partName, int repairHours)
        {
            this.PartName = partName;
            this.RepairHours = repairHours;
        }

        public string PartName { get; set; }
        public int RepairHours { get; set; }
    }

    public class Mission
    {
        public Mission(string codeName, string state)
        {
            this.CodeName = codeName;
            this.State = state;
        }

        public string CodeName { get; set; }
        public string State { get; set; }
    }

}