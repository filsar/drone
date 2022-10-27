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

        public Position Position()
        {
            return new Position(Random.NextDouble()*Random.Next(59), Random.NextDouble()*Random.Next(59));
        }

        public string ToJson()
        {
            return JsonSerializer.Serialize(Position());
        }
    }
}
