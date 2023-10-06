import { renderToString } from "preact-render-to-string";
import React from "react";
import { useSyncExternalStore } from "use-sync-external-store/shim/index.js";

const App = () => {
  const foo = useSyncExternalStore(
    () => {},
    () => "foo",
  );
  return <div>{foo}</div>;
};
console.log(renderToString(<App />));
