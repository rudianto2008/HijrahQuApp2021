
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/NoResi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NoResiRow))]
    public class NoResiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/NoResi/NoResiIndex.cshtml");
        }
    }
}