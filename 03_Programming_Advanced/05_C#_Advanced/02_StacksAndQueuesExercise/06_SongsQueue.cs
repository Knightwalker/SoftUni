using System;
using System.Collections.Generic;

namespace StacksAndQueuesLab
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] songs = Console.ReadLine().Split(", ");
            Queue<string> songsPlaylistQueue = new Queue<string>();
            foreach (var song in songs) { songsPlaylistQueue.Enqueue(song); }

            while (songsPlaylistQueue.Count > 0)
            {
                string[] commandArr = Console.ReadLine().Split(" ");
                if (commandArr[0] == "Add")
                {
                    string newSong = "";
                    int commandArrLenght = commandArr.Length;
                    for (int i = 1; i < commandArrLenght; i++)
                    {
                        newSong += commandArr[i];
                        if (i != commandArr.Length - 1) { newSong += " "; }
                    }
                    // check if the song is already contained
                    if (songsPlaylistQueue.Contains(newSong))
                    {
                        Console.WriteLine(newSong + " is already contained!");
                    }
                    else
                    {
                        songsPlaylistQueue.Enqueue(newSong);
                    }
                }
                else if (commandArr[0] == "Play")
                {
                    songsPlaylistQueue.Dequeue();
                }
                else if (commandArr[0] == "Show")
                {
                    Console.WriteLine(String.Join(", ", songsPlaylistQueue));
                }
            }

            Console.WriteLine("No more songs!");

        }
    }
}