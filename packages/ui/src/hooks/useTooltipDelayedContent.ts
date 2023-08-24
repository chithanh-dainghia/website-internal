import { useEffect, useRef, useState } from 'react'

interface TooltipDelayedContentProps {
  delayContentMs: number
  isVisible: boolean
}

function useTooltipDelayedContent(props: TooltipDelayedContentProps) {
  const { delayContentMs, isVisible } = props

  // Create a ref to store the visibility status
  const isVisibleRef = useRef(isVisible)

  // Create a ref to store the timeout
  const timeoutRef = useRef<any>(null)

  // Use the useState hook to manage whether the content is pending or not
  const [isPending, setIsPending] = useState(
    isVisible === true && isVisibleRef.current === false && delayContentMs > 0,
  )

  // Use useEffect to handle the logic
  useEffect(() => {
    if (
      isVisible === true &&
      isVisibleRef.current === false &&
      delayContentMs > 0
    ) {
      setIsPending(true) // Update the pending state to true

      // Set a timeout to update the pending state to false after a delay
      timeoutRef.current = setTimeout(() => {
        setIsPending(false) // Update the pending state to false
        timeoutRef.current = null // Clear the timeout reference
      }, delayContentMs)

      // Return a cleanup function to clear the timeout if the effect is unmounted
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
      }
    } else if (timeoutRef.current !== null) {
      setIsPending(false)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Update the ref with the current visibility status
    isVisibleRef.current = isVisible
  }, [delayContentMs, isVisible])

  // Return an object with the pending state
  return {
    isPending: isPending,
  }
}

export default useTooltipDelayedContent

/*

__d("useTooltipDelayedContent", ["clearTimeout", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    // Importing necessary modules
    b = d("react");
    var h = b.useLayoutEffect,
        i = b.useRef,
        j = b.useState;

    // The main function definition
    function a(a) {
        var b = a.delayContentMs,
            d = a.isVisible,
            e = i(d), // Creating a ref to store the visibility status
            f = i(null); // Creating a ref to store the timeout

        // Using the useState hook to manage whether the content is pending or not
        a = j(function() {
            return d === !0 && e.current === !1 && b > 0;
        });

        var g = a[0], // Extracting the state value
            k = a[1]; // Extracting the state updater function

        // Using useLayoutEffect to handle the logic
        h(function() {
            if (d === !0 && e.current === !1 && b > 0) {
                k(!0); // Update the pending state to true

                // Set a timeout to update the pending state to false after a delay
                f.current = c("setTimeout")(function() {
                    k(!1); // Update the pending state to false
                    f.current = null; // Clear the timeout reference
                }, b);

                // Return a cleanup function to clear the timeout if the effect is unmounted
                return function() {
                    c("clearTimeout")(f.current);
                    f.current = null;
                };
            } else
                f.current != null && (k(!1), c("clearTimeout")(f.current), f.current = null);

            e.current = d; // Update the ref with the current visibility status
        }, [b, d, e]);

        // Return an object with the pending state
        return {
            isPending: g
        };
    }

    // Export the function as the default
    g["default"] = a;
}), 98);

*/
