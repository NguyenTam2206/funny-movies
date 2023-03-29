import { AppProps } from "next/app";
import "./styles.css";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "~/components/ui/modal/ModalContext";
import ManagedModal from "../components/ui/modal/ManagedModal";
import { UIProvider } from "../contexts/ui.context";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ReactNode } from "react";
import { NextPage } from "next";
import useTheme from "../hooks/useTheme";
import createTheme from "~/config/theme";
import { ThemeProvider } from "~/contexts/ThemeContext";

const cache = createCache({
  key: "css",
  prepend: true,
});

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

function CustomApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const { theme } = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <HelmetProvider>
          <Helmet titleTemplate="Funny Movies" defaultTitle="Funny Movies" />
          <UIProvider>
            <ModalProvider>
              <MuiThemeProvider theme={createTheme(theme)}>
                {getLayout(<Component {...pageProps} />)}
                <ToastContainer autoClose={2000} theme="colored" />
                <ManagedModal />
              </MuiThemeProvider>
            </ModalProvider>
          </UIProvider>
        </HelmetProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}

const withThemeProvider = (Component: any) => {
  const AppWithThemeProvider = (props: JSX.IntrinsicAttributes) => {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    );
  };
  AppWithThemeProvider.displayName = "AppWithThemeProvider";
  return AppWithThemeProvider;
};

export default withThemeProvider(CustomApp);
