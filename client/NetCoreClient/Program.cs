using NetCoreClient.Sensors;
using NetCoreClient.Protocols;

// define sensors
List<ISensorInterface> sensors = new();
sensors.Add(new VirtualSpeedSensor());
sensors.Add(new VirtualPositionSensor());
sensors.Add(new VirtualAltitudeSensor());
sensors.Add(new VirtualChargeSensor());

// define protocol
IProtocolInterface protocol = new Mqtt("127.0.0.1");

// send data to server
while (true)
{
    foreach (ISensorInterface sensor in sensors)
    {
        var sensorValue = sensor.ToJson();

        protocol.Send(sensorValue, sensor.GetSlug());

        Console.WriteLine("Data sent: " + sensorValue + sensor.GetSlug());

        Thread.Sleep(1000);
    }
        
}