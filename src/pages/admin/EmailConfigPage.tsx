import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { useTextsStore, EmailConfig } from '@/data/siteTexts';
import { toast } from '@/hooks/use-toast';
import { Mail, Server, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const EmailConfigPage = () => {
  const { emailConfig, updateEmailConfig, resetToDefaults } = useTextsStore();
  
  const [editedValues, setEditedValues] = useState<Partial<EmailConfig>>({});
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  
  const handleInputChange = (path: string, value: string | number | boolean) => {
    setEditedValues(prev => {
      const newState = { ...prev };
      
      // Handle nested properties
      if (path.includes('.')) {
        const [parent, child] = path.split('.');
        
        if (parent === 'smtp') {
          newState.smtp = {
            ...(prev.smtp || emailConfig.smtp),
            [child]: value
          };
        }
      } else {
        newState[path as keyof EmailConfig] = value as any;
      }
      
      return newState;
    });
    
    setUnsavedChanges(true);
  };
  
  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // Atualiza o store local
      updateEmailConfig(editedValues);
      
      // Sincroniza com o backend (apenas em produção)
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        const finalConfig = { ...emailConfig, ...editedValues };
        
        const response = await fetch('save-email-config.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(finalConfig),
        });
        
        if (!response.ok) {
          throw new Error('Erro ao salvar no servidor');
        }
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || 'Erro desconhecido');
        }
      }
      
      toast({
        title: "Configurações de email atualizadas",
        description: "As alterações foram salvas com sucesso.",
      });
      
      setEditedValues({});
      setUnsavedChanges(false);
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar as configurações. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleReset = () => {
    if (confirm("Tem certeza que deseja restaurar as configurações de email para os valores padrão? Esta ação não pode ser desfeita.")) {
      resetToDefaults();
      setEditedValues({});
      setUnsavedChanges(false);
      toast({
        title: "Configurações restauradas",
        description: "As configurações de email foram restauradas para os valores padrão.",
      });
    }
  };
  
  const getValue = (path: string, defaultValue: any): any => {
    if (path.includes('.')) {
      const [parent, child] = path.split('.');
      if (editedValues[parent as keyof EmailConfig] && (editedValues[parent as keyof EmailConfig] as any)[child] !== undefined) {
        return (editedValues[parent as keyof EmailConfig] as any)[child];
      }
      return (emailConfig[parent as keyof EmailConfig] as any)[child];
    } else {
      return editedValues[path as keyof EmailConfig] !== undefined 
        ? editedValues[path as keyof EmailConfig]
        : emailConfig[path as keyof EmailConfig];
    }
  };

  const currentSendMethod = getValue('sendMethod', emailConfig.sendMethod);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Configurações de Email</h2>
        <div className="flex gap-2">
          {unsavedChanges && (
            <Button onClick={handleSave} variant="default" disabled={isSaving}>
              {isSaving ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          )}
          <Button onClick={handleReset} variant="outline">
            Restaurar Padrão
          </Button>
        </div>
      </div>
      
      {currentSendMethod === 'phpmailer' && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Para usar PHPMailer, certifique-se de que a biblioteca está instalada no servidor via Composer: <code>composer require phpmailer/phpmailer</code>
          </AlertDescription>
        </Alert>
      )}
      
      <Card>
        <CardHeader>
          <CardTitle>Configurações Gerais</CardTitle>
          <CardDescription>
            Configure o destinatário e método de envio dos emails do formulário de contato
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="recipientEmail">Email de Destino</Label>
            <Input 
              id="recipientEmail"
              type="email"
              value={getValue('recipientEmail', emailConfig.recipientEmail)}
              onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
              placeholder="contato@empresa.com"
            />
          </div>
          
          <div className="space-y-4">
            <Label>Método de Envio</Label>
            <RadioGroup 
              value={currentSendMethod} 
              onValueChange={(value) => handleInputChange('sendMethod', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mail" id="mail" />
                <Label htmlFor="mail" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  PHP mail() - Função nativa do PHP
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phpmailer" id="phpmailer" />
                <Label htmlFor="phpmailer" className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  PHPMailer - SMTP Autenticado
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
      
      {currentSendMethod === 'phpmailer' && (
        <Card>
          <CardHeader>
            <CardTitle>Configurações SMTP</CardTitle>
            <CardDescription>
              Configure os dados de autenticação para envio via SMTP
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">Servidor SMTP</Label>
                <Input 
                  id="smtp-host"
                  value={getValue('smtp.host', emailConfig.smtp.host)}
                  onChange={(e) => handleInputChange('smtp.host', e.target.value)}
                  placeholder="smtp.gmail.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="smtp-port">Porta</Label>
                <Input 
                  id="smtp-port"
                  type="number"
                  value={getValue('smtp.port', emailConfig.smtp.port)}
                  onChange={(e) => handleInputChange('smtp.port', parseInt(e.target.value) || 587)}
                  placeholder="587"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="smtp-username">Usuário</Label>
              <Input 
                id="smtp-username"
                value={getValue('smtp.username', emailConfig.smtp.username)}
                onChange={(e) => handleInputChange('smtp.username', e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="smtp-password">Senha</Label>
              <Input 
                id="smtp-password"
                type="password"
                value={getValue('smtp.password', emailConfig.smtp.password)}
                onChange={(e) => handleInputChange('smtp.password', e.target.value)}
                placeholder="sua_senha_de_app"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="smtp-secure"
                checked={getValue('smtp.secure', emailConfig.smtp.secure)}
                onCheckedChange={(checked) => handleInputChange('smtp.secure', checked)}
              />
              <Label htmlFor="smtp-secure">Usar SSL/TLS</Label>
            </div>
          </CardContent>
        </Card>
      )}
      
      {unsavedChanges && (
        <div className="flex justify-end">
          <Button onClick={handleSave} variant="default" disabled={isSaving}>
            {isSaving ? 'Salvando...' : 'Salvar Todas as Alterações'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmailConfigPage;
