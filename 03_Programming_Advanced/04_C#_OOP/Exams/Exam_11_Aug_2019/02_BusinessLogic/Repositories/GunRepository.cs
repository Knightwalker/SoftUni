using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Repositories.Contracts;

namespace ViceCity.Repositories
{
    public class GunRepository : IRepository<IGun>
    {
        private List<IGun> models;
        public GunRepository()
        {
            models = new List<IGun>();
        }
        public IReadOnlyCollection<IGun> Models
        {
            get
            {
                return models as IReadOnlyCollection<IGun>;
            }
        }

        public void Add(IGun model)
        {
            if (!Models.Any(g => g.Name == model.Name))
            {
                models.Add(model);
            }
        }

        public IGun Find(string name)
        {
            return Models.FirstOrDefault(g => g.Name == name);
        }

        public bool Remove(IGun model)
        {
            if (Models.Any(g => g.Name == model.Name))
            {
                models.Remove(Models.First(g => g.Name == model.Name));
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
