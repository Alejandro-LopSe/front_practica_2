import { FreshContext } from "$fresh/server.ts";
import Cabecera from "../components/Cabecera.tsx";




const Layout = async (req: Request,ctx: FreshContext)=>{
    const Component =  ctx.Component;
    return(
    <body>
   
        <Component/>

    </body>
    )
}
export default Layout