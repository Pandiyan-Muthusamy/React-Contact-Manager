import { useState } from "react";
import "./App.css";
import contactsData from "./data/contacts.json";
import ContactList from "./components/ContactList";
import ContactModal from "./components/ContactModal";
import SearchBar from "./components/SearchBar";
import { IoIosAddCircleOutline } from "react-icons/io";

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [modal, setModal] = useState({ open: false, type: "", contact: null });
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.mobile.toString().includes(search)
  );

  const handleAdd = (newContact) => {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    setModal({ open: false });
  };

  const handleUpdate = (updatedContact) => {
    setContacts(
      contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );
    setModal({ open: false });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="font-poppins min-h-screen flex justify-center items-start bg-white p-6">
      <div className="bg-black p-4 rounded-xl shadow-lg w-full max-w-md h-[90vh] mx-auto flex flex-col">
        <div className="sticky top-0 bg-black z-10 space-y-3">
          <button
            onClick={() => setModal({ open: true, type: "add" })}
            className="bg-sky-400 hover:bg-sky-600 font-bold text-white px-5 py-2 rounded-lg flex items-center justify-center gap-3 w-full"
          >
            All Contacts{" "}
            <span className="text-2xl">
              <IoIosAddCircleOutline />
            </span>
          </button>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide mt-3">
          <ContactList
            contacts={filteredContacts}
            onDelete={handleDelete}
            onEdit={(contact) =>
              setModal({ open: true, type: "edit", contact })
            }
            onView={(contact) =>
              setModal({ open: true, type: "view", contact })
            }
          />
        </div>
      </div>

      {modal.open && (
        <ContactModal
          type={modal.type}
          contact={modal.contact}
          onClose={() => setModal({ open: false })}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;
