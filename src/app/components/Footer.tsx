import Image from 'next/image'

import Text_Image from './Text_Image'
import InfoFooter from './InfoFooter'
import InfoFooter2 from './InfoFooter2'

export default function Footer() {
  return (
    <footer >
{/* Primera sección fondo gris oscuro */}
      <div className="bg-[#333131] text-sm text-white-500 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto ">
          <div>
          <InfoFooter/>
          </div>
          <div>
          </div>
          <div>
             <InfoFooter2/>
          </div>

        </div>
      </div>
{/* Segunda sección fondo gris claro */}

      <div className="bg-[#4e4e4e] w-full px-4 py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Image
            src="/imgs/rol_caucionar.png"
            alt="Logo 4"
            width={190}
            height={90}
            className="mx-auto"
          />

          <Text_Image
            text="Powered by"
            imageSrc="/imgs/amazon_caucionar.png"
            href="https://aws.amazon.com"
            imageAlt="Amazon Logo"

          />

          <Text_Image
            text="Desarrollado por"
            imageSrc="/imgs/diproach_caucionar.png"
            href="https://www.diproach.com/"
            imageAlt="Diproach Logo"
            imageWidth={180}
            imageHeight={70}
          />

        </div>
      </div>

    </footer>
  )
}
