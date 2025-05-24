// pages/contact.tsx
import React from "react";
import { Mail, Github, Twitter } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-6 text-center text-gray-700">
        お気軽に以下のリンクからご連絡ください。
      </p>

      <div className="space-y-4">
        {/* メール */}
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5" />
          <a
            href="mailto:your.email@example.com"
            className="text-blue-600 hover:underline"
          >
            example@example.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-3">
          <Github className="w-5 h-5" />
          <Link
            href="https://github.com/your-username"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            github.com/your-username
          </Link>
        </div>

        {/* X（旧Twitter） */}
        <div className="flex items-center space-x-3">
          <Twitter className="w-5 h-5" />
          <Link
            href="https://x.com/your-handle"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            x.com/your-handle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
