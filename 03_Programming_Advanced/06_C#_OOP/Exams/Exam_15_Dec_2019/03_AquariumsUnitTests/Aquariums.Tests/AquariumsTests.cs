namespace Aquariums.Tests
{
    using System;
    using NUnit.Framework;

    public class AquariumsTests
    {
        private Aquarium aquarium;

        [SetUp]
        public void Setup()
        {
            this.aquarium = new Aquarium("myAquarium", 10);
        }

        [Test]
        public void ConstructorShouldWorkCorrectly()
        {
            Assert.Multiple(() => {
                Assert.That(aquarium.Name, Is.EqualTo("myAquarium"));
                Assert.That(aquarium.Capacity, Is.EqualTo(10));
                Assert.That(aquarium.Count, Is.EqualTo(0));
            });
        }

        [Test]
        public void NamePropertyShouldThrow()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                Aquarium newAquarium = new Aquarium(null, 10);
            });
        }

        [Test]
        public void CapacityPropertyShouldThrow()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                Aquarium newAquarium = new Aquarium("myAquarium", -10);
            });
        }

        [Test]
        public void AddShouldWorkProperly()
        {
            Fish fish = new Fish("gosho");
            aquarium.Add(fish);

            int expectedCount = 1;
            int actualCount = aquarium.Count;
            Assert.AreEqual(expectedCount, actualCount);
        }

        [Test]
        public void AddShouldBeInvalid()
        {
            for (int i = 1; i <= 10; i++)
            {
                aquarium.Add(new Fish("gosho" + i));
            }

            Assert.Throws<InvalidOperationException>(() =>
            {
                aquarium.Add(new Fish("gosho" + 11));
            });
        }

        [Test]
        public void RemoveShouldWorkProperly()
        {
            for (int i = 1; i <= 10; i++)
            {
                aquarium.Add(new Fish("gosho" + i));
            }

            aquarium.RemoveFish("gosho10");
            Assert.AreEqual(9, aquarium.Count);
        }

        [Test]
        public void RemoveShouldBeInvalid()
        {
            for (int i = 1; i <= 10; i++)
            {
                aquarium.Add(new Fish("gosho" + i));
            }

            Assert.Throws<InvalidOperationException>(() =>
            {
                aquarium.RemoveFish("pesho");
            });
        }

        [Test]
        public void SellFishShouldWork()
        {
            for (int i = 1; i <= 10; i++)
            {
                aquarium.Add(new Fish("gosho" + i));
            }

            Fish actualFish = aquarium.SellFish("gosho10");
            Assert.AreEqual("gosho10", actualFish.Name);
            Assert.AreEqual(false, actualFish.Available);
            Assert.AreEqual(10, aquarium.Count);
        }

        [Test]
        public void SellFishShouldBeInvalid()
        {
            for (int i = 1; i <= 10; i++)
            {
                aquarium.Add(new Fish("gosho" + i));
            }

            Assert.Throws<InvalidOperationException>(() =>
            {
                aquarium.SellFish("pesho");
            });
        }

        [Test]
        public void ReportShouldBeWorking()
        {
            for (int i = 1; i <= 10; i++)
            {
                aquarium.Add(new Fish("gosho" + i));
            }

            string expectedReport = "Fish available at myAquarium: gosho1, gosho2, gosho3, gosho4, gosho5, gosho6, gosho7, gosho8, gosho9, gosho10";
            string actualReport = aquarium.Report();
            Assert.AreEqual(expectedReport, actualReport);
        }

    }
}