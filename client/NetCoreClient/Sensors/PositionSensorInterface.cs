using NetCoreClient.ValueObjects;

namespace NetCoreClient.Sensors
{
    interface IPositionSensorInterface
    {
        double Longitude();
        double Latitude();
    }
}
