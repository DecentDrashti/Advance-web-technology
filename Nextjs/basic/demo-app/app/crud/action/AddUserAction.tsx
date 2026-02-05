"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function AddUserAction(formData: FormData) {
  const Title = formData.get("Title")?.toString();
  const Body = formData.get("Body")?.toString();

  if (!Title || !Body) {
    throw new Error("All fields required");
  }

  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Title, Body }),
  });

  revalidatePath("/crud");
  redirect("/crud");
}
// Important Truth (Exam + Real World)

// JSONPlaceholder is a mock API, not a real database.

// ✔ POST / PUT / DELETE → fake
// ✔ GET → always same static data