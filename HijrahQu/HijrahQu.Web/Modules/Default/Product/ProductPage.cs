
namespace HijrahQu.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Product"), Route("{action=index}")]
    [PageAuthorize("Administration:General")]
    public class ProductController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Product/ProductIndex.cshtml");
        }
    }
}