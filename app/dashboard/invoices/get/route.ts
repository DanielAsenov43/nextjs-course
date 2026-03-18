import postgres from "postgres";
export async function GET() {
    return Response.json(await postgres(process.env.POSTGRES_URL!, { ssl: "require" })`SELECT * FROM invoices`);
}