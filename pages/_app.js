import "@/styles/globals.css";

import { SocketProvider } from "@/context/socket";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Toaster />
      <div className="dark">
        <Component {...pageProps} />
      </div>
    </SocketProvider>
  );
}
