"use client";
import { useState } from "react";

export default function SeguroFormulario() {
  const [garantia, setGarantia] = useState("rentals");
  const [monto, setMonto] = useState("");
  const [duracion, setDuracion] = useState("");
  const [expensas, setExpensas] = useState(false);

  return (
    <div className="w-full max-w-md p-4 bg-gray-200/80  rounded-md shadow-md text-white">
      <p className="text-[4.5vh] font-normal text-center text-[#e46308] text-secondary mb-6">
        Obtené tu seguro de caución en pocos clicks
      </p>

      <form className="space-y-5">
        {/* Tipo de garantía */}
        <div>
          <label className="block mb-1 text-sm font-medium">Tipo de garantía</label>
          <select
            className="w-full bg-white text-black rounded px-4 py-2"
            value={garantia}
            onChange={(e) => setGarantia(e.target.value)}
          >
            <option value="rentals">Garantías de Alquiler</option>
            <option value="iye">Garantía Solvencia Importadores/Exportadores</option>
            <option value="dyg">Garantía Directores y Gerentes - IGJ</option>
          </select>
        </div>

        {/* Monto alquiler */}
        <div>
          <label className="block mb-1 text-sm font-medium">Monto alquiler</label>
          <input
            type="tel"
            placeholder="Monto alquiler"
            className="w-full bg-white text-black rounded px-4 py-2"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>

        {/* Duración del contrato */}
        <div>
          <label className="block mb-1 text-sm font-medium">Duración del contrato (en meses)</label>
          <input
            type="number"
            placeholder="Duración del contrato"
            className="w-full bg-white text-black rounded px-4 py-2"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
        </div>

        {/* Switch incluir expensas */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="expensas"
            checked={expensas}
            onChange={() => setExpensas(!expensas)}
            className="form-checkbox text-blue-500"
          />
          <label htmlFor="expensas" className="text-sm">
            ¿Desea incluir expensas?
          </label>
        </div>

        {/* Botón Calcular */}
        <button
          type="button"
          disabled
          className="w-full bg-[#e46308] text-white font-semibold py-2 rounded opacity-50 cursor-not-allowed"
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
