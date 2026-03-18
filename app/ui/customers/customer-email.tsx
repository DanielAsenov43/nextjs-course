"use client";

import clsx from "clsx";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";



export default function CustomerEmail({ email, copied, onCopy }:
    { email: string, copied: string, onCopy: MouseEventHandler }) {

    

    return (
        <button
            className={clsx(
                "bg-gray-200 px-2 py-1 rounded-sm text-sm select-none transition duration-100 hover:brightness-90",
                {
                    "bg-green-200 text-green-950": copied === email
                }
            )}
            onClick={onCopy}
        >{email}</button>
    )
}