using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace IteratorsAndComparators
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var book1 = new Book("1984", 1980, new string[] { "Jorge Orwell" });
            var book2 = new Book("The Godfather", 1981, new string[] { "Mario Puzo" });
            var book3 = new Book("The lord of the rings", 1954, new string[] { "J. Tolkin" });
            var library = new Library(new Book[3] { book1, book2, book3 });

            foreach (var book in library)
            {
                Console.WriteLine(book);
            }
        }
    }

    public class Book : IComparable<Book>
    {
        public Book(string title, int year, params string[] authors)
        {
            this.Title = title;
            this.Year = year;
            this.Authors = authors.ToList();
        }

        public string Title { get; set; }
        public int Year { get; set; }
        public IReadOnlyCollection<string> Authors { get; set; }

        public int CompareTo(Book other)
        {
            int result = this.Year.CompareTo(other.Year);
            if (result == 0)
            {
                result = this.Title.CompareTo(other.Title);
            }
            return result;
        }

        public override string ToString()
        {
            return $"{this.Title} - {this.Year}";
        }
    }

    public class Library : IEnumerable<Book>
    {
        private SortedSet<Book> books;
        private BookComparator comparator;

        public Library(params Book[] books)
        {
            this.books = new SortedSet<Book>(books);
            this.comparator = new BookComparator();
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

            public LibraryIterator(IEnumerable<Book> books)
            {
                //this.Reset();
                this.books = new List<Book>(books);
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

    public class BookComparator : IComparer<Book>
    {
        public int Compare(Book first, Book second)
        {
            int result = first.Title.CompareTo(second.Title);
            if (result == 0)
            {
                result = second.Year.CompareTo(first.Year);
            }
            return result;
        }
    }

}
