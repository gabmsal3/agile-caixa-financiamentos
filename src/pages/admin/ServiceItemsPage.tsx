
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTextsStore, ServiceItemGroup } from '@/data/siteTexts';
import { toast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServiceItemsPage = () => {
  const { serviceItems, updateServiceItem, resetToDefaults } = useTextsStore();
  
  const [activeTab, setActiveTab] = useState(serviceItems[0]?.id || '');
  const [editedValues, setEditedValues] = useState<Record<string, Record<number, { title: string, items: string[] }>>>({});
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  
  const handleItemTitleChange = (groupId: string, itemIndex: number, value: string) => {
    setEditedValues(prev => {
      const newValues = { ...prev };
      if (!newValues[groupId]) {
        newValues[groupId] = {};
      }
      if (!newValues[groupId][itemIndex]) {
        const group = serviceItems.find(g => g.id === groupId);
        if (!group) return prev;
        
        const originalItem = group.items[itemIndex];
        if (!originalItem) return prev;
        
        newValues[groupId][itemIndex] = { title: originalItem.title, items: [...originalItem.items] };
      }
      
      newValues[groupId][itemIndex] = { ...newValues[groupId][itemIndex], title: value };
      return newValues;
    });
    
    setUnsavedChanges(true);
  };
  
  const handleItemContentChange = (groupId: string, itemIndex: number, content: string) => {
    const items = content.split('\n').filter(item => item.trim() !== '');
    
    setEditedValues(prev => {
      const newValues = { ...prev };
      if (!newValues[groupId]) {
        newValues[groupId] = {};
      }
      if (!newValues[groupId][itemIndex]) {
        const group = serviceItems.find(g => g.id === groupId);
        if (!group) return prev;
        
        const originalItem = group.items[itemIndex];
        if (!originalItem) return prev;
        
        newValues[groupId][itemIndex] = { title: originalItem.title, items: [...originalItem.items] };
      }
      
      newValues[groupId][itemIndex] = { ...newValues[groupId][itemIndex], items };
      return newValues;
    });
    
    setUnsavedChanges(true);
  };
  
  const handleSaveItem = (groupId: string, itemIndex: number) => {
    if (editedValues[groupId]?.[itemIndex]) {
      const { title, items } = editedValues[groupId][itemIndex];
      updateServiceItem(groupId, itemIndex, title, items);
      
      // Clear the edited value for this item
      setEditedValues(prev => {
        const newValues = { ...prev };
        if (newValues[groupId]) {
          delete newValues[groupId][itemIndex];
          if (Object.keys(newValues[groupId]).length === 0) {
            delete newValues[groupId];
          }
        }
        return newValues;
      });
      
      // Check if there are still unsaved changes
      setUnsavedChanges(Object.keys(editedValues).length > 0);
      
      toast({
        title: "Item atualizado",
        description: "As alterações foram salvas com sucesso.",
      });
    }
  };
  
  const handleSaveAll = () => {
    Object.entries(editedValues).forEach(([groupId, items]) => {
      Object.entries(items).forEach(([itemIndex, { title, items }]) => {
        updateServiceItem(groupId, parseInt(itemIndex), title, items);
      });
    });
    
    setEditedValues({});
    setUnsavedChanges(false);
    
    toast({
      title: "Todos os itens atualizados",
      description: "Todas as alterações foram salvas com sucesso.",
    });
  };
  
  const handleReset = () => {
    if (confirm("Tem certeza que deseja restaurar todos os itens para os valores padrão? Esta ação não pode ser desfeita.")) {
      resetToDefaults();
      setEditedValues({});
      setUnsavedChanges(false);
      
      toast({
        title: "Itens restaurados",
        description: "Todos os itens de serviços foram restaurados para os valores padrão.",
      });
    }
  };
  
  // Helper to get the current value (edited or original)
  const getItemTitle = (groupId: string, itemIndex: number): string => {
    if (editedValues[groupId]?.[itemIndex]?.title !== undefined) {
      return editedValues[groupId][itemIndex].title;
    }
    
    const group = serviceItems.find(g => g.id === groupId);
    if (!group) return '';
    
    return group.items[itemIndex]?.title || '';
  };
  
  const getItemContent = (groupId: string, itemIndex: number): string => {
    if (editedValues[groupId]?.[itemIndex]?.items !== undefined) {
      return editedValues[groupId][itemIndex].items.join('\n');
    }
    
    const group = serviceItems.find(g => g.id === groupId);
    if (!group) return '';
    
    return group.items[itemIndex]?.items.join('\n') || '';
  };
  
  const hasEditedItem = (groupId: string, itemIndex: number): boolean => {
    return !!editedValues[groupId]?.[itemIndex];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Gerenciar Itens de Serviços</h2>
        <div className="flex gap-2">
          {unsavedChanges && (
            <Button onClick={handleSaveAll} variant="default">
              Salvar Todos
            </Button>
          )}
          <Button onClick={handleReset} variant="outline">
            Restaurar Padrão
          </Button>
        </div>
      </div>
      
      <p className="text-muted-foreground">
        Edite os itens de cada serviço exibidos na página de serviços.
      </p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full">
          {serviceItems.map(group => (
            <TabsTrigger key={group.id} value={group.id} className="flex-1">
              {group.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {serviceItems.map(group => (
          <TabsContent key={group.id} value={group.id} className="space-y-4">
            {group.items.map((item, itemIndex) => (
              <Card key={`${group.id}-${itemIndex}`}>
                <CardHeader>
                  <CardTitle>Item {itemIndex + 1}</CardTitle>
                  <CardDescription>
                    Edite o título e os itens deste serviço
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${group.id}-${itemIndex}-title`}>Título</Label>
                    <Input 
                      id={`${group.id}-${itemIndex}-title`}
                      value={getItemTitle(group.id, itemIndex)}
                      onChange={(e) => handleItemTitleChange(group.id, itemIndex, e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${group.id}-${itemIndex}-items`}>
                      Itens (um por linha)
                    </Label>
                    <Textarea 
                      id={`${group.id}-${itemIndex}-items`}
                      rows={6}
                      value={getItemContent(group.id, itemIndex)}
                      onChange={(e) => handleItemContentChange(group.id, itemIndex, e.target.value)}
                      className="font-mono"
                    />
                  </div>
                  
                  {hasEditedItem(group.id, itemIndex) && (
                    <Button 
                      onClick={() => handleSaveItem(group.id, itemIndex)}
                      className="mt-2"
                    >
                      Salvar Este Item
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
      
      {unsavedChanges && (
        <div className="flex justify-end">
          <Button onClick={handleSaveAll} variant="default">
            Salvar Todas as Alterações
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceItemsPage;
