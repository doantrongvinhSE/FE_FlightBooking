import { Checkbox, Input } from "antd";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";


export default function Register() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/346/197/170/clouds-sky-wallpaper-preview.jpg')] bg-cover bg-center flex h-screen flex-1 flex-col justify-center lg:px-8">
        <div className="bg-white p-7 rounded-2xl w-1/5 mx-auto shadow-xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://www.bambooairways.com/o/wpbav-home-theme/css/assets/logo.png"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Register new account
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Input
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                    type="email"
                    prefix={<MdOutlineMailOutline className="text-lg" />}
                    required
                    autoComplete="email"
                    className=" flex w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <Input
                    placeholder="John Kany"
                    id="email"
                    name="email"
                    type="email"
                    prefix={<FaRegUser className="text-base" />}
                    required
                    autoComplete="email"
                    className=" flex w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>

                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    prefix={<TbPasswordFingerprint className="text-lg" />}
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                    className="w-full rounded-md bg-white px-3 py-1.5 text-base  text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

            

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-3 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm/6 text-gray-500">
              Already a member?{" "}
              <a
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Login now
              </a>
            </p>
          </div>
        
          
        </div>
      </div>
    </>
  );
}