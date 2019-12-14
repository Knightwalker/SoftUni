using NUnit.Framework;
using System;
//using FightingArena;

namespace Tests
{
    public class WarriorTests
    {
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void TestConstructor()
        {
            string name = "Ragnar";
            int damage = 50;
            int hp = 100;

            Warrior warrior = new Warrior(name, damage, hp);
            Assert.AreEqual(name, warrior.Name);
            Assert.AreEqual(damage, warrior.Damage);
            Assert.AreEqual(hp, warrior.HP);
        }

        [Test]
        [TestCase(null, 50, 100)]
        [TestCase("Ragnar", -50, 100)]
        [TestCase("Ragnar", 0, 100)]
        [TestCase("Ragnar", 50, -100)]
        public void testAllPropertiesWithInvalidData(string name, int damage, int hp)
        {
            Assert.Throws<ArgumentException>(() =>
            {
                Warrior warrior = new Warrior(name, damage, hp);
            });
        }

        [Test]
        public void testAttack1() // Succesfull attack
        {
            Warrior ragnar = new Warrior("Ragnar", 50, 100);
            Warrior bjorn = new Warrior("Bjorn", 50, 100);

            ragnar.Attack(bjorn);
            Assert.AreEqual(ragnar.HP, 50);
            Assert.AreEqual(bjorn.HP, 50);
        }

        [Test]
        public void testAttack2() // Succesfull attack
        {
            Warrior ragnar = new Warrior("Ragnar", 50, 100);
            Warrior bjorn = new Warrior("Bjorn", 50, 100);

            ragnar.Attack(bjorn);
            ragnar.Attack(bjorn);
            Assert.AreEqual(bjorn.HP, 0);
        }

        [Test]
        public void testAttack3() // Succesfull attack
        {
            Warrior ragnar = new Warrior("Ragnar", 120, 100);
            Warrior bjorn = new Warrior("Bjorn", 50, 100);

            ragnar.Attack(bjorn);
            Assert.AreEqual(bjorn.HP, 0);
        }

        [Test]
        public void testAttackInvalid1() // Invalid Attack
        {
            Warrior ragnar = new Warrior("Ragnar", 10, 25);
            Warrior bjorn = new Warrior("Bjorn", 5, 45);
            
            Assert.Throws<InvalidOperationException>(() =>
            {    
                ragnar.Attack(bjorn);
            });
        }

        [Test]
        public void testAttackInvalid2() // Invalid Attack
        {
            Warrior ragnar = new Warrior("Ragnar", 10, 45);
            Warrior bjorn = new Warrior("Bjorn", 5, 25);

            Assert.Throws<InvalidOperationException>(() =>
            {
                ragnar.Attack(bjorn);
            });
        }

        [Test]
        public void testAttackInvalid3() // Invalid Attack
        {
            Warrior ragnar = new Warrior("Ragnar", 10, 35);
            Warrior bjorn = new Warrior("Bjorn", 40, 100);

            Assert.Throws<InvalidOperationException>(() =>
            {
                ragnar.Attack(bjorn);
            });
        }

        [Test]
        public void testKillingEnemy() // Invalid Attack
        {
            Warrior ragnar = new Warrior("Ragnar", 50, 100);
            Warrior bjorn = new Warrior("Bjorn", 45, 40);

            ragnar.Attack(bjorn);
            Assert.AreEqual(55, ragnar.HP);
            Assert.AreEqual(0, bjorn.HP);
        }

    }
}