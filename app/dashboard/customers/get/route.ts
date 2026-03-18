import { fetchCustomers } from "@/app/lib/data";

export async function GET() {
    return Response.json(await fetchCustomers());
}