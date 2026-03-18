import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
export async function GET() {
    return Response.json(await sql`SELECT * FROM customers`);
}