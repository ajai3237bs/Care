"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RegisterModal({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        place: "",
        careType: "",
    });

    const [dropdownOpen, setDropdownOpen] = useState(false); // 👈 NEW
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const options = [
        { label: "Postpartum Care", value: "postpartum" },
        { label: "Elder Care", value: "elder" },
    ];

    const selected = options.find((opt) => opt.value === form.careType);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 👇 Manual validation for dropdown
        if (!form.careType) {
            alert("Please select care type");
            return;
        }

        setLoading(true);

        try {
            console.log("Form Data:", form);
            await new Promise((res) => setTimeout(res, 1000));
            setSuccess(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 flex items-center justify-center z-[9999] backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-3xl p-6 shadow-2xl bg-white/95 backdrop-blur-xl border border-white/30 relative"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
                >
                    ✕
                </button>

                {!success ? (
                    <>
                        {/* Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Get Care Started
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                We will connect you with the right care
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Inputs */}
                            {[
                                { name: "name", placeholder: "Full Name" },
                                { name: "phone", placeholder: "Phone Number" },
                                { name: "email", placeholder: "Email", type: "email" },
                                { name: "place", placeholder: "Your Location" },
                            ].map((field) => (
                                <div key={field.name} className="relative">
                                    <input
                                        type={field.type || "text"}
                                        name={field.name}
                                        placeholder=" "
                                        required
                                        onChange={handleChange}
                                        className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 outline-none transition"
                                    />
                                    <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#D4A373]">
                                        {field.placeholder}
                                    </label>
                                </div>
                            ))}

                            {/* 🔥 Custom Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-grey-200 hover:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition"
                                >
                                    <span className={selected ? "text-gray-800" : "text-gray-400"}>
                                        {selected ? selected.label : "Select Care Type"}
                                    </span>

                                    <ChevronDown
                                        className={`w-4 h-4 transition ${dropdownOpen
                                                ? "rotate-180 text-[#D4A373]"
                                                : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
                                        {options.map((opt) => (
                                            <div
                                                key={opt.value}
                                                onClick={() => {
                                                    setForm({ ...form, careType: opt.value });
                                                    setDropdownOpen(false);
                                                }}
                                                className="px-4 py-3 cursor-pointer hover:bg-[#D4A373]/10 hover:text-[#D4A373] transition"
                                            >
                                                {opt.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#D4A373] text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition"
                            >
                                {loading ? "Submitting..." : "Get Started"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <div className="text-4xl mb-2">🎉</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Request Submitted
                        </h3>
                        <p className="text-gray-500">
                            Our team will contact you shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}