
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTextsStore } from '@/data/siteTexts';

const DashboardPage = () => {
  const { texts } = useTextsStore();
  const uniqueSections = [...new Set(texts.map(text => text.section))];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Bem-vindo ao Painel Admin</h2>
      <p className="text-muted-foreground">
        Gerencie os textos e conteúdos do site Agile Financiamentos de forma simples e rápida.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Seções</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueSections.length}</div>
            <p className="text-xs text-muted-foreground">
              Seções de conteúdo editável
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Textos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{texts.length}</div>
            <p className="text-xs text-muted-foreground">
              Elementos de texto editáveis
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Última Atualização</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Date().toLocaleDateString()}</div>
            <p className="text-xs text-muted-foreground">
              Data da última modificação
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Seções de Conteúdo</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {uniqueSections.map((section) => (
            <Card key={section}>
              <CardHeader>
                <CardTitle>{section}</CardTitle>
                <CardDescription>
                  {texts.filter(text => text.section === section).length} itens
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
