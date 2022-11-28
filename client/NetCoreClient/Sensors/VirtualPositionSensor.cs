using NetCoreClient.ValueObjects;
using System.Text.Json;

namespace NetCoreClient.Sensors
{
    class VirtualPositionSensor : IPositionSensorInterface, ISensorInterface
    {
        private readonly Random Random;

        public VirtualPositionSensor()
        {
            Random = new Random();
        }

        public double Longitude()
        {
            return new Longitude(Random.NextDouble()*Random.Next(59)).Value;
        }

        public double Latitude()
        {
            return new Latitude(Random.NextDouble() * Random.Next(59)).Value;
        }

        public string ToJson()
        {
            Object[] Position = { new Longitude(Random.NextDouble() * Random.Next(59)), new Latitude(Random.NextDouble() * Random.Next(59)) };
            return JsonSerializer.Serialize(Position);
        }

        public string GetSlug()
        {
            return "position";
        }
    }
}
