import { Slot, Stack, Tabs } from "expo-router";
import AuthProvider from "../providers/AuthProvider";

export  default function RootLayout() {
    return (
        <AuthProvider>
            <Stack/>
        </AuthProvider>
    )
}