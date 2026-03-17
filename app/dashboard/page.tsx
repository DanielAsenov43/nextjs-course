"use client"
import { useState } from "react";

export default function Page() {
    const [myVar, setMyVar] = useState(0);
    
    return (
        <main>
            <h1>It works!</h1>
            <br />
            <button
            className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none focus:border-none"
            onClick={() => { setMyVar(myVar + 1); }}>Counter: {myVar}</button>
        </main>
    );
}