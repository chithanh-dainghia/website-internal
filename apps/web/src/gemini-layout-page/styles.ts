import { makeStyles } from '@griffel/react'

export const useStyles = makeStyles({
  pageContainer: {
    width: '100%',
    minWidth: '1266px',
    minHeight: '100vh',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'var(--wig-page-background)',
    '@media print': {
      minWidth: 0,
    },
  },

  pageContainerWP4MAppBar: {
    minWidth: '1226px',
  },

  pageContainerWithoutChannel: {
    minWidth: '966px',
  },

  pageContainerWithoutChannelWP4MAppBar: {
    minWidth: '926px',
  },

  pageContainerFixedWidth: {
    '@media (min-width: 1921px)': {
      width: '1600px',
    },
  },
  navigationWrapper: {
    overflowAnchor: 'none',
    flexBasis: '96px',
    flexGrow: '1',
    flexShrink: '0',
    position: 'relative',
    minWidth: '96px',
    maxWidth: '96px',
    zIndex: '3',
    '@media print_': {
      display: 'none',
    },
  },
  navigationWrapperWP4MAppBar: {
    flexBasis: '56px',
    minWidth: '56px',
    maxWidth: '56px',
  },
  navigatioWrapperWithChannel: {
    flexBasis: '396px',
    maxWidth: '516px',
  },
  navigatioWrapperWithChannelWP4MAppBar: {
    flexBasis: '356px',
    maxWidth: '476px',
  },
  navigationSticky: {
    width: '100',
    position: 'sticky',
    top: '0',
  },
  navigationFixed: {
    position: 'fixed',
    minWidth: '96px',
    top: '0',
    '@media (min-width: 1921px)': {
      marginLeft: '0',
    },
  },
  navigationFixedWP4MAppBar: {
    minWidth: '56px',
  },
  navigationInner: {
    top: '0',
    height: '100vh',
    width: '100%',
    maxWidth: 'inherit',
    flexDirection: 'row',
    display: 'flex',
    boxSizing: 'border-box',
  },
  navigationInnerWithBannerNarrowBuffer: {
    paddingTop: '22px',
  },
  // navigationAppNavList: {
  //   width: 'x13oubkp',
  //   minWidth: 'x17y4j5z',
  //   height: 'x5yr21d',
  //   display: 'x78zum5',
  //   flexDirection: 'xdt5ytf',
  //   justifyContent: 'xl56j7k',
  //   alignContent: 'xc26acl',
  // },
  // navigationAppNavListWP4MAppBar: {
  //   width: 'x15yg21f',
  //   minWidth: 'x1jn76jz',
  // },
  // navigationBuffer: {
  //   width: 'xh8yej3',
  //   height: 'x5yr21d',
  // },
  // channelWrapper: {
  //   width: 'xh8yej3',
  //   minWidth: 'x18n5i07',
  //   maxWidth: 'x1lr1uin',
  // },
  // channelWrapperHidden: {
  //   display: 'x1s85apg',
  // },
  // channelWrapperAutoHideButVisible: {
  //   position: 'x10l6tqk',
  //   start: 'x5bj7zw',
  //   width: 'x3p9ev8',
  //   borderTopStartRadius: 'x168nmei',
  //   borderTopEndRadius: 'x1ccrb07',
  //   borderBottomEndRadius: 'xtf3nb5',
  //   borderBottomStartRadius: 'xo71vjh',
  //   boxShadow: 'xnvy93r',
  // },
  // channelWrapperAutoHideButVisibleWP4MAppBar: {
  //   start: 'xdvsf5k',
  // },
  // content: {
  //   display: 'x78zum5',
  //   minWidth: 'xeuugli',
  //   flexBasis: 'x1sfiqbd',
  //   flexDirection: 'xdt5ytf',
  //   flexGrow: 'xrnhffl',
  //   flexShrink: 'xs83m0k',
  //   borderEnd: 'xkbpzyx',
  //   boxSizing: 'x9f619',
  //   '@media print_borderEnd': 'xp8t288',
  // },
  // contentFullHeight: {
  //   alignSelf: 'xkh2ocl',
  //   height: 'xt7dq6l',
  //   flexGrow: 'x1iyjqo2',
  //   display: 'x78zum5',
  //   flexDirection: 'xdt5ytf',
  // },
  // contentWithTopBannerNarrowBuffer: {
  //   paddingTop: 'x1xy6bms',
  // },
  // header: {
  //   zIndex: 'xhtitgo',
  //   backgroundColor: 'x881uwn',
  // },
  // headerSticky: {
  //   position: 'x7wzq59',
  // },
  // headerFixed: {
  //   top: 'x13vifvy',
  //   width: 'xh8yej3',
  //   position: 'xixxii4',
  //   zIndex: 'xhtitgo',
  //   backgroundColor: 'x881uwn',
  //   borderEnd: 'xkbpzyx',
  //   maxWidth: 'xuyvd19',
  //   minWidth: 'x1wtqkzj',
  //   '@media (min-width: 1921px)_maxWidth': 'x1y5zt8k',
  // },
  // headerFixedWP4MAppBar: {
  //   maxWidth: 'xdkb9vc',
  //   minWidth: 'xcwrakp',
  //   '@media (min-width: 1921px)_maxWidth': 'xja65qe',
  // },
  // headerFixedFluid: {
  //   maxWidth: 'xuyvd19',
  //   minWidth: 'xzxvhps',
  //   '@media (min-width: 1921px)_maxWidth': 'xk01x47',
  // },
  // headerFixedFluidWP4MAppBar: {
  //   maxWidth: 'xdkb9vc',
  //   '@media (min-width: 1921px)_maxWidth': 'xymu542',
  // },
  // coverPhoto: {
  //   height: 'x1vd4hg5',
  //   width: 'xh8yej3',
  // },
  // headerContents: {
  //   boxSizing: 'x9f619',
  //   paddingTop: 'xyamay9',
  //   paddingBottom: 'xwib8y2',
  //   paddingStart: 'x1swvt13',
  //   paddingEnd: 'x1pi30zi',
  //   borderBottom: 'xdppsyt',
  // },
  // headerContentsConstrastBackground: {
  //   backgroundColor: 'x2bj2ny',
  // },
  // headerInfo: {},
  // headerInfoBuffer: {
  //   height: 'xcbkimw',
  //   width: 'xh8yej3',
  // },
  // headerNavigation: {
  //   height: 'x1s1d1n7',
  // },
  // headerNavigationBuffer: {
  //   height: 'x1s1d1n7',
  //   width: 'xh8yej3',
  // },
  // entityWrapper: {
  //   display: 'x78zum5',
  //   flexDirection: 'x15zctf7',
  //   flexGrow: 'x1iyjqo2',
  // },
  // entityContent: {
  //   display: 'x78zum5',
  //   flexDirection: 'xdt5ytf',
  //   width: 'xnalus7',
  //   minWidth: 'xeuugli',
  //   flexGrow: 'x1iyjqo2',
  // },
  // entityContentColumnBase: {
  //   marginTop: 'x1sy10c2',
  // },
  // entityContentColumnNarrow: {
  //   width: 'xvue9z',
  // },
  // entityContentColumnFeedWider: {
  //   width: 'x19sv2k2',
  //   maxWidth: 'x7ep2pv',
  // },
  // entityContentColumnWide: {
  //   width: 'x19sv2k2',
  //   maxWidth: 'xm4tvsq',
  // },
  // entityContentColumnFullWithMargins: {
  //   width: 'x19sv2k2',
  // },
  // entityContentColumnFull: {
  //   width: 'xh8yej3',
  // },
  // entityContentStretchedCenterContent: {
  //   display: 'x78zum5',
  //   justifyContent: 'xl56j7k',
  //   alignItems: 'x6s0dn4',
  // },
  // rhcWrapper: {
  //   overflowAnchor: 'x1xzczws',
  //   position: 'x1n2onr6',
  //   width: 'x5c4s84',
  //   zIndex: 'x1vjfegm',
  // },
  // rhcInner: {
  //   borderStart: 'x1rr5fae',
  //   position: 'x7wzq59',
  // },
  // rhcInnerFixed: {
  //   width: 'x1qrby5j',
  //   position: 'xixxii4',
  // },
  // rhcScrollableAreaWrapper: {
  //   height: 'x5yr21d',
  // },
  // rhcScrollableArea: {
  //   width: 'xh8yej3',
  //   height: 'x5yr21d',
  // },
  // quickChatBuffer: {
  //   height: 'xn3w4p2',
  //   flexShrink: 'x2lah0s',
  // },
  // fixedBannerContainer: {
  //   position: 'xixxii4',
  //   width: 'xh8yej3',
  //   zIndex: 'x1n327nk',
  //   top: 'x13vifvy',
  //   start: 'x17qophe',
  //   display: 'x78zum5',
  //   flexDirection: 'x1q0g3np',
  //   justifyContent: 'xl56j7k',
  //   alignItems: 'x6s0dn4',
  //   borderBottom: 'xdppsyt',
  //   backgroundColor: 'x881uwn',
  // },
  // fixedBannerContainerNarrow: {
  //   height: 'x17rw0jw',
  // },
  // quickchatWrapper: {
  //   bottom: 'x1ey2m1c',
  //   height: 'xqtp20y',
  //   position: 'xixxii4',
  //   width: 'xnalus7',
  //   zIndex: 'xzkaem6',
  //   end: 'xds687c',
  //   '@media print_display': 'xbjcvb9',
  // },
  // quickchatWrapperFixedWidth: {
  //   '@media (min-width: 1921px)_end': 'xelyn3c',
  // },
  // quickchatInner: {
  //   position: 'x10l6tqk',
  //   height: 'xn3w4p2',
  //   width: 'xqmnf81',
  //   end: 'xds687c',
  // },
})
