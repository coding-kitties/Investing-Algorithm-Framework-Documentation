import {makeStyles} from "@material-ui/core/styles";

export const useSideNavStyles = makeStyles((theme) => ({
    sideNavItem: {
        borderRadius: 5,
    },
    nestedSideNavItem: {
        borderRadius: 5,
        paddingLeft: theme.spacing(4),
    },
    doubleNestedSideNavItem: {
        borderRadius: 5,
        paddingLeft: theme.spacing(8),
    },
    sideNavList: {
        minWidth: theme.drawerWidth - 10,
    },
    sideNavContainer: {
        minWidth: theme.drawerWidth,
    },
    sideNavListHeaderItemActive: {
        backgroundColor: theme.palette.primary.main,
    },
    sideNavListItemActive: {
        color: theme.palette.primary.main,
        backgroundColor: "#dfdbf2",
    },
}));