export const getTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          text: {
            main: "hsl(200, 15%, 8%)",
          },
          elements: {
            main: "hsl(0, 0%, 100%)",
          },
          background: {
            main: "hsl(0, 0%, 98%)",
          },
          input: {
            main: "hsl(0, 0%, 52%)",
          },
        }
      : {
          text: {
            main: "hsl(0, 0%, 100%)",
          },
          elements: {
            main: "hsl(209, 23%, 22%)",
          },
          background: {
            main: "hsl(207, 26%, 17%)",
          },
          input: {
            main: "hsl(0, 0%, 100%)",
          },
        }),
  },
});
