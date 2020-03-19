import React from "react";

const MusicContext = React.createContext(true);

export const MusicProvider = MusicContext.Provider;
export const MusicConsumer = MusicContext.Consumer;

export default MusicContext;