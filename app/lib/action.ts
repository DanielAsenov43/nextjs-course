"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import z, { custom } from "zod";
import { UpdateInvoice } from "../ui/invoices/buttons";
import { fetchInvoiceById } from "./data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const INVOICES_PATH = "/dashboard/invoices";

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(["pending", "paid"]),
    date: z.string()
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const EditInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    });

    const amountInCents = Number(amount) * 100;
    const date = new Date().toISOString().split("T")[0];

    await sql`
        INSERT INTO invoices (customer_id, amount, status, date) VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    revalidatePath(INVOICES_PATH);
    redirect(INVOICES_PATH);
}

export async function editInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = EditInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    });

    const amountInCents = Number(amount) * 100;

    await sql`
        UPDATE invoices SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status} WHERE id = ${id}
    `;
    revalidatePath(INVOICES_PATH);
    redirect(INVOICES_PATH);
}

export async function deleteInvoice(id: string) {
    throw new Error("Failed to delete invoice");

    await sql`
        DELETE FROM invoices WHERE id = ${id}
    `;

    revalidatePath("/dashboard/invoices");
}