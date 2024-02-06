import React from "react";

export default function AccountDeletion() {
  const supportEmail = "yusryku@gmail.com"; // Replace with your support email address

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Account Deletion</h1>

      <p className="mb-4">
        To request the deletion of your account and associated data, follow
        these steps:
      </p>

      <ol className="list-decimal ml-6 mb-4">
        <li>
          Please email to:{" "}
          <a href="mailto:yusryku@gmail.com" className="text-blue-500">
            yusryku@gmail.com{" "}
          </a>
        </li>
        <li>
          Enter your account credentials: Provide the necessary information to
          identify your account.
        </li>
        <li>
          Confirm deletion: Confirm that you want to delete your account and
          associated data.
        </li>
      </ol>

      <h2 className="text-xl font-bold mb-4">Types of Data Deleted:</h2>
      <p>
        Types of data that will be deleted, e.g., username, email, password,
        staff ID
      </p>

      <p className="mb-4">
        If you encounter any issues or need assistance, feel free to reach out
        to our support team at{" "}
        <a
          href={`mailto:${supportEmail}?subject=Account%20Deletion%20Support`}
          className="text-blue-500"
        >
          yusryku@gmail.com
        </a>
        .
      </p>

      <p className="text-red-600">
        Please note that account deletion is irreversible, and once completed,
        your data will be permanently removed from our systems.
      </p>
    </div>
  );
}
