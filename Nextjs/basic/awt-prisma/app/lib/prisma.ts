import { PrismaMariaDb } from "@prisma/adapter-mariadb"; 
<<<<<<< HEAD
import { PrismaClient } from "@/app/generated/prisma/client"; 
=======
import { PrismaClient } from "@//app/generated/prisma/client"; 
>>>>>>> 8877ae8916a54ae6b3fe49a82a0dccf1645e1583
 
const adapter = new PrismaMariaDb({ 
    host:"localhost", 
    port:3306, 
    user:"root", 
    password:"", 
    database:"lab_demo", 
    connectionLimit:5 
}) 
 
export const prisma = new PrismaClient({adapter}); 