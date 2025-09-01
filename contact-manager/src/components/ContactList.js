import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onDelete, onEdit, onView }) {
  return (
    <div className="mt-3 flex flex-col gap-3">
      {contacts.map((contact, index) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          index={index + 1}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  );
}
