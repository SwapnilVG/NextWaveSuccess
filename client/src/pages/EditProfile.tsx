
import React from "react";
import Layout from "../components/layout/Layout";
import EditProfileForm from "../components/profile/EditProfileForm";

const EditProfile = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-mlm-navy mb-2">Edit Profile</h1>
        <p className="text-sm text-gray-500">
          Update your personal details, bank information, and account credentials.
        </p>
      </div>
      
      <EditProfileForm />
    </Layout>
  );
};

export default EditProfile;
