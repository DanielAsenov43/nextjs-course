"use client";

import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function Error({ error, reset }: {
    error: Error & { digest?: string },
    reset: () => void
}) {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
            <FaceFrownIcon className="w-8 text-indigo-400" />
            <div>An error has occured</div>
            <button
            className="bg-indigo-600 px-4 py-2 text-white rounded-md hover:bg-indigo-700 transition duration-100"
                onClick={() => reset()}
            >Try again</button>
        </div>
    );
}