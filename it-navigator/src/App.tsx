import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-svh w-8/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6">How to create Cv?</h1>
        <Card className="w-3/4">
          <CardHeader>
            <CardTitle>Step 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Step 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
