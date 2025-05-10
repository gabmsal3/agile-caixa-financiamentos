
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useTextsStore, ContactInfo } from '@/data/siteTexts';
import { toast } from '@/hooks/use-toast';

const ContactInfoPage = () => {
  const { contactInfo, updateContactInfo, resetToDefaults } = useTextsStore();
  
  const [editedValues, setEditedValues] = useState<Partial<ContactInfo>>({});
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  
  const handleInputChange = (path: string, value: string) => {
    setEditedValues(prev => {
      const newState = { ...prev };
      
      // Handle nested properties
      if (path.includes('.')) {
        const [parent, child] = path.split('.');
        newState[parent as keyof ContactInfo] = {
          ...((prev[parent as keyof ContactInfo] || contactInfo[parent as keyof ContactInfo]) as object),
          [child]: value
        };
      } else {
        newState[path as keyof ContactInfo] = value as any;
      }
      
      return newState;
    });
    
    setUnsavedChanges(true);
  };
  
  const handleSave = () => {
    updateContactInfo(editedValues);
    
    toast({
      title: "Informações de contato atualizadas",
      description: "As alterações foram salvas com sucesso.",
    });
    
    setEditedValues({});
    setUnsavedChanges(false);
  };
  
  const handleReset = () => {
    if (confirm("Tem certeza que deseja restaurar as informações de contato para os valores padrão? Esta ação não pode ser desfeita.")) {
      resetToDefaults();
      setEditedValues({});
      setUnsavedChanges(false);
      toast({
        title: "Informações restauradas",
        description: "As informações de contato foram restauradas para os valores padrão.",
      });
    }
  };
  
  // Helper to get the current value (edited or original)
  const getValue = (path: string, defaultValue: string): string => {
    if (path.includes('.')) {
      const [parent, child] = path.split('.');
      if (editedValues[parent as keyof ContactInfo] && (editedValues[parent as keyof ContactInfo] as any)[child] !== undefined) {
        return (editedValues[parent as keyof ContactInfo] as any)[child];
      }
      return (contactInfo[parent as keyof ContactInfo] as any)[child];
    } else {
      return (editedValues[path as keyof ContactInfo] as string) !== undefined 
        ? (editedValues[path as keyof ContactInfo] as string) 
        : (contactInfo[path as keyof ContactInfo] as string);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Informações de Contato</h2>
        <div className="flex gap-2">
          {unsavedChanges && (
            <Button onClick={handleSave} variant="default">
              Salvar Alterações
            </Button>
          )}
          <Button onClick={handleReset} variant="outline">
            Restaurar Padrão
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Contato Principal</CardTitle>
          <CardDescription>
            Edite as informações de contato exibidas no site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email"
                value={getValue('email', contactInfo.email)}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input 
                id="phone"
                value={getValue('phone', contactInfo.phone)}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address-line1">Endereço - Linha 1</Label>
            <Input 
              id="address-line1"
              value={getValue('address.line1', contactInfo.address.line1)}
              onChange={(e) => handleInputChange('address.line1', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address-line2">Endereço - Linha 2</Label>
            <Input 
              id="address-line2"
              value={getValue('address.line2', contactInfo.address.line2)}
              onChange={(e) => handleInputChange('address.line2', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Horários de Atendimento</CardTitle>
          <CardDescription>
            Configure os horários de atendimento exibidos no site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="weekdays">Segunda a Sexta</Label>
              <Input 
                id="weekdays"
                value={getValue('schedule.weekdays', contactInfo.schedule.weekdays)}
                onChange={(e) => handleInputChange('schedule.weekdays', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="saturday">Sábado</Label>
              <Input 
                id="saturday"
                value={getValue('schedule.saturday', contactInfo.schedule.saturday)}
                onChange={(e) => handleInputChange('schedule.saturday', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sunday">Domingo</Label>
              <Input 
                id="sunday"
                value={getValue('schedule.sunday', contactInfo.schedule.sunday)}
                onChange={(e) => handleInputChange('schedule.sunday', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {unsavedChanges && (
        <div className="flex justify-end">
          <Button onClick={handleSave} variant="default">
            Salvar Todas as Alterações
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContactInfoPage;
