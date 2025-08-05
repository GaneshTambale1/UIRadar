"use client";

import dynamic from "next/dynamic";

// Dynamically import App to ensure it's client-only
const App = dynamic(() => import("../src/App"), { ssr: false });

export default function SyntheticV0PageForDeployment() {
  return <App />;
}

