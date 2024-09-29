import { Button } from "@/components/ui/button"
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider"

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <ThemeProvider>
            <Button onClick={() => setCount(count + 1)}>
                Click me {count}
            </Button >
        </ThemeProvider>
    )
}
