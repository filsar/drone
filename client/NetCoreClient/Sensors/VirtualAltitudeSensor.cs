using NetCoreClient.ValueObjects;
using System.Text.Json;

namespace NetCoreClient.Sensors
{
    class VirtualAltitudeSensor : IAltitudeSensorInterface, ISensorInterface
    {
        private readonly Random Random;

        public VirtualAltitudeSensor()
        {
            Random = new Random();
        }

        public double Altitude()
        {
            return new Altitude(Random.NextDouble()*Random.Next(100)).Value;
        }

        public string ToJson()
        {
            return JsonSerializer.Serialize(new Altitude(Random.NextDouble() * Random.Next(100)));
        }
    }
}
