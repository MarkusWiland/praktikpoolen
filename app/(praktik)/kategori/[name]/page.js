import React from "react";

export default function page({ params }) {
  const { name } = params;
  return <div><h1 className="text-2xl pt-20">{name}</h1></div>;
}
