import sql from '../config/db.js';

export const getEmployees = async () => {
    return await sql`
    SELECT
    id,
    name,
    email,
    role
    FROM "admin"."Employees"
    WHERE is_active = true
    ORDER BY name;`;
}