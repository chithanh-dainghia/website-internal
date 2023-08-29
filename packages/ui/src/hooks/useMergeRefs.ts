import { useMemo } from "react";

type RefType = ((instance: any) => void) | React.MutableRefObject<any> | null;

function mergeRefs(...refs: RefType[]) {
  return function (node: any) {
    refs.forEach((ref) => {
      if (ref == null) return;
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      if (typeof ref === "object") {
        (ref as React.MutableRefObject<any>).current = node;
        return;
      }
      console.error(
        "mergeRefs cannot handle Refs of type boolean, number, or string, received ref " +
          String(ref),
        "comet_ui"
      );
    });
  };
}

function useMergeRefs(...refs: RefType[]) {
  const mergedRef = useMemo(() => mergeRefs(...refs), [...refs]);
  return mergedRef;
}

export default useMergeRefs;
