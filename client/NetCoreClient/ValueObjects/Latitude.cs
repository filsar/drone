using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreClient.ValueObjects
{
    internal class Latitude
    {
        public string Name { get; private set; }
        public double Value { get; private set; }
        public DateTime Date { get; private set; }

        public Latitude(double value)
        {
            this.Name = "latitude";
            this.Value = value;
            this.Date = DateTime.Now;
        }
    }
}
