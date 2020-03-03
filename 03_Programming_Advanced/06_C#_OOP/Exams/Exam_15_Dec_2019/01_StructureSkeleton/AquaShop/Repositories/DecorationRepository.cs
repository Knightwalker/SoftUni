using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

using AquaShop.Models.Decorations.Contracts;
using AquaShop.Repositories.Contracts;

namespace AquaShop.Repositories
{
    class DecorationRepository : IRepository<IDecoration>
    {
        private List<IDecoration> models;

        public DecorationRepository()
        {
            this.models = new List<IDecoration>();
        }

        public IReadOnlyCollection<IDecoration> Models => this.models.AsReadOnly();

        public void Add(IDecoration model)
        {
            this.models.Add(model);
        }

        public bool Remove(IDecoration model)
        {
            return this.models.Remove(model);
        }

        public IDecoration FindByType(string type)
        {
            return this.models.FirstOrDefault(x => x.GetType().Name == type);
        }

    }
}
