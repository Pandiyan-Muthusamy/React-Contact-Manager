import { FaRegUserCircle, FaEye, FaTrash, FaEdit } from "react-icons/fa";

export default function ContactCard({
  contact,
  index,
  onDelete,
  onEdit,
  onView,
}) {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
      <div className="flex items-center gap-3">
        <span className="text-gray-500">{index}</span>
        <FaRegUserCircle className="text-2xl text-gray-600" />
        <div>
          <p className="font-semibold">{contact.name}</p>
          <p className="text-sm text-gray-500">{contact.mobile}</p>
        </div>
      </div>

      <div className="flex gap-3 text-gray-600">
        <FaEye
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onView(contact)}
        />
        <FaTrash
          className="cursor-pointer hover:text-red-500"
          onClick={() => onDelete(contact.id)}
        />
        <FaEdit
          className="cursor-pointer hover:text-green-500"
          onClick={() => onEdit(contact)}
        />
      </div>
    </div>
  );
}
