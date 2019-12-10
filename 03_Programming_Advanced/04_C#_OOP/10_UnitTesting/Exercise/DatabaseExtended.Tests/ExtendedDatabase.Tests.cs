using DB;
using System;
using NUnit.Framework;

namespace Tests
{
    public class ExtendedDatabaseTests
    {
        private ExtendedDatabase database;
        Person person1;
        Person person2;

        [SetUp]
        public void Setup()
        {
            person1 = new Person(1, "Johnny");
            person2 = new Person(2, "CecoSpeco");
            this.database = new ExtendedDatabase(new Person[] { person1, person2 });
        }

        [Test]
        public void TestPersonCreation()
        {
            Assert.Multiple(() => {
                Assert.That(person1.Id, Is.EqualTo(1));
                Assert.That(person1.UserName, Is.EqualTo("Johnny"));
            });
        }

        [Test]
        public void ConstructorTestWith0Elements()
        {
            var database = new ExtendedDatabase();
            Assert.AreEqual(database.Count, 0);
        }

        [Test]
        public void TestConstructor1()
        {
            int expectedCount = 2;
            int actualCount = database.Count;
            Assert.AreEqual(expectedCount, actualCount);
        }

        [Test]
        public void TestConstructor2()
        {
            Assert.Throws<ArgumentException>(() => {
                var invalidDatabase = new ExtendedDatabase(new Person[20]);
            });  
        }

        [Test]
        public void TestConstructor3()
        {
            Person[] people = new Person[16];
            for (int i = 0; i < people.Length; i++)
            {
                people[i] = new Person(i, "Gosho" + i);
            }
            var db = new ExtendedDatabase(people);
            Assert.AreEqual(db.Count, 16);
        }

        [Test]
        public void Add17thElement()
        {
            Person[] people = new Person[16];
            for (int i = 0; i < 16; i++)
            {
                people[i] = new Person(i, "Gosho" + i);
            }
            var db = new ExtendedDatabase(people);
            var ex = Assert.Throws<InvalidOperationException>(() => db.Add(person1));
            Assert.That(ex.Message, Is.EqualTo("Array's capacity must be exactly 16 integers!"));
        }

        [Test]
        public void TestConstructor4()
        {
            Person[] people = new Person[17];
            for (int i = 0; i < people.Length; i++)
            {
                people[i] = new Person(i, "Gosho" + i);
            }

            Assert.Throws<ArgumentException>(() =>
            {
                var db = new ExtendedDatabase(people);
            });     

        }

        [Test]
        public void TestConstructor7()
        {
            var database = new ExtendedDatabase();
            Assert.AreEqual(database.Count, 0);
        }

        [Test]
        public void TestMethodAdd2()
        {
            var person3 = new Person(3, "CecoSpeco");

            Assert.Throws<InvalidOperationException>(() => {
                this.database.Add(person3);
            });
        }

        [Test]
        public void TestMethodAdd3()
        {
            var person3 = new Person(2, "Kur1");

            Assert.Throws<InvalidOperationException>(() => {
                this.database.Add(person3);
            });
        }

        [Test]
        public void TestMethodAdd4()
        {
            var person3 = new Person(3, "Kur1");
            this.database.Add(person3);

            int actualCount = 3;
            int expectedCount = this.database.Count;
            Assert.AreEqual(expectedCount, actualCount);
          
        }

        [Test]
        public void TestMethodRemove1()
        {
            this.database.Remove();
            int actualCount = 1;
            int expectedCount = this.database.Count;
            Assert.AreEqual(expectedCount, actualCount);
        }

        [Test]
        public void TestMethodRemove2()
        {
            this.database.Remove();
            this.database.Remove();

            Assert.Throws<InvalidOperationException>(() =>
            {
                this.database.Remove();
            });

        }

        [Test]
        public void TestMethodFindByUsername1()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                string name = "";
                this.database.FindByUsername(name);
            });
        }

        [Test]
        public void TestMethodFindByUsername2()
        {
            Assert.Throws<InvalidOperationException>(() =>
            {
                string name = "kurcho";
                this.database.FindByUsername(name);
            });
        }

        [Test]
        public void TestMethodFindByUsername3()
        {
            string name = "Johnny";
            var actualPerson = this.database.FindByUsername(name);
            var expectedPerson = new Person(1, "Johnny");

            Assert.AreEqual(expectedPerson.Id, actualPerson.Id);
            Assert.AreEqual(expectedPerson.UserName, actualPerson.UserName);
        }

        [Test]
        public void FindByUsernameIsCaseSensitive()
        {
            Assert.That(() => database.FindByUsername("JOHNNY"), Throws.InvalidOperationException);
        }

        [Test]
        public void TestMethodFindById1()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                int id = -1;
                this.database.FindById(id);
            });
        }

        [Test]
        public void TestMethodFindById2()
        {
            Assert.Throws<InvalidOperationException>(() =>
            {
                int id = 5;
                this.database.FindById(id);
            });
        }

        [Test]
        public void TestMethodFindById3()
        {
            var expectedPerson = new Person(3, "SpecoCeco");
            this.database = new ExtendedDatabase(new Person[] { expectedPerson });

            int id = 3;
            var actualPerson = this.database.FindById(id);

            Assert.AreEqual(expectedPerson, actualPerson);
        }

    }
}