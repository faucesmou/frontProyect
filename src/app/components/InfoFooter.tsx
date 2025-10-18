import Image from 'next/image';
import Link from 'next/link';

export default function InfoFooter() {

    return (
     
           <div className="flex flex-col items-center text-center md:items-start md:text-left text-sm text-white ml-0 md:ml-5">
            <div className="space-y-2">
                <Image
                    src="/imgs/logo_caucionar.png"
                    alt="Cauciones en Argentina - Caucionar"
                    width={150}
                    height={50}
                    className="object-contain pb-3"
                />
            </div>

            {/* Texto y enlaces */}
            <ul >
                <li className="text-white-600">
                    Todas tus garantías en un solo lugar
                </li>
                <li>
                    <Link href="/conditions" className="text-white-600 hover:underline ">
                        Condiciones de contratación
                    </Link>
                </li>
                <li>
                    <Link href="/terms" className="text-white-600 hover:underline">
                        Términos del Servicio
                    </Link>
                </li>
                <li>
                    <Link href="/privacity" className="text-white-600 hover:underline">
                        Política de Privacidad
                    </Link>
                </li>
            </ul>
        </div>
    );
    
}
