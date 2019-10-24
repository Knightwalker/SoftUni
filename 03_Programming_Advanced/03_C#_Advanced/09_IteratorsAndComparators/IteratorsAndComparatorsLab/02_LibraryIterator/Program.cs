using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace IteratorsAndComparators
{
    class Program
    {
        static void Main(string[] args)
        {
            var book1 = new Book("1984", 1980, new string[] { "Jorge Orwell" });
            var book2 = new Book("The Godfather", 1981, new string[] { "Mario Puzo" });
            var book3 = new Book("The lord of the rings", 1954, new string[] { "J. Tolkin" });
            var library = new Library(new Book[3] { book1, book2, book3 });

            foreach (var book in library)
            {
                Console.WriteLine($"{string.Join(", ", book.Authors)} - {book.Title} ({book.Year})");
            }
        }
    }

    public class Book
    {
        public Book(string title, int year, params string[] authors)
        {
            this.Title = title;
            this.Year = year;
            this.Authors = authors.ToList();
        }

        public string Title { get; set; }
        public int Year { get; set; }
        public List<string> Authors { get; set; }
    }

    public class Library : IEnumerable<Book>
    {
        private List<Book> books;

        public Library(params Book[] books)
        {
            this.books = new List<Book>(books);
        }

        public IEnumerator<Book> GetEnumerator()
        {
            return new LibraryIterator(this.books);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        private class LibraryIterator : IEnumerator<Book>
        {
            private readonly List<Book> books;
            private int currentIndex = -1;

            public LibraryIterator(List<Book> books)
            {
                //this.Reset();
                this.books = books;
            }

            public Book Current => this.books[currentIndex];

            object IEnumerator.Current => this.Current;

            public void Dispose()
            {
                //throw new NotImplementedException();
            }

            public bool MoveNext()
            {
                this.currentIndex++;
                if (this.currentIndex >= this.books.Count)
                {
                    return false;
                }
                return true;
            }

            public void Reset()
            {
                this.currentIndex = -1;
            }
        }

    }

}
