import {
    isRouteErrorResponse,
    Outlet,
    ScrollRestoration,
    Scripts,
} from 'react-router-dom'; // ✅ Note: changed from "react-router" to "react-router-dom"

import "./app.css";
import ReactQueryProvider from "./provider/react-query-provider";

export default function App() {
    return (
        <ReactQueryProvider>
            <ScrollRestoration />
            <Outlet />
            <Scripts />
        </ReactQueryProvider>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
            )}
        </main>
    );
}
