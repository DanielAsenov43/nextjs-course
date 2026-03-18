"use client";

import Image from "next/image";
import CustomerEmail from "./customer-email";
import { Row, RowList } from "postgres";
import { useState } from "react";

export default function CustomerList({ customers }: { customers: RowList<Row[]> }) {
    const [copied, setCopied] = useState("");

    function copyToClipboard(text: string) {
        try {
            navigator.clipboard.writeText(text);
            setCopied(text);
        } catch (exception) { console.error("Failed to copy to clipboard"); }
    }

    return (<div className="flex flex-col divide-y-2 divide-gray-200">
        {customers?.map((customer) => (
            <div key={customer.id} className="flex flex-row items-center gap-4 h-12">
                <Image
                    src={customer.image_url} width={28} height={28} alt={customer.name}
                    className="rounded-full select-none"
                />
                <div>{customer.name}</div>

                <CustomerEmail email={customer.email} copied={copied} onCopy={() => copyToClipboard(customer.email)} />
            </div>
        ))}
    </div>)
}