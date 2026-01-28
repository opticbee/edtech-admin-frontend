"use client";

import { useEffect, useState } from "react";

export default function ClassesPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    const res = await fetch("http://localhost:5000/api/classes");
    const data = await res.json();
    setClasses(data);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const createClass = async () => {
    await fetch("http://localhost:5000/api/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, imageUrl }),
    });

    setName("");
    setDescription("");
    setImageUrl("");
    fetchClasses();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>

      {/* Create class */}
      <div className="mb-6">
        <input
          className="border p-2 mr-2"
          placeholder="Class name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 mr-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="border p-2 mr-2"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button
          onClick={createClass}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Create
        </button>
      </div>

      {/* List classes */}
      <ul>
        {classes.map((cls) => (
          <li key={cls.id} className="border p-3 mb-2">
            <h2 className="font-semibold">{cls.name}</h2>
            <p>{cls.description}</p>
            {cls.imageUrl && (
              <img src={cls.imageUrl} alt="" className="w-32 mt-2" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
