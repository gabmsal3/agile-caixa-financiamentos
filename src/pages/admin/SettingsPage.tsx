
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { ADMIN_USER, ADMIN_PASSWORD } from '@/data/auth';

const SettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Esta é apenas uma simulação, já que estamos usando valores fixos
    // Em uma implementação real, isso seria conectado a uma API
    if (currentPassword !== ADMIN_PASSWORD) {
      toast({
        title: "Erro",
        description: "A senha atual está incorreta.",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Erro",
        description: "A nova senha e a confirmação não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Operação simulada",
      description: "Em um ambiente real, sua senha seria alterada. Por motivos de demonstração, a senha continua sendo 'agile2025'.",
    });
    
    // Limpar formulário
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
      <p className="text-muted-foreground">
        Gerencie as configurações da sua conta e do painel administrativo.
      </p>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Conta</CardTitle>
            <CardDescription>
              Visualize e altere as configurações da sua conta de administrador.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Nome de Usuário</Label>
                  <div className="p-2 bg-gray-100 rounded-md mt-1">{ADMIN_USER}</div>
                </div>
                <div>
                  <Label>Nível de Acesso</Label>
                  <div className="p-2 bg-gray-100 rounded-md mt-1">Administrador</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alterar Senha</CardTitle>
            <CardDescription>
              Atualize sua senha de acesso ao painel administrativo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit">
                Atualizar Senha
              </Button>
              
              <p className="text-sm text-muted-foreground mt-2">
                Nota: Esta é uma demonstração. Em um ambiente de produção, a senha seria efetivamente alterada.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
