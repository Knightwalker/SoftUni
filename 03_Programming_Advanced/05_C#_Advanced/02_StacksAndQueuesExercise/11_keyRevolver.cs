using System;
using System.Collections.Generic;
using System.Linq;

namespace StacksAndQueuesExercise
{
    class Program
    {
        static void Main(string[] args)
        {

            int bulletPrice = int.Parse(Console.ReadLine());
            int gunBarrelSize = int.Parse(Console.ReadLine());
            int[] bulletsArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int[] locksArr = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int intelligenceValue = int.Parse(Console.ReadLine());
            bool intelligenceGathered = false;

            Stack<int> bulletsStack = new Stack<int>(bulletsArr);
            Queue<int> locksQueue = new Queue<int>(locksArr);
            int totalBulletPrice = 0;
            int currentGunBarrelSize = gunBarrelSize;

            while (bulletsStack.Count > 0 && locksQueue.Count > 0)
            {
                int currentBullet = bulletsStack.Pop();
                totalBulletPrice += bulletPrice;
                currentGunBarrelSize--;
                int currentLock = locksQueue.Peek();       

                if (currentBullet <= currentLock)
                {
                    locksQueue.Dequeue();
                    Console.WriteLine("Bang!");
                }
                else
                {
                    Console.WriteLine("Ping!");
                }

                if (bulletsStack.Count > 0 && currentGunBarrelSize == 0) { currentGunBarrelSize = gunBarrelSize; Console.WriteLine("Reloading!"); }
                if (locksQueue.Count <= 0) { intelligenceGathered = true; }
            }

            if (intelligenceGathered)
            {
                Console.WriteLine($"{bulletsStack.Count} bullets left. Earned ${intelligenceValue - totalBulletPrice}");
            } else
            {
                Console.WriteLine($"Couldn't get through. Locks left: {locksQueue.Count}");
            }

        }
    }
}