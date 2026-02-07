"use client";

import { Slider } from "@/components/widgets/slider";
import { ReduxProvider } from "@/shared/redux";

export default function Home() {
  return (
    <ReduxProvider>
      <Slider />
    </ReduxProvider>
  );
}
