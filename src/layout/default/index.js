import {AppBar, Box, Container} from "@mui/material";
import clsx from "clsx";
import React from "react";
import {useLayoutStyles} from "../../styles";
import {HeaderContent} from "./HeaderContent";

export const DefaultLayout = ({children}) => {
    const layoutClasses = useLayoutStyles();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <AppBar
                position={"sticky"}
                color={"inherit"}
                elevation={0}
                style={{borderBottom: "1px solid #e0e3e7"}}
            >
                <HeaderContent/>
            </AppBar>
            {/*<SideNav*/}
            {/*    sideNavItems={getSideNavItems()}*/}
            {/*    sideNavOpen={sideNavOpen}*/}
            {/*    handleSideNavOpenClick={handleSideNavOpenClick}*/}
            {/*    appLogoLabel={getAppLogoLabel()}*/}
            {/*/>*/}
            <main className={clsx(layoutClasses.content)}>
                {children}
            </main>
            <Box
                className={clsx(layoutClasses.content)}
                component="footer"
                sx={{
                    justifyContent: 'center',
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? "#ffffff"
                            : theme.palette.grey[800],
                }}
            >
                <Container>
                    {/*<Footer/>*/}
                </Container>
            </Box>
        </Box>
    )
}