using System;
using System.Linq;

namespace NestedLoopsExercises
{
    class Program
    {
        static void Main()
        {
            int judges = int.Parse(Console.ReadLine());

            string presentationName = "";

            double currentPresentationGrade = 0;

            double totalGradeSum = 0;

            int gradesCount = 0;

            while ((presentationName = Console.ReadLine()) != "Finish")
            {
                currentPresentationGrade = 0;

                for (int i = 0; i < judges; i++)
                {
                    currentPresentationGrade += double.Parse(Console.ReadLine());
                    gradesCount++;
                }
                totalGradeSum += currentPresentationGrade;

                double averageGradeSum = currentPresentationGrade / judges;

                Console.WriteLine($"{presentationName} - {averageGradeSum:f2}.");
            }
            Console.WriteLine($"Student's final assessment is {totalGradeSum / gradesCount:F2}.");
        }
    }
}
