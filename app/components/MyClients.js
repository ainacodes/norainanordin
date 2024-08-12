import Image from 'next/image';
import naturopress from '../../public/clients/naturopress_logo.png';
import nutritionmarket from '../../public/clients/nutrition_market_logo.png';

export default function MyClients() {
  return (
    <section>
      <div className="container mx-auto flex gap-8 justify-center py-8">
        <Image
          src={naturopress}
          alt="Landscape picture"
          width={150}
          height={200}
        />
        <Image
          src={nutritionmarket}
          alt="Landscape picture"
          width={150}
          height={200}
        />
      </div>
    </section>
  );
}
