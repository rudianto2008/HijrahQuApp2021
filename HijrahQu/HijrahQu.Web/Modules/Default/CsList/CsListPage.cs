
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CsList"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CsListRow))]
    public class CsListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CsList/CsListIndex.cshtml");
        }
    }
}