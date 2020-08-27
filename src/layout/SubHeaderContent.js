import React from 'react';
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {CustomTabSecondary, CustomTabsSecondary} from "../tabs";
import {useRouter} from "next/router";


const useStyles = makeStyles(theme => ({
    header: {
        color: '#ffffff',
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.up('md')] : {
            fontSize: 20,
        }
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: theme.palette.primary.light,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    active: {
        color: theme.palette.primary.main,
    }
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DocumentationSubHeaderContent = props => {
    const classes = useStyles();
    const router = useRouter();

    const initialValue = () => {
        const {pathname} = router;

        if(pathname.includes('/documentation/overview')) {
            return 0;
        } else if(pathname.includes('/documentation/guides/overview')) {
            return 1;
        } else if(pathname.includes('/documentation/framework-features/overview')) {
            return 2;
        }
        return 0;
    }

    const [value, setValue] = React.useState(initialValue());

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if(newValue === 0) {
            router.push('/documentation/general/overview');
        } else if(newValue === 1) {
            router.push('/documentation/guides/overview');
        } else if(newValue === 2) {
            router.push('/documentation/framework-features/overview');
        }
    };

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={12} className={classes.title}>
                        <Typography noWrap color={'primary'} className={classes.header}>
                            Documentation
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTabsSecondary
                            textColor="secondary"
                            value={value} onChange={handleChange}
                            aria-label="simple tabs example"
                        >
                            <CustomTabSecondary label="General" {...a11yProps(0)} />
                            <CustomTabSecondary label="Guides" {...a11yProps(1)} />
                            <CustomTabSecondary label="Framework Features" {...a11yProps(2)} />
                        </CustomTabsSecondary>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    )
};

const DevelopmentSubSubHeaderContent = props => {
    const classes = useStyles();
    const router = useRouter();

    const initialValue = () => {
        const {pathname} = router;

        if(pathname.includes('/development/general/')) {
            return 0;
        } else if(pathname.includes('/development/framework/')) {
            return 1;
        } else if(pathname.includes('/development/documentation/')) {
            return 2;
        }
        return 0;
    }

    const [value, setValue] = React.useState(initialValue());

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if(newValue === 0) {
            router.push('/development/general/overview');
        } else if(newValue === 1) {
            router.push('/development/framework/overview');
        } else if(newValue === 2) {
            router.push('/development/documentation/overview');
        }
    };

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={12} className={classes.title}>
                        <Typography noWrap color={'primary'} className={classes.header}>
                            Development
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTabsSecondary
                            textColor="secondary"
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                        >
                            <CustomTabSecondary label="General" {...a11yProps(0)} />
                            <CustomTabSecondary label="Framework" {...a11yProps(1)} />
                            <CustomTabSecondary label="Documentation" {...a11yProps(2)} />
                        </CustomTabsSecondary>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    )
};

function SubHeaderContent (props) {
    const router = useRouter();
    const {pathname} = router;

    if(pathname.includes('/development/')) {
        return <DevelopmentSubSubHeaderContent {...props}/>
    } else if(pathname.includes('/documentation/')) {
        return <DocumentationSubHeaderContent {...props}/>;
    }
    return null;
}

export default SubHeaderContent;