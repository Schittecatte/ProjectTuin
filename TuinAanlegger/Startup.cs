using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TuinAanlegger.Startup))]
namespace TuinAanlegger
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
