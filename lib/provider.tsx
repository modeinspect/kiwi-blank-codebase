"use client";

import { OrbitProvider } from "@kiwicom/orbit-components";
import { defaultTheme } from "@kiwicom/orbit-components";
import * as React from "react";
import RandomIdProvider from '@kiwicom/orbit-components/lib/OrbitProvider/RandomId/Provider';
export default function KiwiOrbitProvider({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <OrbitProvider theme={defaultTheme} useId={React.useId}>
            <RandomIdProvider useId={React.useId}>
                {children}
            </RandomIdProvider>
        </OrbitProvider>
    );
}
