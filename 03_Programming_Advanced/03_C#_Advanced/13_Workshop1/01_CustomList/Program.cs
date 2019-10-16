using System;

namespace _01_CustomList
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = new CustomList();

            for (int i = 0; i < 10; i++)
            {
                list.Add(i);
            }

            list.RemoveAt(2);
        }
    }

    public class CustomList
    {
        private int[] items;

        public CustomList()
        {
            this.items = new int[2];
            this.Count = 0;
            this.Capacity = 2;
        }

        public int Count { get; private set; }
        public int Capacity { get; private set; }

        // operation indexer
        public int this[int index]
        {
            get
            {
                this.ValidateIndex(index);
                return this.items[index];
            }
            set
            {
                this.ValidateIndex(index);
                this.items[index] = value;
            }
        }

        public void Add(int element)
        {
            if (this.Count == this.Capacity) { this.ReSize(); }

            this.items[this.Count] = element;
            this.Count++;
        }

        public void RemoveAt(int index)
        {
            this.ValidateIndex(index);

            int element = this.items[index];
            this.items[index] = default(int);
            this.ReIndex(index);
            this.Count--;

            if (this.Count * 4 < this.Capacity) { Shrink(); }
        }

        private void ReSize()
        {
            int[] tempArr = new int[this.Count * 2];
            for (int i = 0; i < this.Count; i++)
            {
                tempArr[i] = this.items[i];
            }
            this.items = tempArr;
            this.Capacity *= 2;
        }

        private void ReIndex(int index)
        {
            for (int i = index; i < this.Count - 1; i++)
            {
                this.items[i] = this.items[i + 1];
            }

            this.items[this.Count - 1] = default(int);
        }

        private void Shrink()
        {
            int[] tempArr = new int[this.Capacity / 2];
            for (int i = 0; i < this.Count; i++)
            {
                tempArr[i] = this.items[i];
            }
            this.items = tempArr;
            this.Capacity /= 2;
        }

        // Validator Methods
        private void ValidateIndex(int index)
        {
            if (index < 0 || index >= this.Count)
            {
                throw new IndexOutOfRangeException();
            }
        }

    }
}




