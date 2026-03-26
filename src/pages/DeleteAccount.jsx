import React from "react";
import "../../styles/privacy.css";

const DeleteAccount = () => {
  return (
    <section className="privacy">

      <div className="privacy-container">

        <h1>Delete Account Request</h1>

        <p className="updated">Last Updated: March 2026</p>

        <p>
          If you would like to delete your account and associated data from
          <strong> Help App</strong>, please send a request to:
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@yugamai.com">support@yugamai.com</a>
        </p>

        <h2>What to Include</h2>

        <ul>
          <li>Your registered email or phone number</li>
          <li>Reason for deletion (optional)</li>
        </ul>

        <p>
          We will process your request within <strong>3–5 working days</strong>.
        </p>

        <h2>Data That Will Be Deleted</h2>

        <ul>
          <li>Profile information (name, email, phone)</li>
          <li>Location data</li>
          <li>Guardian connections</li>
        </ul>

        <h2>Data That May Be Retained</h2>

        <ul>
          <li>
            Minimal logs for legal and security purposes (if required)
          </li>
        </ul>

        <h2>Important Note</h2>

        <p>
          Once your account is deleted, this action cannot be undone and all
          associated data will be permanently removed, except where retention is
          required by law.
        </p>

      </div>

    </section>
  );
};

export default DeleteAccount;