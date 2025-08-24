import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.scss'
import { loginApi, registerApi } from '../api/authApi';


const LoginPage = () => {
    const errorMessages = {
        USERNAME_INVALID: "Tên đăng nhập phải có ít nhất 3 ký tự.",
        PASSWORD_INVALID: "Mật khẩu phải có ít nhất 6 ký tự.",
    };
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const trimmedPassword = password.trim();
        const trimmedEmail = email.trim();

        // Kiểm tra phía client trước
        const newFieldErrors = {};
        if (trimmedPassword.length < 6) {
            newFieldErrors.password = "PASSWORD_INVALID";
        }
        if (!trimmedEmail) {
            newFieldErrors.email = "Email không được để trống.";
        }
        if (Object.keys(newFieldErrors).length > 0) {
            setFieldErrors(newFieldErrors); // Gán lỗi để hiển thị
            return; // Không gọi API nếu chưa hợp lệ
        }

        if (isLogin) {
            // Xử lý đăng nhập
            try {
                const response = await loginApi({

                    email: trimmedEmail,
                    password: trimmedPassword,
                });
                console.log(response.data)
                if (response.data.id) {
                    setRole(response.role);
                    setIsLogin(true);
                    navigate(`/`)
                } else {
                    setError("Email or password is incorrect");
                }
            } catch (err) {
                if (err && typeof err === 'object') {
                    setFieldErrors(err);
                } else {
                    setError("Login failed!");
                }
            }
        } else {
            // Xử lý đăng ký
            try {
                const response = await registerApi({
                    password: trimmedPassword,
                    email: trimmedEmail,
                });

                alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
                setIsLogin(true); // chuyển về form login
            } catch (err) {
                if (err.response?.data?.result && typeof err.response.data.result === 'object') {
                    setFieldErrors(err.response.data.result);
                } else {
                    setError("Đăng ký thất bại!");
                }
            }
        }
    };

    useEffect(() => {
        if (role) { // Kiểm tra nếu role đã được cập nhật
            switch (role) {
                // case 'admin':
                //     navigate('/AdminHome')
                //     break;
                case 'user' || 'teacher':
                    navigate('/');
                    break;
                default:
                    alert("Login failed! Check your username and password.");
                    break;
            }
        }
    }, [role, navigate]);



    return (
        <div className='auth-page'>
            <div className="auth-form">
                <h2>{isLogin ? 'Login' : 'REGISTER'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-field">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setFieldErrors((prev) => ({ ...prev, password: null }));
                            }}
                            required
                        />

                        {fieldErrors.password && (
                            <p className="error-text">
                                {errorMessages[fieldErrors.password] || fieldErrors.password}
                            </p>
                        )}
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>

                {error && <p className="error">{error}</p>}

                <div className="auth-options">
                    {isLogin && <button className="forgot">Forgot password?</button>}
                    <button className="toggle" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Create an account' : 'Already have an account?'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
