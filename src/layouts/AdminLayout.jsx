"use client";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div>Admin Header</div>
      {children}
      <div>Admin footer</div>
    </div>
  );
};

export default AdminLayout;
