using ViceCity.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using ViceCity.IO.Contracts;
using ViceCity.IO;

namespace ViceCity.Core
{
    public class Engine : IEngine
    {
        private IReader reader;
        private IWriter writer;
        private Controller controller;
        private StringBuilder sb;
        public Engine()
        {
            this.reader = new Reader();
            this.writer = new Writer();
            controller = new Controller();
            sb = new StringBuilder();
        }
        public void Run()
        {
            while (true)
            {
                var input = reader.ReadLine().Split();
                if (input[0] == "Exit")
                {
                    writer.Write(sb.ToString().Trim());
                    Environment.Exit(0);
                }
                try
                {
                    if (input[0] == "AddPlayer")
                    {
                        sb.AppendLine(controller.AddPlayer(input[1]));
                    }
                    else if (input[0] == "AddGun")
                    {
                        sb.AppendLine(controller.AddGun(input[1], input[2]));
                    }
                    else if (input[0] == "AddGunToPlayer")
                    {
                        sb.AppendLine(controller.AddGunToPlayer(input[1]));
                    }
                    else if (input[0] == "Fight")
                    {
                        sb.AppendLine(controller.Fight());
                    }            
                }
                catch (Exception ex)
                {
                    sb.AppendLine(ex.Message);
                }
            }
        }
    }
}
