namespace NetCoreClient.ValueObjects
{
    internal class Altitude
    {
        public double AltitudeValue { get; private set; }

        public Altitude(double AltitudeValue)
        {
            this.AltitudeValue = AltitudeValue;
        }

    }
}
