/**
 * Neon (Postgres) database initialization module
 * Neon's connection string (postgresql://user:pass@host/dbname) replaces 
 * the three separate Firebase env vars. Vercel will inject DATABASE_URL 
 * automatically when you link your Neon integration in the Vercel dashboard.
 */
import { Pool } from "pg";

const getDbConfig = () => {
    const { DATABASE_URL } = process.env;

    if (!DATABASE_URL) {
        throw new Error(
            "Missing DATABASE_URL. Please check your environment variables."
        );
    }

    return { connectionString: DATABASE_URL };
};

// Singleton pool instance
let pool: Pool | null = null;

const getPool = (): Pool => {
    if (pool) return pool;
    pool = new Pool(getDbConfig());
    return pool;
};

const db = getPool();

export { db };