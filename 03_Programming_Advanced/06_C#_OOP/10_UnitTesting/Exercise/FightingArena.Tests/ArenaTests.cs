using NUnit.Framework;
using System;
using System.Linq;
//using FightingArena;

namespace Tests
{
    public class ArenaTests
    {
        private Arena arena;
        private Warrior ragnar;
        private Warrior bjorn;

        [SetUp]
        public void Setup()
        {
            this.arena = new Arena();
            this.ragnar = new Warrior("Ragnar", 25, 100);
            this.bjorn = new Warrior("Bjorn", 25, 100);
        }

        [Test]
        public void testConstructor()
        {
            Assert.IsNotNull(this.arena.Warriors);
        }

        [Test]
        public void testProperty()
        {
            Assert.AreEqual(this.arena.Count, 0);
        }

        [Test]
        public void testMethodEnroll()
        {
            arena.Enroll(this.ragnar);
            Assert.AreEqual(1, this.arena.Count);
            Assert.That(this.arena.Warriors, Has.Member(this.ragnar));
        }

        [Test]
        public void testMethodEnroll2()
        {
            Warrior ragnar2 = new Warrior("Ragnar", 20, 50);
            arena.Enroll(this.ragnar);

            Assert.Throws<InvalidOperationException>(() => {
                arena.Enroll(ragnar2);
            });
        }

        [Test]
        public void testMethodFight()
        {
            int expectedAttackerHp = 100;
            int expectedDefenderHp = 75;
            arena.Enroll(new Warrior("Ragnar", 25, 100));
            arena.Enroll(new Warrior("Bjorn", 25, 100));

            arena.Fight("Ragnar", "Bjorn");
            Assert.AreEqual(expectedDefenderHp, arena.Warriors.FirstOrDefault(x => x.Name == "Ragnar").HP);
            Assert.AreEqual(expectedDefenderHp, arena.Warriors.FirstOrDefault(x => x.Name == "Bjorn").HP);
        }

        [Test]
        public void testMethodFight1()
        {
            arena.Enroll(new Warrior("Ragnar", 25, 100));
            // missing enroll for defender;

            Assert.Throws<InvalidOperationException>(() => {
                arena.Fight("Ragnar", "Bjorn");
            });
        }

    }
}
