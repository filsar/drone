using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreClient.ValueObjects
{
    internal class Charge
    {
        public string Name { get; private set; }
        public int Value { get; private set; }
        public DateTime Date { get; private set; }

        public Charge(int value)
        {
            this.Name = "Charge";
            this.Value = value;
            this.Date = DateTime.Now;
        }
    }
}
