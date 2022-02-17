import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import {Layout} from "../src/layout";
import * as gtag from '../lib/gtag'
import {useRouter, withRouter} from "next/router";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../src/styles"
import createEmotionCache from "../src/createEmoitionCache";
import {CacheProvider} from "@emotion/react";
import {SpinningWheelComponent} from "../src/components/loading";
import {wrapper} from "../src/redux/store";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        const handleStart = (url) => setLoading(true);
        const handleComplete = (url) => setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Investing Algorithm Framework: The framework for creation of investing algorithms</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"/>
                <script data-ad-client="ca-pub-6898179895018365" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    {loading? <SpinningWheelComponent style={{height: "80vh"}}/> : <Component {...pageProps} />}
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default wrapper.withRedux(withRouter(MyApp));
