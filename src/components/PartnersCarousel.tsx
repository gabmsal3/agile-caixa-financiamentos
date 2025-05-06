
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const PartnersCarousel = () => {
  const partners = [
    {
      name: "Caixa",
      image: "/lovable-uploads/2c3f8bc0-77d5-4980-9513-f0e302b5ac90.png",
      alt: "Logo da Caixa Econômica Federal"
    },
    {
      name: "Casa Verde e Amarela",
      image: "/lovable-uploads/383f1351-d154-45c0-8bab-6007c38c2809.png",
      alt: "Logo do Programa Casa Verde e Amarela"
    },
    {
      name: "Minha Casa Minha Vida",
      image: "/lovable-uploads/8017defa-becb-4da7-a43d-69f54d44cc50.png",
      alt: "Logo do Programa Minha Casa Minha Vida"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-caixa-blue mb-2">Nossos Parceiros</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Trabalhamos com os principais programas de financiamento habitacional do país.
        </p>

        <Carousel 
          className="w-full max-w-3xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center justify-center p-8 h-40">
                      <img 
                        src={partner.image} 
                        alt={partner.alt} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0" />
          <CarouselNext className="absolute right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
