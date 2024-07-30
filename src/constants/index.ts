import localFont from "next/font/local";

export const defaultBanner =
  "https://images.unsplash.com/photo-1552265129-2ac1a82da59e?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const marsel = localFont({
  src: [
    {
      path: "../../public/fonts/marsel/MarselTRIAL-Regular-BF6618a1b45dda4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/marsel/MarselTRIAL-Bold-BF6618a1b4158b8.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/marsel/MarselTRIAL-Thin-BF6618a1b472b09.otf",
      weight: "100",
      style: "normal",
    },
  ],
});
