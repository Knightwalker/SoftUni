namespace MortalEngines.Core
{
    using System;
    using System.Collections.Generic;

    using Contracts;
    using MortalEngines.Common;
    using MortalEngines.Entities.Contracts;

    public class MachinesManager : IMachinesManager
    {
        private List<IPilot> pilotList;
        private List<IMachine> machineList;

        public MachinesManager()
        {
            this.pilotList = new List<IPilot>();
            this.machineList = new List<IMachine>();
        }

        public string HirePilot(string name)
        {
            int index = pilotList.FindIndex(x => x.Name == name);
            if (index < 0)
            {
                Pilot pilot = new Pilot(name);
                pilotList.Add(pilot);
                return String.Format(OutputMessages.PilotHired, name);
            }
            else
            {
                return String.Format(OutputMessages.PilotExists, name);
            }

        }

        public string ManufactureTank(string name, double attackPoints, double defensePoints)
        {
            int index = machineList.FindIndex(x => x.Name == name);
            if (index < 0)
            {
                ITank tank = new Tank(name, attackPoints, defensePoints);
                machineList.Add(tank);
                return String.Format(OutputMessages.TankManufactured, name, tank.AttackPoints, tank.DefensePoints, (tank.DefenseMode == true ? "ON" : "OFF"));
            }
            else
            {
                return String.Format(OutputMessages.MachineExists, name);
            }

        }

        public string ManufactureFighter(string name, double attackPoints, double defensePoints)
        {
            int index = machineList.FindIndex(x => x.Name == name);
            if (index < 0)
            {
                IFighter fighter = new Fighter(name, attackPoints, defensePoints);
                machineList.Add(fighter);
                return String.Format(OutputMessages.FighterManufactured, name, fighter.AttackPoints, fighter.DefensePoints, (fighter.AggressiveMode == true ? "ON" : "OFF"));
            }
            else
            {
                return String.Format(OutputMessages.MachineExists, name);
            }

        }

        public string EngageMachine(string selectedPilotName, string selectedMachineName)
        {
            int index1 = pilotList.FindIndex(x => x.Name == selectedPilotName);
            int index2 = machineList.FindIndex(x => x.Name == selectedMachineName);

            if (index1 < 0)
            {
                return String.Format(OutputMessages.PilotNotFound, selectedPilotName);
            }
            if (index2 < 0)
            {
                return String.Format(OutputMessages.MachineNotFound, selectedMachineName);
            }

            if (machineList[index2].Pilot != null)
            {
                return String.Format(OutputMessages.MachineHasPilotAlready, selectedMachineName);
            }
            else
            {
                pilotList[index1].AddMachine(machineList[index2]);
                machineList[index2].Pilot = pilotList[index1];
                return String.Format(OutputMessages.MachineEngaged, selectedPilotName, selectedMachineName);
            }

        }

        public string AttackMachines(string attackingMachineName, string defendingMachineName)
        {
            var attackingMachineIndex = machineList.FindIndex(x => x.Name == attackingMachineName);
            var defendingMachineIndex = machineList.FindIndex(x => x.Name == defendingMachineName);

            if (attackingMachineIndex < 0)
            {
                return String.Format(OutputMessages.MachineNotFound, attackingMachineName);
            }
            if (defendingMachineIndex < 0)
            {
                return String.Format(OutputMessages.MachineNotFound, defendingMachineName);
            }

            if (machineList[attackingMachineIndex].HealthPoints == 0)
            {
                return String.Format(OutputMessages.DeadMachineCannotAttack, attackingMachineName);
            }
            if (machineList[defendingMachineIndex].HealthPoints == 0)
            {
                return String.Format(OutputMessages.DeadMachineCannotAttack, defendingMachineName);
            }

            machineList[attackingMachineIndex].Attack(machineList[defendingMachineIndex]);

            return String.Format(OutputMessages.AttackSuccessful, defendingMachineName, attackingMachineName, machineList[defendingMachineIndex].HealthPoints);

        }

        public string PilotReport(string pilotReporting)
        {
            int index = pilotList.FindIndex(x => x.Name == pilotReporting);
            if (index >= 0)
            {
                return pilotList[index].Report();
            }
            else
            {
                return null;
            }

        }

        public string MachineReport(string machineName)
        {
            int index = machineList.FindIndex(x => x.Name == machineName);
            if (index >= 0)
            {
                return machineList[index].ToString();
            }
            else
            {
                return null;
            }

        }

        public string ToggleFighterAggressiveMode(string fighterName)
        {
            int index = machineList.FindIndex(x => x.Name == fighterName);
            if (index >= 0)
            {
                var fighter = machineList[index] as Fighter;
                fighter.ToggleAggressiveMode();
                return String.Format(OutputMessages.FighterOperationSuccessful, fighterName);
            }
            else
            {
                return String.Format(OutputMessages.MachineNotFound, fighterName);
            }
        }

        public string ToggleTankDefenseMode(string tankName)
        {
            int index = machineList.FindIndex(x => x.Name == tankName);
            if (index >= 0)
            {
                var tank = machineList[index] as Tank;
                tank.ToggleDefenseMode();
                return String.Format(OutputMessages.TankOperationSuccessful, tankName);
            }
            else
            {
                return String.Format(OutputMessages.MachineNotFound, tankName);
            }
        }

    }
}