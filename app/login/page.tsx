import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="m-0 p-0 w-screen h-screen flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="w-full md:w-2/5 bg-primary flex flex-col items-center justify-center text-white p-6 md:p-12 lg:p-20">
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <Image
            src="/images/Screenshot 2025-08-25 190316.png"
            alt="appotg"
            className="rounded-lg mb-3"
            width={70}
            height={70}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            App OTG
          </h1>
          <p className="text-sm md:text-base mt-1">Application on the go</p>
        </div>

        <div className="text-center max-w-md px-4 sm:px-6 md:px-0">
          <p className="text-sm sm:text-base leading-relaxed">
            A powerful yet easy-to-use application for managing school systems
            effectively. App OTG is school management system at its finest.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-white">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2">
            Login
          </h1>
          <p className="text-sm sm:text-base text-grey1 mb-6">
            Enter your login details
          </p>

          {/* Center form and make it max 607px wide */}
          <div className="w-full flex justify-start">
            <form className="flex flex-col gap-4 w-full max-w-[607px]">
              {/* Email input */}
              <div className="relative w-full">
                <img
                  src="/images/Vector.png"
                  alt="email icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-3 border border-gray-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-secondary focus:outline-none rounded w-full"
                />
              </div>

              {/* Password input */}
              <div className="relative w-full">
                <img
                  src="/images/Vector (1).png"
                  alt="password icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-10 pr-4 py-3 border border-gray-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-secondary focus:outline-none rounded w-full"
                />
              </div>

              {/* Remember me + Forgot password */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-2 w-full">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="w-4 h-4 text-secondary" />
                  <label className="text-grey1 text-sm">Remember me</label>
                </div>
                <Link href="#" className="text-secondary text-sm">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="bg-secondary text-white rounded-lg py-3 mt-6 hover:bg-secondary/90 transition w-full"
              >
                <Link href="/">Login</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
