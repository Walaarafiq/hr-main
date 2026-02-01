// import api from "./api";

// export const login = (email, password) => {
//   return api.post("/login", {
//     national_id,
//     password,
//   });
// };
import { API_BASE_URL } from "./config";

export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  console.log("Sending Request to:", `${API_BASE_URL}${url}`);
  console.log("With Token:", token);

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    ...options.headers,
  };

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  return response;
};

export const changePassword = async (currentPassword, newPassword, newPasswordConfirmation) => {
  const response = await authFetch("/v1/change-password", {
    method: "POST",
    body: JSON.stringify({
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: newPasswordConfirmation,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "فشل في تغيير كلمة المرور");
  }

  return response.json();
};

