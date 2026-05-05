"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const C = {
  950: "#051F20",
  900: "#0B2B26",
  800: "#163832",
  700: "#1D4F42",
  300: "#8EB69B",
  100: "#DAF1DE",
  terra: "#C8A96A",
  cream: "#F5F0E8",
};

// function LeafLogo({ size = 36 }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
//       <path
//         d="M17 3C17 3 5 10 5 21C5 27.6 10.4 33 17 33C23.6 33 29 27.6 29 21C29 10 17 3 17 3Z"
//         fill="#8EB69B"
//       />
//       <path d="M17 33V17" stroke="#DAF1DE" strokeWidth="1.8" strokeLinecap="round" />
//       <path d="M17 23L12 18" stroke="#DAF1DE" strokeWidth="1.8" strokeLinecap="round" />
//       <path d="M17 23L22 18" stroke="#DAF1DE" strokeWidth="1.8" strokeLinecap="round" />
//     </svg>
//   );
// }

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setError("Invalid credentials. Please try again.");
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "0.8rem 1rem",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${focusedField === field ? C[300] : "rgba(142,182,155,0.2)"}`,
    borderRadius: "0.75rem",
    color: C[100],
    fontSize: "0.9rem",
    fontFamily: "var(--font-dm-sans)",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  return (
    <div style={{ minHeight: "100vh", display: "flex", backgroundColor: C[950] }}>
      {/* Left Panel — brand/quote, desktop only */}
      <div
        className="hidden lg:flex"
        style={{
          width: "44%",
          flexShrink: 0,
          backgroundImage: "url('/asset/loginbanner.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5rem 3.5rem 3rem",
          position: "relative",
          overflow: "hidden",
          borderRight: "1px solid rgba(142,182,155,0.1)",
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(5,31,32,0.35) 0%, rgba(5,31,32,0.65) 100%)",
          zIndex: 1,
        }} />
      </div>

      {/* Right Panel — form */}
      <div style={{
        flex: 1,
        backgroundColor: C[900],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5.5rem 2rem 2.5rem",
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Mobile logo */}
          {/* <div className="lg:hidden" style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
            >
              <LeafLogo size={30} />
              <span style={{ fontFamily: "var(--font-lora)", color: C[100], fontSize: "1.2rem", fontWeight: "700" }}>
                Celedon
              </span>
            </Link>
          </div> */}

          {/* Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{
              fontFamily: "var(--font-lora)",
              fontSize: "2rem",
              fontWeight: "700",
              color: C[100],
              marginBottom: "0.5rem",
              lineHeight: "1.2",
            }}>
              Welcome back
            </h1>
            <p style={{ color: C[300], fontSize: "0.875rem" }}>
              Don&apos;t have an account?{" "}
              <Link
                href="/authentication/register"
                style={{ color: C.terra, fontWeight: "600", textDecoration: "none" }}
              >
                Create one
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Error banner */}
            {error && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.875rem 1rem",
                backgroundColor: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: "0.75rem",
                color: "#FCA5A5",
                fontSize: "0.85rem",
                fontFamily: "var(--font-dm-sans)",
              }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: "600",
                color: C[300],
                marginBottom: "0.5rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans)",
              }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={inputStyle("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Password */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <label style={{
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: C[300],
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                }}>
                  Password
                </label>
                <Link href="#" style={{ fontSize: "0.75rem", color: C.terra, textDecoration: "none", fontFamily: "var(--font-dm-sans)" }}>
                  Forgot password?
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ ...inputStyle("password"), paddingRight: "3rem" }}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "0.875rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: C[300],
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    opacity: 0.7,
                  }}
                >
                  {showPassword ? (
                    <svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <input
                type="checkbox"
                id="remember"
                style={{ width: "1rem", height: "1rem", accentColor: C.terra, cursor: "pointer", flexShrink: 0 }}
              />
              <label htmlFor="remember" style={{
                fontSize: "0.85rem",
                color: C[300],
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
                opacity: 0.85,
              }}>
                Keep me signed in for 30 days
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "0.9rem",
                backgroundColor: loading ? "rgba(200,169,106,0.45)" : C.terra,
                color: "#fff",
                border: "none",
                borderRadius: "9999px",
                fontSize: "0.9rem",
                fontWeight: "600",
                fontFamily: "var(--font-dm-sans)",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                transition: "background-color 0.2s",
                marginTop: "0.25rem",
                letterSpacing: "0.01em",
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path opacity="0.75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                <>
                  Sign In
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p style={{
            marginTop: "2rem",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "rgba(142,182,155,0.45)",
            fontFamily: "var(--font-dm-sans)",
            lineHeight: "1.6",
          }}>
            By signing in, you agree to our{" "}
            <a href="#" style={{ color: C[300], textDecoration: "underline", opacity: 0.7 }}>Terms of Service</a>{" "}
            and{" "}
            <a href="#" style={{ color: C[300], textDecoration: "underline", opacity: 0.7 }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
