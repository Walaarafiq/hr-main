import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaIdCard, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
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
        "https://darksalmon-anteater-608881.hostingersite.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            national_id: nationalId,
            password: password,
          }),
        }
      );

      const data = await response.json();

      // نجاح (202 أو 200)
      if (response.status === 200 || response.status === 202) {
        localStorage.setItem("token", data.data.token);
        navigate("/dashboard");
        return;
      }

      // فشل تسجيل الدخول
      setError(data.message || "رقم الهوية أو كلمة المرور غير صحيحة");

    } catch (err) {
      setError("حدث خطأ في الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mainLogin m-0 p-0" style={{ minHeight: "100vh" }}>
      <div className="row m-0" style={{ minHeight: "100vh" }}>

        {/* الصورة */}
        <div className="col-12 col-md-6 p-0 d-none d-md-block">
          <img
            src="/images/mainlogo.webp"
            alt="Logo"
            style={{
              width: "75%",
              height: "75%",
              objectFit: "contain",
              display: "block",
              margin: "50px auto",
              paddingTop: "50px",
            }}
          />
        </div>

        {/* الفورم */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="login-box w-100"
            style={{
              maxWidth: 550,
              height: 560,
              backgroundColor: "#fff",
              padding: "3rem",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            }}
          >
            <h5 className="text-center mb-2">
              نظام إدارة معلومات الموظفين الإداري والمالي
            </h5>
            <h4 className="text-center mb-4">
              الخدمات الإلكترونية للموظفين
            </h4>

            {error && (
              <div className="alert alert-danger text-center" style={{ fontSize: "14px" }}>
                {error}
              </div>
            )}

            <Form onSubmit={handleLogin}>
              {/* رقم الهوية */}
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaIdCard style={{ marginLeft: "8px" }} />
                  رقم الهوية الوطنية
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل رقم الهوية"
                  maxLength={9}
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                />
              </Form.Group>

              {/* كلمة المرور */}
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaLock style={{ marginLeft: "8px" }} />
                  كلمة المرور
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" label="تذكرني" />
                <span style={{ fontSize: "13px" }}>هل نسيت كلمة المرور؟</span>
              </div>

              <Button type="submit" className="w-100" disabled={loading}>
                {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
            </Form>

            <p className="text-center mt-4" style={{ fontSize: "12px" }}>
              جميع الحقوق محفوظة لدى وزارة الإقتصاد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
