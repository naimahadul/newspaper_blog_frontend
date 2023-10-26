import React, { createContext, useState, useContext } from "react";

// Create a context for managing blog data
const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogState, setBlogState] = useState({ title: "", description: "" });

  return (
    <BlogContext.Provider value={{ blogState, setBlogState }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
