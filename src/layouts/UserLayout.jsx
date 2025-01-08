"use client";
import React from "react";
import Header from "@/components/header/Header";
const UserLayout = ({ children }) => {
  return (
    <div style={{minHeight: '100vh'}}>
      <Header />
      {children}
      <div>User footer</div>
    </div>
  );
};

export default UserLayout;
