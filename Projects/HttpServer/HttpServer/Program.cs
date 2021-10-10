using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace HttpServer
{
    class Program
    {
        static void Main(string[] args)
        {
            var TcpListener = new TcpListener(IPAddress.Loopback, 12345);
            TcpListener.Start();

            while (true)
            {
                var client = TcpListener.AcceptTcpClient();
                using (var stream = client.GetStream())
                {
                    var requestBytes = new byte[100000];
                    var readBytes = stream.Read(requestBytes, 0, requestBytes.Length);
                    var stringRequest = Encoding.UTF8.GetString(requestBytes, 0, readBytes);
                    Console.WriteLine(new string('=', 70));
                    Console.WriteLine(stringRequest);

                    var response = "HTTP/1.0 200 OK" + Environment.NewLine;
                    response += "Server: MyCustomServer/1.0" + Environment.NewLine;
                    var responseBytes = Encoding.UTF8.GetBytes(response);
                    stream.Write(responseBytes, 0, responseBytes.Length);
                }

            }

        }
    }
}
