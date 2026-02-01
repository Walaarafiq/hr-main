import { authFetch } from "./auth";

/* إضافة زوجة */
export const addSpouse = async (formData) => {
  const response = await authFetch("/v1/spouses", {
    method: "POST",
    body: formData, // Sending FormData directly
    // Do NOT set Content-Type header when sending FormData, 
    // the browser setting it automatically with the boundary is required.
    headers: {}, 
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "فشل في إضافة الزوجة");
  }

  return response.json();
};

/* إضافة ابن/ابنة */
export const addChild = async (formData) => {
    const response = await authFetch("/v1/children", {
      method: "POST",
      body: formData,
      headers: {},
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "فشل في إضافة الابن/الابنة");
    }
  
    return response.json();
};

/* إضافة معال */
export const addDependent = async (formData) => {
    const response = await authFetch("/v1/dependents", {
      method: "POST",
      body: formData,
      headers: {},
    });
  
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "فشل في إضافة المعال");
    }
  
    return response.json();
};

/* إضافة شهادة علمية */
export const addCertificate = async (formData) => {
    const response = await authFetch("/v1/employee-degrees", {
      method: "POST",
      body: formData,
      headers: {},
    });
  
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "فشل في إضافة الشهادة");
    }
  
    return response.json();
};
