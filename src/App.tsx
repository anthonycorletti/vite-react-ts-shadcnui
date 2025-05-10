import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "./lib/utils";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={cn("flex flex-row items-center justify-center space-x-2")}>
      <img src="/vite.svg" alt="it's react" />
      <div className={cn("flex items-center justify-center min-h-screen")}>
        <Button onClick={() => setCount(count + 1)}>Click me {count}</Button>
      </div>
    </div>
  );
}
