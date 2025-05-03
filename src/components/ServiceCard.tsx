
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const ServiceCard = ({ title, description, icon: Icon, benefits }: ServiceCardProps) => {
  return (
    <Card className="border-2 border-caixa-gray hover:border-caixa-blue transition-colors duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="w-16 h-16 rounded-full bg-caixa-blue flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-caixa-blue">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc list-inside space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700">{benefit}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a
          href="https://wa.me/5517996779156?text=Olá, gostaria de mais informações sobre o serviço de Financiamento Habitacional"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-caixa-orange hover:bg-caixa-blue text-white">
            Falar pelo WhatsApp
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
