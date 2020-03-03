using System;
using System.Collections.Generic;
using System.Text;
using AquaShop.Models.Fish.Contracts;

namespace AquaShop.Models.Aquariums
{
    class FreshwaterAquarium : Aquarium
    {
        public FreshwaterAquarium(string name) : base(name, 50)
        {
        }

    }
}
