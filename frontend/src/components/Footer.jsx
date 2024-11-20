
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-800 relative font-medium text-white ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-950/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-orange-950/20 rounded-full filter blur-[80px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container my-1 mx-auto relative z-10 flex-col items-center text-center">
        <div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-purple-300">
            Fresher © 2024
          </h3>
          <p className="text-sm text-zinc-500">All Rights Reserved</p>
          <p className="text-sm text-zinc-200 mt-2">
            Made with <span className="text-red-500">❤</span> by{" "}
            <a
              className="text-blue-400"
              href="https://instagram.com/ayushroyl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Srisha Technologies
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-md font-semibold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-purple-300">
            Connect with Us
          </h4>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-pink-400 hover:text-pink-800 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-zinc-200 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-md font-semibold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-purple-300">
            About Fresher
          </h4>
          <p className="text-sm text-zinc-200 mb-2">
            Fresher is dedicated to creating unforgettable experiences for
            students through engaging events and activities.
          </p>
          <p className="text-sm text-zinc-200 mb-2">
            Join us as we celebrate creativity, talent, and collaboration within
            our community.
          </p>
          <p className="text-sm  text-zinc-200 mb-2">
            For business inquiries or collaborations, reach out to us at:
            srisha.technologies.contact@gmail.com
          </p>
          <p className="text-sm text-zinc-200">
            Connect with us on social media for updates on our events!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
