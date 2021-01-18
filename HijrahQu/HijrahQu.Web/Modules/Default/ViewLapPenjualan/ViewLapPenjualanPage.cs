
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ViewLapPenjualan"), Route("{action=index}")]
    [PageAuthorize("Administration:General")]
    public class ViewLapPenjualanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ViewLapPenjualan/ViewLapPenjualanIndex.cshtml");
        }
    }
}