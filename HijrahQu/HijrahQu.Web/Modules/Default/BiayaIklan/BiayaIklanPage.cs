
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BiayaIklan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BiayaIklanRow))]
    public class BiayaIklanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BiayaIklan/BiayaIklanIndex.cshtml");
        }
    }
}