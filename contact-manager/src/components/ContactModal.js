import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ContactModal({
  type,
  contact,
  onClose,
  onAdd,
  onUpdate,
}) {
  const [form, setForm] = useState(
    contact || { name: "", email: "", mobile: "", address: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "add") onAdd(form);
    if (type === "edit") onUpdate(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-400">
            {type === "add" && "Add Contact"}
            {type === "edit" && "Edit Contact"}
            {type === "view" && "Contact Details"}
          </h2>
          <button onClick={onClose} className="text-gray-600 font-bold">
            <span className="text-2xl text-red-500 hover:text-green-500"><IoClose /></span>
          </button>
        </div>

        {type === "view" ? (
          <div className="space-y-2 text-gray-700 px-6 sm:px-12 md:px-20 whitespace-normal">
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.mobile}
            </p>
            <p>
              <strong>Address:</strong> {contact.address}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                {type === "add" ? "Submit" : "Update"}
              </button>
              <button
                type="button"
                onClick={() =>
                  setForm(
                    contact || { name: "", email: "", mobile: "", address: "" }
                  )
                }
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
