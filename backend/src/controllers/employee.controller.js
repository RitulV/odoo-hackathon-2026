import * as employeeService from "../services/employee.service.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await employeeService.getEmployees();
        res.status(200).json({
            success: true,
            data: employees
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}