import React from "react";

const MusicContext = (value) => React.createContext(value);

export const MusicProvider = MusicContext.Provider;
export const MusicConsumer = MusicContext.Consumer;

export default MusicContext;