"use client";

/* eslint-disable no-nested-ternary */
import * as NProgress from "nprogress";
import * as React from "react";
import { create } from "zustand";

export type NextTopLoaderProps = {
  initialPosition?: number;
  crawlSpeed?: number;
  height?: number;
  crawl?: boolean;
  showSpinner?: boolean;
  easing?: string;
  speed?: number;
  shadow?: string | false;
  delay?: number;
};

const isAnchorOfCurrentUrl = (currentUrl: string, newUrl: string) => {
  const currentUrlObj = new URL(currentUrl);
  const newUrlObj = new URL(newUrl);
  const currentHash = currentUrlObj.hash;
  const newHash = newUrlObj.hash;

  return (
    currentUrlObj.hostname === newUrlObj.hostname &&
    currentUrlObj.pathname === newUrlObj.pathname &&
    currentUrlObj.search === newUrlObj.search &&
    currentHash !== newHash &&
    currentUrlObj.href.replace(currentHash, "") ===
      newUrlObj.href.replace(newHash, "")
  );
};

export const useNextTopLoaderStore = create<{
  isEnable: boolean;
  disable: () => void;
  enable: () => void;
}>((set) => ({
  isEnable: true,
  disable: () => set({ isEnable: false }),
  enable: () => set({ isEnable: true }),
}));

export const NextTopLoader = ({
  height = 3,
  showSpinner = true,
  crawl = true,
  crawlSpeed = 200,
  initialPosition = 0.08,
  easing = "ease",
  speed = 200,
  shadow,
  delay = 0,
}: NextTopLoaderProps) => {
  // Any falsy (except undefined) will disable the shadow
  const boxShadow =
    !shadow && shadow !== undefined
      ? ""
      : shadow
      ? `box-shadow:${shadow}`
      : `box-shadow:0 0 10px hsl(var(--primary)),0 0 5px hsl(var(--primary))`;

  const styles = (
    <style>
      {`
      #nprogress {
        pointer-events:none
      }

      #nprogress .bar {
        background:hsl(var(--primary));
        position:fixed;
        z-index:1031;
        top:0;
        left:0;
        width:100%;
        height:${height}px
      }
      
      #nprogress .peg {
        display:block;
        position:absolute;
        right:0;
        width:100px;
        height:100%;
        ${boxShadow};
        opacity:1;
        -webkit-transform:rotate(3deg) translate(0px,-4px);
        -ms-transform:rotate(3deg) translate(0px,-4px);
        transform:rotate(3deg) translate(0px,-4px)
      }

      
      .nprogress-custom-parent {
        overflow:hidden;
        position:relative
      }
      
      .nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner {
        position:absolute
      }
      `}
    </style>
  );

  React.useEffect(() => {
    NProgress.configure({
      showSpinner,
      trickle: crawl,
      trickleSpeed: crawlSpeed,
      minimum: initialPosition,
      easing,
      speed,
    });

    const handleNProgressStart = () => {
      let isDone = false;
      setTimeout(() => {
        if (!isDone) {
          NProgress.start();
        }
      }, 100);

      const originalPushState = window.history.pushState;
      window.history.pushState = function (...args) {
        isDone = true;
        NProgress.done();
        document.querySelector("html")?.classList.remove("nprogress-busy");
        return originalPushState.apply(window.history, args);
      };
    };

    const handleQuickProgress = () => {
      if (delay === 0) {
        NProgress.start();
        NProgress.done();
        document.querySelector("html")?.classList.remove("nprogress-busy");
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (useNextTopLoaderStore.getState().isEnable === false) return;

      // if ctrl or cmd key is pressed, don't intercept
      if (event.ctrlKey || event.metaKey) return;

      try {
        const target = event.target as HTMLElement;
        const anchor = target.closest("a");

        if (!anchor) return;

        const currentUrl = window.location.href;
        const newUrl = anchor.href;
        const isExternalLink = anchor.target === "_blank";
        const isAnchor = isAnchorOfCurrentUrl(currentUrl, newUrl);
        const isDisabled = anchor.getAttribute("data-toploader-disabled");

        if (isDisabled === "true") return;

        if (newUrl === currentUrl || isAnchor || isExternalLink) {
          handleQuickProgress();
        } else {
          handleNProgressStart();
        }
      } catch {
        handleQuickProgress();
      }
    };

    // Add the global click event listener
    document.addEventListener("click", handleClick);

    // Clean up the global click event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return styles;
};

export const stopLoading = () => {
  setTimeout(() => {
    NProgress.start();
    NProgress.done();
    document.querySelector("html")?.classList.remove("nprogress-busy");
  }, 100);
};
