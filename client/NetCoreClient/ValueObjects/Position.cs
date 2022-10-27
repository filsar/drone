namespace NetCoreClient.ValueObjects
{
    internal class Position
    {
        public double Longitude { get; private set; }
        public double Latitude { get; private set; }

        public Position(double longitude, double latitude)
        {
            this.Longitude = longitude;
            this.Latitude = latitude;
        }

    }
}
