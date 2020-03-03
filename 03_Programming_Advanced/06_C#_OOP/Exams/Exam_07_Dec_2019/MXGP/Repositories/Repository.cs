using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

using MXGP.Repositories.Contracts;
using MXGP.Models.Motorcycles;
using MXGP.Models.Riders;
using MXGP.Models.Races;

namespace MXGP.Repositories
{
    public abstract class Repository<T> : IRepository<T>
    {
        public Repository()
        {
            this.Models = new List<T>();
        }

        public List<T> Models { get; private set; }

        public void Add(T model)
        {
            this.Models.Add(model);
        }

        public IReadOnlyCollection<T> GetAll()
        {
            return this.Models.AsReadOnly();
        }

        public abstract T GetByName(string name);
        public abstract bool Remove(T model);
    }

    public class MotorcycleRepository : Repository<Motorcycle>
    {
        public override Motorcycle GetByName(string name)
        {
            return base.Models.FirstOrDefault(x => x.Model == name);
        }

        public override bool Remove(Motorcycle model)
        {
            int index = base.Models.FindIndex(x => x.Model == model.Model);
            if (index < 0)
            {
                return false;
            }
            base.Models.RemoveAt(index);
            return true;
        }
    }

    public class RiderRepository : Repository<Rider>
    {
        public override Rider GetByName(string name)
        {
            return base.Models.FirstOrDefault(x => x.Name == name);
        }

        public override bool Remove(Rider model)
        {
            int index = base.Models.FindIndex(x => x.Name == model.Name);
            if (index < 0)
            {
                return false;
            }
            base.Models.RemoveAt(index);
            return true;
        }
    }

    public class RaceRepository : Repository<Race>
    {
        public override Race GetByName(string name)
        {
            return base.Models.FirstOrDefault(x => x.Name == name);
        }

        public override bool Remove(Race model)
        {
            int index = base.Models.FindIndex(x => x.Name == model.Name);
            if (index < 0)
            {
                return false;
            }
            base.Models.RemoveAt(index);
            return true;
        }
    }

}
