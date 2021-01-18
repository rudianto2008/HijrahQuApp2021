
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ViewLapKeuangan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ViewLapKeuanganRow))]
    public class ViewLapKeuanganController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ViewLapKeuangan/ViewLapKeuanganIndex.cshtml");
        }
    }
}