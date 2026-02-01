import { useState } from "react";
import { API_BASE_URL } from "../api/config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaIdCard, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function EmpLogin() {
  const navigate = useNavigate();

  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!nationalId || !password) {
      setError("يرجى إدخال رقم الهوية وكلمة المرور");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/v1/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ national_id: nationalId, password }),
        }
      );

      const data = await response.json();
      console.log("Login Response Data:", data);

      if (response.status === 200 || response.status === 202) {
        if (data.data && data.data.token) {
           console.log("Saving Token:", data.data.token);
           localStorage.setItem("token", data.data.token);
           
           // Based on UserResource, the ID is available in data.data.id
           if (data.data.id) {
               console.log("Saving Employee ID:", data.data.id);
               localStorage.setItem("employee_id", data.data.id);
           } else {
               console.warn("Employee ID not found in login response.");
           }
        } else {
           console.error("Token not found in response:", data);
        }
        navigate("/emp-dashboard");
        return;
      }

      setError(data.message || "رقم الهوية أو كلمة المرور غير صحيحة");
    } catch (err) {
      setError("حدث خطأ في الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-page"
      style={{
        minHeight: "100vh",
        fontFamily: "Tajawal, sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/images/backg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        className="login-overlay"
        style={{
          position: "absolute",
          inset: 0,
           background: "rgba(200, 200, 200, 0.4)",
        }}
      ></div>
      <img
        src="/images/logo222.png"
        alt="Logo"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "220px",
          height: "220px",
          objectFit: "contain",
          zIndex: 10,
        }}/>

      <div
        className="login-box"
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.85)",
          padding: "35px 30px",
          width: "100%",
          maxWidth: "480px",
          borderRadius: "18px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
          zIndex: 1,
          backdropFilter: "blur(8px)",
        }}
      >
        <h5 className="login-title">أهلا بك في بوابة الموظف</h5>
        <p className="login-subtitle mt-2">
          الرجاء إدخال بيانات الموظف الرسمية
        </p>

        {error && (
          <div
            className="alert alert-danger"
            style={{ fontSize: "14px", textAlign: "center" }}
          >
            {error}
          </div>
        )}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>
              <FaIdCard style={{ marginLeft: "8px" }} /> إسم المستخدم
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل اسم المستخدم"
              maxLength={9}
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <FaLock style={{ marginLeft: "8px" }} /> كلمة المرور
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div
            className="d-flex justify-content-between align-items-center mb-4"
            style={{ fontSize: "14px" }}
          >
            <NavLink
                to="/reset-pass"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                 
                هل نسيت كلمة المرور ؟  
              </NavLink>
            <Form.Check type="checkbox" label="تذكرني" />
           
          </div>

          <Button
            type="submit"
            className="btn-login w-100"
            style={{
              background: "linear-gradient(to top, #014f56, #016A74, #1b8a95)",
              color: "#dadbdd",
              borderRadius: "12px",
              fontWeight: 600,
            }}
            disabled={loading}
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
        </Form>

        <p
          className="text-center mt-4"
          style={{ fontSize: "14px", color: "grey" }}>
          جميع الحقوق محفوظة <br></br>لدى وزارة الإقتصاد الوطني الفلسطيني
        </p>
      </div>
    </div>
  );
}

export default EmpLogin;