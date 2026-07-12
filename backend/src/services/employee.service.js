import * as employeeRepository from "../repositories/employee.repository.js";
import { Roles } from "../constants/roles.js";

const RoleNames = Object.fromEntries(
    Object.entries(Roles).map(([key, value]) => [value, key])
);

export const getEmployees = async () => {
    const employees = await employeeRepository.getEmployees();

    return employees.map(employee => ({
        ...employee,
        role: RoleNames[employee.role] ?? "UNKNOWN"
    }));
};