import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
    <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        <FaceFrownIcon className="w-8 text-indigo-400"/>
        <div>User not found</div>
        <Link
            href="/dashboard/invoices"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md transition-color duration-200 hover:bg-indigo-700"
        >Go back</Link>
    </div>
    );
}