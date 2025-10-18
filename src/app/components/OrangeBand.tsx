import { FaMobileAlt, FaTrophy, FaBolt } from "react-icons/fa";

export default function OrangeBand() {
    return (
        <div className="w-full bg-[#e46308] text-white py-9">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
                <div className="flex items-center gap-3">
                    <FaMobileAlt className="text-7xl text-white" />
                    {/* Texto en columna a la derecha del ícono */}
                    <div className="flex flex-col">
                        <span className="text-[3.5vh] font-semibold">100% Digital</span>
                        <span className="text-[2.5vh]">Todo el proceso se realiza online sin la utilización de papel</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaTrophy className="text-7xl" />
                    {/* Texto en columna a la derecha del ícono */}
                    <div className="flex flex-col">
                        <span className="text-[3.5vh] font-semibold">Únicos</span>
                        <span className="text-[2.5vh]">Primer plataforma que garantiza el proceso digital de pólizas</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaBolt className="text-7xl" />
                    {/* Texto en columna a la derecha del ícono */}
                    <div className="flex flex-col">
                        <span className="text-[3.5vh] font-semibold">Rapidez</span>
                        <span className="text-[2.5vh]">Pensamos todo el proceso para que sea simple y rápido</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
