
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/KodePos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.KodePosRow))]
    public class KodePosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/KodePos/KodePosIndex.cshtml");
        }
    }
}