import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />
}
