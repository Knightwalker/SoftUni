using System;
using System.Collections.Generic;
using System.Linq;

namespace KaliESmotanaNoQGushkamIObichamISladoledSEX
{
    class Program
    {
        static void Main(string[] args)
        {
            var dictMOBA = new Dictionary<string, Dictionary<string, int>>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Season end") { break; }

                if (input.Split(" ").Contains("->"))
                {
                    string[] newInput = input.Split(" -> ");
                    string player = newInput[0];
                    string position = newInput[1];
                    int skill = int.Parse(newInput[2]);

                    if (!dictMOBA.ContainsKey(player))
                    {
                        dictMOBA[player] = new Dictionary<string, int>();
                    }

                    if (!dictMOBA[player].ContainsKey(position))
                    {
                        dictMOBA[player][position] = skill;
                    }
                    else
                    {
                        if (skill > dictMOBA[player][position])
                        {
                            dictMOBA[player][position] = skill;
                        }
                    }


                }
                else
                {
                    string[] newInput = input.Split(" vs ");
                    string playerOne = newInput[0];
                    string playerTwo = newInput[1];
                    bool duel = false;
                    string position = "";

                    if (dictMOBA.ContainsKey(playerOne) && dictMOBA.ContainsKey(playerTwo))
                    {
                        int playerOneTotalPoints = 0;
                        int playerTwoTotalPoints = 0;
                        foreach (var item in dictMOBA[playerOne])
                        {
                            playerOneTotalPoints += item.Value;
                        }
                        foreach (var item in dictMOBA[playerTwo])
                        {
                            playerTwoTotalPoints += item.Value;
                        }

                        foreach (var item in dictMOBA[playerOne])
                        {
                            if (dictMOBA[playerTwo].ContainsKey(item.Key))
                            {
                                duel = true;
                                position = item.Key;
                                break;
                            }
                        }
                    }

                    if (duel)
                    {
                        if (dictMOBA[playerOne][position] > dictMOBA[playerTwo][position])
                        {
                            //dictMOBA[playerTwo].Remove(position);
                            dictMOBA.Remove(playerTwo);
                        }
                        else if (dictMOBA[playerOne][position] < dictMOBA[playerTwo][position])
                        {
                            //dictMOBA[playerOne].Remove(position);
                            dictMOBA.Remove(playerOne);
                        }
                    }

                }

            }

            foreach (var item in dictMOBA.OrderByDescending(x => x.Value.Values.Sum()))
            {
                Console.WriteLine($"{item.Key}: {item.Value.Values.Sum()} skill");
                foreach (var item2 in item.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"- {item2.Key} <::> {item2.Value}");
                }
            }

        }
    }
}