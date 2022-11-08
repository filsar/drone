﻿namespace NetCoreClient.ValueObjects
{
    internal class Longitude
    {
        public string Name { get; private set; }
        public double Value { get; private set; }
        public DateTime Date { get; private set; }

        public Longitude(double value)
        {
            this.Name = "longitude";
            this.Value = value  ;
            this.Date = DateTime.Now ;
        }

    }
}
