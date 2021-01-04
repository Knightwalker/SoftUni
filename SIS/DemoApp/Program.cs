using SIS.Http;
using SIS.Http.Response;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace DemoApp
{
    public static class Program
    {
        public static async Task Main(string[] args)
        {
            var routeTable = new List<Route>();
            routeTable.Add(new Route(HttpMethodType.Get, "/", IndexPage));
            routeTable.Add(new Route(HttpMethodType.Get, "/users/login", GetLogin));
            routeTable.Add(new Route(HttpMethodType.Post, "/users/login", PostLogin));
            routeTable.Add(new Route(HttpMethodType.Get, "/contact", Contact));
            routeTable.Add(new Route(HttpMethodType.Get, "/favicon.ico", FavIcon));
            //Actions:
            // / => IndexPage() извиква се когато се отваря главната страница
            // /favicon.ico => favico.ico - може да минем през метод или да заредим от статичен файл
            // GET /Contact => response ShowContactForm(request)
            // POST /Contact => response FillContactForm(request)

            var httpServer = new HttpServer(80, routeTable);
            await httpServer.StartAsync();
        }

        //Action: /headers => returns html table with the list of all headers; name and value

        public static HttpResponse IndexPage(HttpRequest request)
        {
            var username = request.SessionData.ContainsKey("Username") ? request.SessionData["Username"] : "Anonymous";
            return new HtmlResponse($"<h1>Home page. Hello, {username}!</h1>");
        }

        public static HttpResponse GetLogin(HttpRequest request)
        {
            request.SessionData["Username"] = "Kalina";
            return new HtmlResponse("<h1>Login page form</h1>");
        }

        public static HttpResponse PostLogin(HttpRequest request)
        {
            return new HtmlResponse("<h1>Login page</h1>");
        }

        public static HttpResponse Contact(HttpRequest request)
        {
            return new HtmlResponse("<h1>Contact page</h1>");
        }

        public static HttpResponse FavIcon(HttpRequest request)
        {
            var byteContent = File.ReadAllBytes("wwwroot/favicon.ico");
            return new FileResponse(byteContent, "image/x-icon");
        }

    }
}
