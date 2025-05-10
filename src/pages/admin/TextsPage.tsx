
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SiteText, useTextsStore } from '@/data/siteTexts';
import { toast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const TextsPage = () => {
  const { texts, updateText, resetToDefaults } = useTextsStore();
  
  // Organize sections by grouping
  const groupedSections: Record<string, string[]> = {};
  texts.forEach(text => {
    const [group] = text.section.split(' - ');
    if (!groupedSections[group]) {
      groupedSections[group] = [];
    }
    if (!groupedSections[group].includes(text.section)) {
      groupedSections[group].push(text.section);
    }
  });
  
  const groups = Object.keys(groupedSections);
  const [selectedGroup, setSelectedGroup] = useState<string>(groups[0] || '');
  const [selectedSection, setSelectedSection] = useState<string>(
    groupedSections[selectedGroup]?.[0] || ''
  );
  
  const [editedValues, setEditedValues] = useState<Record<string, Partial<SiteText>>>({});
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  
  const sectionTexts = texts.filter(text => text.section === selectedSection);
  
  const handleInputChange = (id: string, field: keyof Omit<SiteText, 'id' | 'section'>, value: string) => {
    setEditedValues(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        [field]: value
      }
    }));
    setUnsavedChanges(true);
  };
  
  const handleSave = (id: string) => {
    if (editedValues[id]) {
      updateText(id, editedValues[id]);
      toast({
        title: "Texto atualizado",
        description: "As alterações foram salvas com sucesso.",
      });
      
      // Reset edited values for this id
      setEditedValues(prev => {
        const newValues = { ...prev };
        delete newValues[id];
        return newValues;
      });
      
      // Check if there are still unsaved changes
      setUnsavedChanges(Object.keys(editedValues).length > 0);
    }
  };
  
  const handleSaveAll = () => {
    Object.entries(editedValues).forEach(([id, updates]) => {
      updateText(id, updates);
    });
    
    toast({
      title: "Todos os textos atualizados",
      description: "Todas as alterações foram salvas com sucesso.",
    });
    
    setEditedValues({});
    setUnsavedChanges(false);
  };
  
  const handleResetAll = () => {
    if (confirm("Tem certeza que deseja restaurar todos os textos para os valores padrão? Esta ação não pode ser desfeita.")) {
      resetToDefaults();
      setEditedValues({});
      setUnsavedChanges(false);
      toast({
        title: "Textos restaurados",
        description: "Todos os textos foram restaurados para os valores padrão.",
      });
    }
  };

  const handleGroupChange = (group: string) => {
    setSelectedGroup(group);
    setSelectedSection(groupedSections[group][0]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Gerenciar Textos</h2>
        <div className="flex gap-2">
          {unsavedChanges && (
            <Button onClick={handleSaveAll} variant="default">
              Salvar Todos
            </Button>
          )}
          <Button onClick={handleResetAll} variant="outline">
            Restaurar Padrão
          </Button>
        </div>
      </div>
      
      <p className="text-muted-foreground">
        Edite os textos exibidos no site. Selecione uma seção abaixo para começar.
      </p>

      <Tabs defaultValue={selectedGroup} onValueChange={handleGroupChange} className="space-y-4">
        <ScrollArea className="max-w-full pb-4">
          <TabsList className="w-full justify-start overflow-auto">
            {groups.map(group => (
              <TabsTrigger key={group} value={group} className="min-w-fit">
                {group}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>
        
        {groups.map(group => (
          <TabsContent key={group} value={group} className="space-y-4">
            <div className="mb-6">
              <Label>Selecione a seção específica:</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {groupedSections[group].map(section => (
                  <Button 
                    key={section} 
                    variant={section === selectedSection ? "default" : "outline"}
                    onClick={() => setSelectedSection(section)}
                    className="text-sm"
                  >
                    {section.replace(`${group} - `, '')}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {texts
                .filter(text => text.section === selectedSection)
                .map(text => {
                  const hasEdits = !!editedValues[text.id];
                  
                  return (
                    <Card key={text.id}>
                      <CardHeader>
                        <CardTitle>
                          {text.section} - ID: {text.id}
                        </CardTitle>
                        <CardDescription>
                          Edite os campos abaixo para alterar este conteúdo
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {text.title !== undefined && (
                          <div className="space-y-2">
                            <Label htmlFor={`${text.id}-title`}>Título</Label>
                            <Input 
                              id={`${text.id}-title`} 
                              value={(editedValues[text.id]?.title !== undefined ? editedValues[text.id]?.title : text.title) || ''}
                              onChange={(e) => handleInputChange(text.id, 'title', e.target.value)}
                            />
                          </div>
                        )}
                        
                        {text.description !== undefined && (
                          <div className="space-y-2">
                            <Label htmlFor={`${text.id}-description`}>Descrição</Label>
                            <Textarea 
                              id={`${text.id}-description`} 
                              rows={3}
                              value={(editedValues[text.id]?.description !== undefined ? editedValues[text.id]?.description : text.description) || ''}
                              onChange={(e) => handleInputChange(text.id, 'description', e.target.value)}
                            />
                          </div>
                        )}
                        
                        {text.content !== undefined && (
                          <div className="space-y-2">
                            <Label htmlFor={`${text.id}-content`}>Conteúdo</Label>
                            <Textarea 
                              id={`${text.id}-content`} 
                              rows={5}
                              value={(editedValues[text.id]?.content !== undefined ? editedValues[text.id]?.content : text.content) || ''}
                              onChange={(e) => handleInputChange(text.id, 'content', e.target.value)}
                            />
                          </div>
                        )}
                        
                        {text.buttonText !== undefined && (
                          <div className="space-y-2">
                            <Label htmlFor={`${text.id}-buttonText`}>Texto do Botão</Label>
                            <Input 
                              id={`${text.id}-buttonText`} 
                              value={(editedValues[text.id]?.buttonText !== undefined ? editedValues[text.id]?.buttonText : text.buttonText) || ''}
                              onChange={(e) => handleInputChange(text.id, 'buttonText', e.target.value)}
                            />
                          </div>
                        )}
                        
                        {hasEdits && (
                          <Button 
                            onClick={() => handleSave(text.id)}
                            className="mt-2"
                          >
                            Salvar Alterações
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TextsPage;
