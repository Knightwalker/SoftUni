using System;
using NUnit.Framework;

public class HeroRepositoryTests
{
    private HeroRepository repo;

    [SetUp]
    public void Setup()
    {
        this.repo = new HeroRepository();
    }

    [Test]
    public void testConstructor()
    {
        Assert.IsNotNull(this.repo.Heroes);
    }

    [Test]
    public void testConstructorHero()
    {
        Hero hero = new Hero("Ragnar", 100);
        Assert.AreEqual("Ragnar", hero.Name);
        Assert.AreEqual(100, hero.Level);
    }

    // Testing Method Create
    [Test]
    public void testMethodCreate1()
    {
        Assert.Throws<ArgumentNullException>(() => {
            this.repo.Create(null);
        });
    }
    [Test]
    public void testMethodCreate2()
    {
        this.repo.Create(new Hero("Ragnar", 100));
        Assert.Throws<InvalidOperationException>(() => {
            this.repo.Create(new Hero("Ragnar", 100));
        });
    }
    [Test]
    public void testMethodCreate3()
    {
        var result = this.repo.Create(new Hero("Ragnar", 100));
        Assert.Multiple(() => {
            Assert.That(repo.GetHero("Ragnar").Name, Is.EqualTo("Ragnar"));
            Assert.That(repo.GetHero("Ragnar").Level, Is.EqualTo(100));
            Assert.That(result, Is.EqualTo("Successfully added hero Ragnar with level 100"));
        });
    }

    // Testing Method Remove
    [Test]
    public void testMethodRemove1()
    {
        this.repo.Create(new Hero("Ragnar", 100));
        Assert.Throws<ArgumentNullException>(() => {
            this.repo.Remove(null);
        });
    }

    [Test]
    public void testMethodRemove2()
    {
        this.repo.Create(new Hero("Ragnar", 100));
        var actual = this.repo.Remove("Ragnar");
        var expected = true;
        Assert.AreEqual(expected, actual);
    }

    // Testing Method GetHeroWithHighestLevel
    [Test]
    public void testMethodGetHeroWithHighestLevel()
    {
        this.repo.Create(new Hero("Ragnar", 100));
        this.repo.Create(new Hero("Bjorn", 80));
        var res = repo.GetHeroWithHighestLevel();
        Assert.Multiple(() => {
            Assert.That(res.Name, Is.EqualTo("Ragnar"));
            Assert.That(res.Level, Is.EqualTo(100));
        });
    }

    [Test]
    public void testMethodGetHero()
    {
        this.repo.Create(new Hero("Ragnar", 100));
        var res = repo.GetHero("Ragnar");
        Assert.Multiple(() => {
            Assert.That(res.Name, Is.EqualTo("Ragnar"));
            Assert.That(res.Level, Is.EqualTo(100));
        });
    }

}