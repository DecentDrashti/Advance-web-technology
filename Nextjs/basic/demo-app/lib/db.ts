import sql from "mssql";

/**
 * SQL Server configuration
 */
const config: sql.config = {
  server: "DESKTOP-3I9H4UB\\SQLEXPRESS",
  database: "lab_awt",
  options: {
    encrypt: false, // true for Azure
    trustServerCertificate: true
  }
};

/**
 * Connect to SQL Server
 */
export async function connectDB(): Promise<sql.ConnectionPool> {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}
