
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ViewOrder"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewOrderRow))]

    public class ViewOrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ViewOrder/ViewOrderIndex.cshtml");
        }
    }
}