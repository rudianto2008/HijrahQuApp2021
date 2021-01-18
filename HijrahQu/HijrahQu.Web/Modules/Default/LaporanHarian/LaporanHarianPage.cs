
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/LaporanHarian"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LaporanHarianRow))]
    public class LaporanHarianController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/LaporanHarian/LaporanHarianIndex.cshtml");
        }
    }
}