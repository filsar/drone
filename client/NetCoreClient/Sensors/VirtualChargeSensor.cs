using NetCoreClient.ValueObjects;
using System.Text.Json;


namespace NetCoreClient.Sensors
{
    class VirtualChargeSensor : IChargeSensorInterface, ISensorInterface
    {
        private readonly Random Random;

        public VirtualChargeSensor()
        {
            Random = new Random();
        }

        public int Charge()
        {
            return new Charge(Random.Next(100)).Value;
        }

        public string ToJson()
        {
            return JsonSerializer.Serialize(new Charge(Random.Next(100)));
        }
        public string GetSlug()
        {
            return "charge";
        }
    }
}
