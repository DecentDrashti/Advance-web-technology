"use server" 
 
import { prisma } from "@/app/lib/prisma"; 
import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation"; 
 
async function UpdateUserAction(formData: FormData){ 
    // console.log(formData) 
 
    const UserName = formData.get("UserName") as string; 
    const Password = formData.get("Password") as string; 
 
    const data = {UserName, Password}; 

    await prisma.users.update({where: {UserID: Number(formData.get("UserID"))}, data}); 

    revalidatePath("/users"); 
    redirect("/users") 
} 
 
export {UpdateUserAction} ;