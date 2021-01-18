
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OrderDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderDetailRow))]
    public class OrderDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OrderDetail/OrderDetailIndex.cshtml");
        }
    }
}