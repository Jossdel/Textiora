import { useState } from "react";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getStrength = (val) => {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    return score;
  };

  const strength = getStrength(password);
  const strengthColor = (index) => {
    if (index >= strength) return "bg-white/10";
    if (strength === 1) return "bg-red-500";
    if (strength === 2) return "bg-amber-400";
    return "bg-emerald-400";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/5">
        {/* ── LEFT COVER ── */}
        <div className="relative bg-[#0d0b1a] p-10 flex flex-col justify-between overflow-hidden">
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-violet-700/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-purple-600/15 blur-3xl" />
          </div>
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1
              className="text-white font-bold text-lg tracking-tight"
              style={{ fontFamily: "sans-serif" }}
            >
              Textiora
            </h1>
          </div>

          {/* Headline */}
          <div className="relative z-10 py-10">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
              Ahora en beta
            </div>
            <h2 className="text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Todo lo que
              <br />
              necesitas,{" "}
              <span className="italic bg-linear-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">
                en un lugar.
              </span>
            </h2>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Organiza, colabora y crea sin límites. Únete a miles de equipos
              que ya confían en nosotros.
            </p>
          </div>

          {/* Features */}
          <div className="relative z-10 flex flex-col gap-3">
            {[
              { icon: "🛡️", text: "Seguridad de nivel empresarial" },
              { icon: "👥", text: "Colaboración en tiempo real" },
              { icon: "🚀", text: "Listo en menos de 2 minutos" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-sm shrink-0">
                  {icon}
                </div>
                <span className="text-sm text-white/40">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT FORM ── */}
        <div className="bg-[#13131a] px-10 py-10 flex flex-col justify-center border-l border-white/5">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest mb-5 w-fit">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            Registro gratuito
          </div>

          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-1">
            Crea tu cuenta
          </h1>
          <p className="text-sm text-white/30 mb-6">
            ¿Ya tienes cuenta?{" "}
            <a href="#" className="text-violet-400 hover:underline">
              Inicia sesión
            </a>
          </p>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {[
              {
                label: "Google",
                icon: (
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                icon: (
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                className="flex items-center justify-center gap-2 bg-[#0d0d15] border border-white/8 rounded-lg py-2.5 text-xs text-white/40 font-medium hover:border-white/20 hover:text-white/70 hover:bg-white/5 transition-all"
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-white/20">o con email</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Name row */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {["Nombre", "Apellido"].map((label) => (
              <div key={label}>
                <label className="block text-xs font-medium text-white/30 uppercase tracking-widest mb-1.5">
                  {label}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder={label === "Nombre" ? "Ana" : "García"}
                    className="w-full bg-[#0d0d15] border border-white/8 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white/80 placeholder-white/15 outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600/15 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-white/30 uppercase tracking-widest mb-1.5">
              Correo electrónico
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="ana@ejemplo.com"
                className="w-full bg-[#0d0d15] border border-white/8 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white/80 placeholder-white/15 outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600/15 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-1">
            <label className="block text-xs font-medium text-white/30 uppercase tracking-widest mb-1.5">
              Contraseña
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0d0d15] border border-white/8 rounded-lg pl-9 pr-10 py-2.5 text-sm text-white/80 placeholder-white/15 outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600/15 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-violet-400 transition-colors"
              >
                {showPassword ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Strength bars */}
            <div className="flex gap-1 mt-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${strengthColor(i)}`}
                />
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2.5 mt-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-0.5 w-3.5 h-3.5 accent-violet-600 bg-[#0d0d15] border-white/10 rounded cursor-pointer shrink-0"
            />
            <label
              htmlFor="terms"
              className="text-xs text-white/25 cursor-pointer leading-relaxed"
            >
              Acepto los{" "}
              <a href="#" className="text-violet-400 hover:underline">
                Términos
              </a>{" "}
              y la{" "}
              <a href="#" className="text-violet-400 hover:underline">
                Política de privacidad
              </a>
            </label>
          </div>

          {/* Submit */}
          <button className="mt-5 w-full bg-linear-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-900/40 active:translate-y-0">
            Crear cuenta gratis
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
