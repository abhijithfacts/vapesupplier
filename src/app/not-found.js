'use client';
import Link from 'next/link';
import './NotFound.css'; // Import the CSS file

export default function NotFound() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">404</h1>
        <h2 className="subtitle">Page Not Found</h2>
        <p className="description">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/" className="link">Return to Homepage</Link>
      </div>
    </div>
  );
}
