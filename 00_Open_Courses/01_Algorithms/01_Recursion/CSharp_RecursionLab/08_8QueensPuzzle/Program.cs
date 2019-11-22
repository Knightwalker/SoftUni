using System;

namespace _08_8QueensPuzzle
{
    class Program
    {
        static void Main(string[] args)
        {

            const int Size = 8;
            string[][] chessBoard = new string[][]
            {
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
                new string[] { "-", "-", "-", "-", "-", "-", "-", "-" },
            };

            int solutions = 0;
            int queens = 0;
            PutQueens(chessBoard, ref queens, ref solutions, 0);

        }

        static void PutQueens(string[][] chessBoard, ref int queens, ref int solutions, int row)
        {
            if (row == 8 && queens == 8)
            {
                // Print solution
                for (int i = 0; i < 8; i++)
                {
                    for (int j = 0; j < 8; j++)
                    {
                        Console.Write(chessBoard[i][j] + " ");
                    }
                    Console.WriteLine();
                }
                Console.WriteLine(++solutions);
                Console.WriteLine();
                return;
            }

            for (int col = 0; col < 8; col++)
            {
                if (canPlaceQueen(chessBoard, row, col))
                {
                    chessBoard[row][col] = "*"; // place the queen
                    queens++;
                    PutQueens(chessBoard, ref queens, ref solutions, row + 1); // solve for next queen
                    chessBoard[row][col] = "-"; // backtrack
                    queens--;
                }
            }

            // if we are here that means we haven't found solution
            // e.g the program reached this end and placed no queens
            // Console.WriteLine("No solution");

        }

        static bool canPlaceQueen(string[][] chessBoard, int row, int col)
        {
            // check up
            int y = row;
            int x = col;

            while (true)
            {
                y--;
                if (y < 0) { break; }
                if (chessBoard[y][x] == "*")
                {
                    return false;
                }
            }

            // check down
            y = row;
            x = col;

            while (true)
            {
                y++;
                if (y >= 8) { break; }
                if (chessBoard[y][x] == "*")
                {
                    return false;
                }
            }

            // since we are filling one column at a time,
            // we will check if no queen is placed in that particular row
            for (int i = 0; i < 8; i++)
            {
                if (chessBoard[row][i] == "*")
                {
                    return false;
                }
            }

            // we are filling one column at a time,so we need to check the upper and
            // diagonal as well
            // check upper diagonal
            for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
            {
                if (chessBoard[i][j] == "*")
                {
                    return false;
                }
            }

            for (int i = row, j = col; i < 8 && j < 8; i++, j++)
            {
                if (chessBoard[i][j] == "*")
                {
                    return false;
                }
            }

            // check lower diagonal
            for (int i = row, j = col; i < chessBoard.Length && j >= 0; i++, j--)
            {
                if (chessBoard[i][j] == "*")
                {
                    return false;
                }
            }

            for (int i = row, j = col; i >= 0 && j < 8; i--, j++)
            {
                if (chessBoard[i][j] == "*")
                {
                    return false;
                }
            }

            // if we are here that means we are safe to place Queen at row, col
            return true;
        }

    }
}