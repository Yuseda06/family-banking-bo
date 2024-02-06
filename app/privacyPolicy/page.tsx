import Head from "next/head";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="">
      <Head>
        <title>Family Banking BO - Privacy Policy</title>
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <h2 className="text-xl font-bold mb-4">1. Information We Collect:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Username: We collect and store the username you choose during the
            registration process to personalize your experience within the app.
          </li>
          <li>
            Email: Your email address is collected for account verification,
            communication purposes, and account recovery.
          </li>
          <li>
            Password: To secure your account, we collect and encrypt the
            password you set during the registration process.
          </li>
          <li>
            Staff ID: If applicable, staff members may be required to provide a
            unique staff ID for identification purposes.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">
          2. How We Use Your Information:
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            User Authentication: Your username, email, and password are used for
            secure account authentication and access to app features.
          </li>
          <li>
            Communication: We may use your email address to send important
            notifications related to your account and app updates.
          </li>
          <li>
            Staff ID Verification: If applicable, staff IDs are collected for
            verification purposes and access control.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">3. Data Security:</h2>
        <p>
          We prioritize the security of your information and have implemented
          measures to prevent unauthorized access, disclosure, or alteration of
          your data.
        </p>

        <h2 className="text-xl font-bold mb-4 pt-4">4. Data Retention:</h2>
        <p>
          Your information will be retained for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy or as required by law.
          You can request the deletion of your account and associated data by
          visiting{" "}
          <a
            href="http://c3app.net"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://c3app.net
          </a>
          .
        </p>

        <h2 className="text-xl font-bold mb-4 pt-4">
          5. Third-Party Services:
        </h2>
        <p>We do not share your information with third-party services.</p>

        <h2 className="text-xl font-bold mb-4 pt-4">
          6. Changes to the Privacy Policy:
        </h2>
        <p>
          We reserve the right to update our Privacy Policy. Any changes will be
          reflected on this page, and you will be notified through the app.
        </p>

        <h2 className="text-xl font-bold mb-4 pt-4">7. Contact Us:</h2>
        <p>
          For any questions or concerns regarding your privacy, please contact
          us at{" "}
          <a href="mailto:yusryku@gmail.com" className="text-blue-500">
            yusryku@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
