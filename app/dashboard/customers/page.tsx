import postgres from "postgres";
import CustomerList from "@/app/ui/customers/list";
import { lusitana } from "@/app/ui/fonts";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function getAllCustomers() {
    return await sql`SELECT * FROM customers`;
}

export default async function Page() {
    const customers = await getAllCustomers();
    return (
        <>
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Customers</h1>
            <CustomerList customers={customers} />
        </>
    );
}