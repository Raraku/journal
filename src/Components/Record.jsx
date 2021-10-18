import React, { useState, useEffect } from "react";

export default function Record() {
  const item = {
    type: "textarea",
    id: "some-id",
    content: "some-content"
  };
  return (
    <div>
      <p>I am a Record </p>
    </div>
  );
}
