import { authFetch } from "./auth";

/* جلب بيانات لوحة تحكم الموظف */
export const getEmployeeDashboard = async () => {
  const response = await authFetch("/v1/employee/dashboard", {
    method: "GET",
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("UNAUTHENTICATED");
    }
    const errorData = await response.json();
    throw new Error(errorData.message || "FAILED_TO_FETCH_DASHBOARD");
  }

  return response.json();
};
