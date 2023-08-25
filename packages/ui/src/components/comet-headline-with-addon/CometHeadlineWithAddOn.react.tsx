import { forwardRef } from 'react'

type CometHeadlineWithAddOnProps = {}

const CometHeadlineWithAddOn = forwardRef<
  HTMLDivElement,
  CometHeadlineWithAddOnProps
>(({}, ref) => {
  return <></>
})

CometHeadlineWithAddOn.displayName = 'CometHeadlineWithAddOn.react'

export default CometHeadlineWithAddOn

// __d("CometHeadlineWithAddOn.react", ["BaseRow.react", "BaseRowItem.react", "Locale", "TetraText.react", "gkx", "react"], (function(a, b, c, d, e, f, g) {
//   "use strict";
//   var h = d("react")
//     , i = {
//       addOn: {
//           display: "x78zum5",
//           flexDirection: "xdt5ytf",
//           justifyContent: "xl56j7k",
//           marginStart: "x1i64zmx",
//           $$css: !0
//       },
//       nonBreakingSpace: {
//           visibility: "xlshs6z",
//           width: "xnalus7",
//           $$css: !0
//       },
//       textFlexFixForIE: {
//           flexBasis: "xdl72j9",
//           $$css: !0
//       }
//   }
//     , j = {
//       ltr: {
//           direction: "xzt5al7",
//           $$css: !0
//       },
//       rtl: {
//           direction: "xzyj77d",
//           $$css: !0
//       }
//   }
//     , k = c("gkx")("1299319");
//   function a(a, b) {
//       var e = a.addOn
//         , f = a.children
//         , g = a.color
//         , l = a.headlineRef
//         , m = a.isPrimaryHeading
//         , n = a.isSemanticHeading
//         , o = a.numberOfLines
//         , p = a.truncationTooltip;
//       a = a.type;
//       return h.jsx(c("TetraText.react"), {
//           isSemanticHeading: !1,
//           ref: b,
//           type: a,
//           children: h.jsxs(c("BaseRow.react"), {
//               verticalAlign: "center",
//               xstyle: j[d("Locale").isRTL() ? "rtl" : "ltr"],
//               children: [h.jsx(c("BaseRowItem.react"), {
//                   expanding: !0,
//                   xstyle: k && i.textFlexFixForIE,
//                   children: h.jsx(c("TetraText.react"), {
//                       color: g,
//                       isPrimaryHeading: m,
//                       isSemanticHeading: n,
//                       numberOfLines: o,
//                       ref: l,
//                       truncationTooltip: p,
//                       type: a,
//                       children: f
//                   })
//               }), h.jsx(c("BaseRowItem.react"), {
//                   verticalAlign: "top",
//                   xstyle: i.addOn,
//                   children: h.jsxs(c("BaseRow.react"), {
//                       verticalAlign: "center",
//                       children: [h.jsx(c("BaseRowItem.react"), {
//                           xstyle: i.nonBreakingSpace,
//                           children: "\xa0"
//                       }), h.jsx(c("BaseRowItem.react"), {
//                           children: h.jsx(c("BaseRow.react"), {
//                               children: e
//                           })
//                       })]
//                   })
//               })]
//           })
//       })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   b = h.forwardRef(a);
//   g["default"] = b
// }
// ), 98);
