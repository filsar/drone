namespace NetCoreClient.ValueObjects
{
    internal class Speed
    {
        public int SpeedValue { get; private set; }
        
        public Speed(int SpeedValue)
        {
            this.SpeedValue = SpeedValue;
        }

    }
}
