using System;
using System.Collections.Generic;
using System.Linq;

class MainClass {
  public static void Main (string[] args) {
    List<string> words = Console.ReadLine().Split(' ').ToList();
    words.Sort();

    foreach (string a in words) {
      Console.Write(a + " ");
    }
  }
}