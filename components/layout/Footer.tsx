"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container">
        

        {/* Right side: text + copyright */}
        <div className="footer-left">
          <h1 className="footer-sub">AUDIOPHILE</h1>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility — we’re open 7 days a week.
          </p>
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
        </div>




        {/* Left side: nav links */}
        <div className="footer-right">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Headphones</Link></li>
            <li><Link href="/products">Speakers</Link></li>
            <li><Link href="/products">Earphones</Link></li>
          </ul>
        </div>



       {/* Social Icons */}
          <div className="icn-wrap">
            <Link href="#" aria-label="Facebook">
              <Facebook className="footer-icn" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="footer-icn" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="footer-icn" />
            </Link>
          </div>

      </div>
    </footer>
  );
}
