import { initialize } from "@pa-client/power-code-sdk/lib/Lifecycle";
import { useEffect, type ReactNode } from "react";

interface PowerProviderProps {
  children: ReactNode;
}

export default function PowerProvider({ children }: PowerProviderProps) {
  useEffect(() => {
    const initApp = async () => {
      try {
        await initialize();
        console.log("Power Platform SDK initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Power Platform SDK:", error);
      }
    };

    initApp();
  }, []);

  return <div className="w-screen h-screen m-0 p-0">{children}</div>;
}
