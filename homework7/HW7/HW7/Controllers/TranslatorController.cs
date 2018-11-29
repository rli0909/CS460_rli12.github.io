﻿using HW7.DAL;
using HW7.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace HW7.Controllers
{
    public class TranslatorController : Controller

    {
        private URContext db = new URContext();

   
        // client object
       // static HttpClient client = new HttpClient();
       // var api = "http://api.giphy.com/v1/gifs/translate?";
       // var apiKey = "&api_key=gMrqiddCIe001wwIeLKG0llVIXfOKmh9";
        //GET: HOME
        public ActionResult Index()
        {
            return View();
        }
        // GET: sticker
        public async Task<JsonResult> Translate(string id)
        {
            // img url that get from server
            //var imgpath = "";
            // Call web api
            string api = "http://api.giphy.com/v1/gifs/translate?";
            // Needs to Make it secret
            //string apiKey = "&api_key=gMrqiddCIe001wwIeLKG0llVIXfOKmh9";
            string apiKey = "&api_key=" + System.Web.Configuration.WebConfigurationManager.AppSettings["giphyKey"];
            // Concatenate url
            string url = api + apiKey + "&s=" + id;

            //HttpClient hc = new HttpClient();
            using (var hc = new HttpClient())
            {
                //return request data type
                hc.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await hc.GetAsync(url);
                if (response.IsSuccessStatusCode)
                {
                 
                    // from acsync to sycn  .GetAwaiter().GetResult()
                    var result = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                    // deserialization from json string to c# object 'convert to class http://json2csharp.com/#'
                    var jsonResult = JsonConvert.DeserializeObject<TranslateResult>(result);

                    /*
                    //Save to Database
                    GiphyRequest ur = new GiphyRequest();
                    ur.Word = id;
                    ur.IP = Request.UserHostAddress;
                    db.GiphyRequests.Add(ur);
                    db.SaveChanges();
                    */

                    return Json(jsonResult, JsonRequestBehavior.AllowGet);
                }
                else {
                    return Json("Not Found");
                }

            }
        }

        /* GET: A list of Nouns
        public async Task<JsonResult> Nouns()
        {
            string url = "http://od-api.oxforddictionaries.com:443/api/v1/wordlist/en/registers=Rare;domains=Art";
           
        }
        */
    }

}