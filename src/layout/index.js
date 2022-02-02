import {useRouter} from "next/router";
import {DocsLayout} from "./documentation";
import {DefaultLayout} from "./default";

export const Layout = ({children}) => {
    const router = useRouter();

    if(router.pathname.includes("documentation") || router.pathname.includes("development")) {
        return (
            <DocsLayout>
                {children}
            </DocsLayout>
        )
    } else {
        return (
            <DefaultLayout>
                {children}
            </DefaultLayout>
        )
    }
}