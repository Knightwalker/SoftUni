using CommandPattern.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

public class Engine : IEngine
{
    public Engine(ICommandInterpreter command)
    {
        this.commandInterpreter = command;
    }

    private readonly ICommandInterpreter commandInterpreter;

    public void Run()
    {
        while (true)
        {
            string input = Console.ReadLine();

            string result = this.commandInterpreter.Read(input);

            Console.WriteLine(result);
        }
    }
}
