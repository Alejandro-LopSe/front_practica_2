
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Linkedin } from "../islands/Linkedin.tsx";
import { ApiInfo } from "../type.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown,ApiInfo>)=>{

    const response = await fetch("https://www.arbeitnow.com/api/job-board-api")

    const data: ApiInfo = await response.json()

    return ctx.render(data)
  }
}

export default function Home(props: PageProps<ApiInfo>) {
  const data = props.data
  return (<body>
    <div class="header"></div>
    <div>
      <Linkedin data={data}/>
    </div>
    </body>
  );
}
