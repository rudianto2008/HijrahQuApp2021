
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/MessageWa"), Route("{action=index}")]
    [PageAuthorize("Administration:General")]
    public class MessageWaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/MessageWa/MessageWaIndex.cshtml");
        }
    }
}