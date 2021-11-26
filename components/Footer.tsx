import React from "react";

const Footer: React.FC = () => (
  <>
    <footer className="w-full mt-10 mb-3 xl:mt-0 xl:absolute xl:bottom-0 flex justify-center">
      <div>
        <div className="">
          <p className="text-sm font-medium text-indigo-600">
            © {new Date().getFullYear()} Made by
            <a
              href="https://github.com/naushad2007"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              <span className="font-semibold">naushad2007</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
