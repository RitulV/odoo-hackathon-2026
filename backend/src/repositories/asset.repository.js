import sql from "../config/db.js"

export const getAssets = async() => {
    return await sql`
    SELECT *
    FROM "admin"."Assets"`
}