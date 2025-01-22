import React from "react";

export default function task7() {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back</h1>
      ) : (
        <h1>U are not welcome to this page</h1>
      )}
    </div>
  );
}
