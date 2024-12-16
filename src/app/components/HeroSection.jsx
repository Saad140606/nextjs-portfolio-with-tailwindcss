export default function Home() {
  return (
    <main>
       
      {/* Upper Navbar */}
      <div className=" h-14 bg-gray-300"></div>
           <div className="min-h-screen flex items-center justify-center bg-D9D9D9 ">
      <div className="max-w-6xl mx-auto bg-white  flex items-center p-8 rounded-md">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Welcome To Our Website
          </h1>
          <p className="text-gray-500 w-571 h-156 text-2xl align-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's <br /> standard.
          </p><br /><br />
          <button className="bg-black text-white py-2 px-4 w-237 h-66 hover:bg-gray-800">
            Contact US
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-502 h-465  overflow-hidden ">
            <img
              src="/image/image.png"
              alt="Abstract Black"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </main>
    
  );
}
