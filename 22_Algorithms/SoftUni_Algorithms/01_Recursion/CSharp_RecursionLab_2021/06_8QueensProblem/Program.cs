using System;
using System.Threading;

namespace _06_8QueensProblem
{
    class Program
    {
        static void Main(string[] args)
        {
            char[,] chessBoard = new char[8, 8];
            int solutions = 0;
            int queens = 0;
            FillMatrix(ref chessBoard);
            PlaceQueen(ref chessBoard, ref solutions, ref queens, 0);

        }

        public static void PlaceQueen(ref char[,] chessBoard, ref int solutions, ref int queens, int y)
        {
            if (y >= 8)
            {
                //Console.WriteLine(++solutions);
                PrintMatrix(ref chessBoard);
                return;
            }

            for (int x = 0; x < 8; x++)
            {
                if (!CanPlaceQueen(ref chessBoard, y, x)) { continue; }

                chessBoard[y, x] = '*';
                queens++;
                //PrintMatrix(ref chessBoard);
                //Thread.Sleep(500);

                PlaceQueen(ref chessBoard, ref solutions, ref queens, y + 1);

                queens--;
                chessBoard[y, x] = '-';


            }

        }

        public static bool CanPlaceQueen(ref char[,] chessBoard, int initialY, int initialX)
        {
            int y = initialY;
            int x = initialX;

            // check if we are out of the board
            if (y < 0 || y >= chessBoard.GetLength(0) || x < 0 || x >= chessBoard.GetLength(1))
            {
                return false;
            }

            // check if space is free
            if (chessBoard[y, x] == '*')
            {
                return false;
            }

            // vertical
            y = -1;
            x = initialX;

            while (true)
            {
                y++;
                if (y >= 8) { break; }
                if (chessBoard[y, x] == '*')
                {
                    return false;
                }
            }

            // horizontal
            y = initialY;
            x = -1;

            while (true)
            {
                x++;
                if (x >= 8) { break; }
                if (chessBoard[y, x] == '*')
                {
                    return false;
                }
            }

            // diagonal down
            y = initialY;
            x = initialX;
            while (true)
            {
                y++;
                x++;
                if (y < 0 || y >= chessBoard.GetLength(0) || x < 0 || x >= chessBoard.GetLength(1))
                {
                    break;
                }
                if (chessBoard[y, x] == '*')
                {
                    return false;
                }
            }

            // diagonal up
            y = initialY;
            x = initialX;
            while (true)
            {
                y--;
                x--;
                if (y < 0 || y >= chessBoard.GetLength(0) || x < 0 || x >= chessBoard.GetLength(1))
                {
                    break;
                }
                if (chessBoard[y, x] == '*')
                {
                    return false;
                }
            }

            // anti-diagonal down
            y = initialY;
            x = initialX;
            while (true)
            {
                y++;
                x--;
                if (y < 0 || y >= chessBoard.GetLength(0) || x < 0 || x >= chessBoard.GetLength(1))
                {
                    break;
                }
                if (chessBoard[y, x] == '*')
                {
                    return false;
                }
            }

            // anti-diagonal up
            y = initialY;
            x = initialX;
            while (true)
            {
                y--;
                x++;
                if (y < 0 || y >= chessBoard.GetLength(0) || x < 0 || x >= chessBoard.GetLength(1))
                {
                    break;
                }
                if (chessBoard[y, x] == '*')
                {
                    return false;
                }
            }

            // if we are here, then the attack vectors are clear and we can place a queen.
            return true;
        }

        public static void PrintMatrix(ref char[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }

        public static void FillMatrix(ref char[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = '-';
                }
            }
        }

    }
}