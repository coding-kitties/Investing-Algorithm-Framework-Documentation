import {DefaultLayout} from "./default";
import {ActionsErrorEventNotifier, ActionsSuccessEventNotifier} from "../components/notifications";
import React from "react";

export const Layout = ({children}) => {

    return (
        <DefaultLayout>
            <ActionsErrorEventNotifier/>
            <ActionsSuccessEventNotifier/>
            {children}
        </DefaultLayout>
    )
}