"use client";

import Image from "next/image";
import { Row, RowList } from "postgres";
import { useState } from "react";
import clsx from "clsx";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function CustomerList({ customers }: { customers: RowList<Row[]> }) {
    const [copied, setCopied] = useState("");

    function copyToClipboard(text: string) {
        if (text === copied) return;
        try {
            navigator.clipboard.writeText(text);
            setCopied(text);
        } catch (exception) { console.error("Failed to copy to clipboard"); }
    }

    return (
        <>
            {copied && <div className="flex flex-row items-center gap-1 py-2 text-gray-500">
                <span>Copied "{copied}"</span>
                <CheckBadgeIcon className="w-6" />
            </div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 select-none">
                {customers?.map((customer) => (
                    <div key={customer.id} className="flex flex-col rounded-md bg-gray-200 overflow-hidden gap-2 relative">
                        <div className="grid grid-cols-[20px_auto] justify-center items-center gap-2 p-2 mb-8">
                            <Image
                                src={customer.image_url} width={28} height={28} alt={customer.name}
                                className="rounded-full"
                            />
                            <div className="font-bold text-l flex justify-center">{customer.name}</div>
                        </div>
                        <button className={clsx(
                            "flex justify-center text-white bg-blue-400 py-1 transition duration-100 hover:brightness-90 w-full absolute bottom-0",
                            {
                                "bg-green-400 text-green-900": copied === customer.email
                            }
                        )} onClick={() => copyToClipboard(customer.email)}>{customer.email}</button>
                    </div>
                ))}
            </div>
        </>
    )
}