
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WhatsappLeads"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WhatsappLeadsRow))]
    public class WhatsappLeadsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WhatsappLeads/WhatsappLeadsIndex.cshtml");
        }
    }
}