
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WhatsappLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WhatsappLogRow))]
    public class WhatsappLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WhatsappLog/WhatsappLogIndex.cshtml");
        }
    }
}