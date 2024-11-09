"use client";

import React, { useEffect } from "react";

const page = () => {
  async function getAllUsers() {
    try {
      const response = await fetch("/api/users");
      const users = await response.json();
      console.log(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return <div>This is problem</div>;
};

export default page;
