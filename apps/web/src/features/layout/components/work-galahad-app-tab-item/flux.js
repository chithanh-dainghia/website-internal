/*FB_PKG_DELIM*/
__d(
  'getJSEnumSafe',
  [],
  function (a, b, c, d, e, f) {
    'use strict'
    function a(a, b) {
      if (b == null) return null
      if (!Object.prototype.hasOwnProperty.call(a, b)) return null
      b = b
      return a[b]
    }
    f['default'] = a
  },
  66,
)

__d(
  'WorkGalahadAppTabID',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ACCOUNTS_ONLY: 'accounts_only',
      ADMIN_PANEL: 'admin_panel',
      APPROVALS: 'approvals',
      CALL: 'call',
      CHATS: 'chats',
      CONTENT_MANAGER: 'content_manager',
      ESSENTIAL_MIGRATION: 'essential_migration',
      EVENTS: 'events',
      EXPLORE: 'explore',
      FEED: 'feed',
      FILES: 'files',
      GARDENS: 'gardens',
      HOME: 'home',
      KNOWLEDGE_LIBRARY: 'knowledge_library',
      MANAGED_COMMUNITIES: 'managed_communities',
      NOTIFICATIONS: 'notifications',
      PROFILE: 'profile',
      SEARCH: 'search',
      SHIFTS: 'shifts',
      TASKS: 'tasks',
      TODO: 'todo',
      VC: 'vc',
      WORKSTREAM: 'workstream',
      UPDATES: 'updates',
      ANALYTICS: 'analytics',
    })
    f['default'] = a
  },
  66,
)

__d(
  'WorkGalahadAppTabIDUtil',
  ['WorkGalahadAppTabID', 'getJSEnumSafe', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    function a(a) {
      return c('getJSEnumSafe')(c('WorkGalahadAppTabID'), a)
    }
    function b() {
      return 'chats'
    }
    function d() {
      return c('gkx')('1703310') ? 'gardens' : 'home'
    }
    g.getTabID = a
    g.getChatTabID = b
    g.getProductSpecificHomeTabID = d
  },
  98,
)

__d(
  'WorkGalahadNavStore',
  ['FluxReduceStore', 'WorkGalahadAppTabIDUtil', 'WorkGalahadDispatcher'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = function () {
      return {
        lastNavigationIntentTimestamp: Date.now(),
      }
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a)
      function b() {
        var b, c
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f]
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.reduce = function (a, b) {
            switch (b.type) {
              case 'nav/markPendingTransition':
                return babelHelpers['extends']({}, a, h(), {
                  pendingTransitionState: {
                    appTabID: b.appTabID,
                    entityKey: b.entityKey,
                    uri: b.uri,
                  },
                })
              case 'nav/setActiveEntityKey':
                return c.$WorkGalahadNavStore1(a, b.entityKey)
              case 'nav/selectAppTabID':
                return c.$WorkGalahadNavStore2(a, b.appTabID)
              case 'nav/allowChannelAutoFocus':
                return babelHelpers['extends']({}, a, {
                  allowChannelAutoFocus: !0,
                })
              case 'nav/pushStackedChannel':
                return babelHelpers['extends']({}, a, h(), {
                  stackedChannelData: [].concat(a.stackedChannelData, [
                    b.stackedChannelData,
                  ]),
                })
              case 'nav/replaceStackedChannel':
                return babelHelpers['extends']({}, a, {
                  stackedChannelData: [].concat(
                    a.stackedChannelData.slice(0, -1),
                    [b.stackedChannelData],
                  ),
                })
              case 'nav/dismissStackedChannel':
                return babelHelpers['extends']({}, a, h(), {
                  stackedChannelData: a.stackedChannelData.slice(0, -1),
                })
              case 'nav/dismissAllStackedChannels':
                return babelHelpers['extends']({}, a, h(), {
                  stackedChannelData: [],
                })
              case 'nav/startLoading':
                var d,
                  e = babelHelpers['extends']({}, a, {
                    loading: !0,
                  })
                if (
                  b.uri ===
                  ((d = e) == null
                    ? void 0
                    : (d = d.pendingTransitionState) == null
                    ? void 0
                    : d.uri)
                ) {
                  e = c.$WorkGalahadNavStore1(
                    e,
                    ((d = e.pendingTransitionState) == null
                      ? void 0
                      : d.entityKey) || e.activeEntityKey,
                  )
                  e = c.$WorkGalahadNavStore2(
                    e,
                    ((d = e.pendingTransitionState) == null
                      ? void 0
                      : d.appTabID) || e.selectedAppTabID,
                  )
                }
                return babelHelpers['extends']({}, e, {
                  pendingTransitionState: void 0,
                })
              case 'nav/stopLoading':
                return babelHelpers['extends']({}, a, {
                  loading: !1,
                })
              case 'nav/showPublicContentBanner':
                return babelHelpers['extends']({}, a, {
                  publicContentBanner: b.html,
                })
              case 'nav/hidePublicContentBanner':
                return babelHelpers['extends']({}, a, {
                  publicContentBanner: void 0,
                })
              default:
                return a
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        )
      }
      var c = b.prototype
      c.getInitialState = function () {
        return {
          activeEntityKey: null,
          loading: !1,
          selectedAppTabID: d(
            'WorkGalahadAppTabIDUtil',
          ).getProductSpecificHomeTabID(),
          allowChannelAutoFocus: !1,
          lastNavigationIntentTimestamp: 0,
          publicContentBanner: void 0,
          stackedChannelData: [],
          pendingTransitionState: void 0,
        }
      }
      c.getActiveEntityKey = function () {
        return this.getState().activeEntityKey
      }
      c.getSelectedAppTabID = function () {
        return this.getState().selectedAppTabID
      }
      c.getNavigationKey = function () {
        return 'navigation-key-' + this.getState().lastNavigationIntentTimestamp
      }
      c.isChannelAutoFocusAllowed = function () {
        return this.getState().allowChannelAutoFocus
      }
      c.getStackedChannelData = function () {
        var a = this.getState().stackedChannelData
        return a[a.length - 1]
      }
      c.isLoading = function () {
        return this.getState().loading
      }
      c.getPublicContentBanner = function () {
        return this.getState().publicContentBanner
      }
      c.$WorkGalahadNavStore1 = function (a, b) {
        return a.activeEntityKey === b
          ? a
          : babelHelpers['extends']({}, a, {
              activeEntityKey: b,
            })
      }
      c.$WorkGalahadNavStore2 = function (a, b) {
        return a.selectedAppTabID !== b
          ? babelHelpers['extends']({}, a, h(), {
              selectedAppTabID: b,
              stackedChannelData: [],
            })
          : babelHelpers['extends']({}, a, h())
      }
      return b
    })(c('FluxReduceStore'))
    a.__moduleID = f.id
    b = new a(c('WorkGalahadDispatcher'))
    g['default'] = b
  },
  98,
)
