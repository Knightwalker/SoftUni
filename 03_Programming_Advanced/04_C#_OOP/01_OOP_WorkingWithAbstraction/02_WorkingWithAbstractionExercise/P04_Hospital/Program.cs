using System;
using System.Collections.Generic;
using System.Linq;

namespace P04_Hospital
{
    public class Program
    {
        public static void Main()
        {
            Hospital hospital = new Hospital();
            var listDoctors = hospital.Doctors;
            var listDepartments = hospital.Departments;

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "Output") { break; }

                string[] input = command.Split();
                var departmentName = input[0];
                var firstName = input[1];
                var secondName = input[2];
                var patientName = input[3];

                if (hospital.getDoctor(firstName, secondName) == null)
                {
                    listDoctors.Add(new Doctor(firstName, secondName));
                }

                if (hospital.getDepartment(departmentName) == null)
                {
                    listDepartments.Add(new Department(departmentName));
                }

                if (hospital.hasDepartmentHaveEnoughSpace(departmentName))
                {  
                    var currentDoctor = hospital.getDoctor(firstName, secondName);
                    var currentDepartment = hospital.getDepartment(departmentName);

                    Patient patient = new Patient(patientName);
                    currentDoctor.AddPatient(patient);
      
                    foreach (var room in currentDepartment.Rooms)
                    {
                        if (room.Patients.Count < 3)
                        {
                            room.AddPatient(patient);
                            break;
                        }
                    }    
                }   

            }

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "End") { break; }
            
                string[] args = command.Split();
            
                if (args.Length == 1)
                {
                    var currentDepartment = hospital.getDepartment(args[0]);

                    foreach (var room in currentDepartment.Rooms)
                    {
                        foreach (var patient in room.Patients)
                        {
                            Console.WriteLine(patient.Name);
                        }
                    }     
                }

                else if (args.Length == 2 && int.TryParse(args[1], out int staq))
                {
                    var currentDepartment = hospital.getDepartment(args[0]);

                    foreach (var patient in currentDepartment.Rooms[int.Parse(args[1]) - 1].Patients.OrderBy(x => x.Name))
                    {
                        Console.WriteLine(patient.Name);
                    }

                }
                else
                {
                    var currentDoctor = hospital.getDoctor(args[0], args[1]);

                    foreach (var patient in currentDoctor.Patients.OrderBy(x => x.Name))
                    {
                        Console.WriteLine(patient.Name);
                    }
    
                }
            }
        }

        public class Hospital
        {
            public Hospital()
            {
                this.Departments = new List<Department>();
                this.Doctors = new List<Doctor>();
            }

            public List<Department> Departments;
            public List<Doctor> Doctors;

            public Department getDepartment(string departmentName)
            {
                foreach (var department in this.Departments)
                {
                    if (department.Name == departmentName)
                    {
                        return department;
                    }
                }
                return null;
            }

            public Doctor getDoctor(string firstName, string secondName)
            {
                foreach (var doctor in this.Doctors)
                {
                    if (doctor.FirstName == firstName && doctor.SecondName == secondName)
                    {
                        return doctor;
                    }
                }
                return null;
            }

            public bool hasDepartmentHaveEnoughSpace(string departmentName)
            {
                int index = this.Departments.FindIndex(x => x.Name == departmentName);
                if (index >= 0)
                {
                    return (this.Departments[index].CurrentCapacity < 60);
                }

                return false;   
            }

        }

        public class Department
        {
            public Department(string name)
            {
                this.Name = name;
                this.Rooms = new List<Room>();
                for (int rooms = 0; rooms < 20; rooms++)
                {
                    Room room = new Room();
                    Rooms.Add(room);
                }
            }

            public string Name { get; set; }
            public List<Room> Rooms { get; }

            public int CurrentCapacity
            {
                get
                {
                    int sum = 0;
                    foreach (var room in this.Rooms)
                    {
                        sum += room.Patients.Count;
                    }
                    return sum;
                }
            }

        }

        public class Room
        {
            public Room()
            {
                this.Patients = new List<Patient>();
            }
            public List<Patient> Patients { get; }

            public void AddPatient(Patient patient)
            {
                if (this.Patients.Count < 3)
                {
                    this.Patients.Add(patient);
                }
            }
        }

        public class Doctor
        {
            public Doctor(string firstName, string secondName)
            {
                this.FirstName = firstName;
                this.SecondName = secondName;
                this.Patients = new List<Patient>();
            }

            public string FirstName { get; set; }
            public string SecondName { get; set; }
            public List<Patient> Patients;

            public void AddPatient(Patient patient)
            {
                this.Patients.Add(patient);
            }
        }

        public class Patient
        {
            public Patient(string name)
            {
                this.Name = name;
            }
            public string Name { get; set; }
        }  

    }
}
