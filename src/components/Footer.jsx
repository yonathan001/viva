import { FiLinkedin, FiTwitter } from 'react-icons/fi';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto text-center w-4/5">
        <p> copyright &copy; {new Date().getFullYear()}  all rights reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
         
        </div>
      </div>
    </footer>
  );
};

export default Footer; 