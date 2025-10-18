import {  FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function InfoFooter2() {
  return (

    <div className="flex flex-col items-center text-center md:items-start md:text-left text-sm text-white ml-0 md:ml-5">
      <h3 className="text-lg font-normal mb-4">Asistencia a Usuarios y Asegurados</h3>

      <ul className="flex flex-col items-start space-y-2">
        <li className="flex items-center gap-2">
         <FaWhatsapp className="text-green-500" />
          <a
            href="https://api.whatsapp.com/send?phone=+5491136062707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-600 hover:underline"
          >
            1136062707
          </a>
        </li>

        <li className="flex items-center gap-2">
      <FaEnvelope className="text-gray-500" />
          <a
            href="mailto:info@caucionar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-600 hover:underline"
          >
            info@caucionar.com
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaInstagram className="text-pink-500" />
          <a
            href="https://instagram.com/caucionar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-600 hover:underline"
          >
            instagram.com/caucionar
          </a>
        </li>
      </ul>
    </div>
  );
}
