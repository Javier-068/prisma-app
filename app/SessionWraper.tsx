// app/SessionWrapper.tsx
"use client";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";

export default function SessionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Header />
            {children}
        </SessionProvider>
    );
}