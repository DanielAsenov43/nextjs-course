import postgres from "postgres";
import CustomerList from "@/app/ui/customers/list";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function getAllCustomers() {
    return await sql`SELECT * FROM customers`;
}

export default async function Page() {
    const customers = await getAllCustomers();
    return (
        <CustomerList customers={customers} />
    );
}