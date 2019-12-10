using DB;
using System;
using NUnit.Framework;

namespace Tests
{
    public class DatabaseTests
    {
        private Database database;

        [SetUp]
        public void Setup()
        {
            this.database = new Database(new int[] { 1, 2 });
        }

        [Test]
        public void TestConstructor1()
        {
            int expectedCount = 2;
            int actualCount = database.Count;
            Assert.AreEqual(expectedCount, actualCount);
        }

        [Test]
        public void TestMethodAdd1()
        {
            this.database.Add(3);

            int expectedCount = 3;
            int actualCount = database.Count;
            Assert.AreEqual(expectedCount, actualCount);
        }

        [Test]
        public void TestMethodAdd2()
        {
            for (int i = 3; i <= 16; i++)
            {
                this.database.Add(i);
            }

            Assert.Throws<InvalidOperationException>(() => {
                this.database.Add(17);
            });
        }

        [Test]
        public void TestMethodRemove1()
        {
            this.database.Remove();

            int expectedCount = 1;
            int actualCount = database.Count;
            Assert.AreEqual(expectedCount, actualCount);
        }

        [Test]
        public void TestMethodRemove2()
        {
            this.database.Remove();
            this.database.Remove();

            Assert.Throws<InvalidOperationException>(() => {
                this.database.Remove();
            });
        }

        [Test]
        public void TestFetchMethod1()
        {
            var expectedCollection = new int[] { 1, 2 };
            var actualCollection = this.database.Fetch();

            CollectionAssert.AreEqual(expectedCollection, actualCollection);

        }

    }
}