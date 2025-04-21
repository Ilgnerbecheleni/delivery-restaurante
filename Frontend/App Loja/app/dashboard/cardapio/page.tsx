"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardapioTable } from "@/components/cardapio-table"
import { AddItemDialog } from "@/components/add-item-dialog"

// Dados simulados para o cardápio
const cardapioInicial = {
  arroz: [
    { id: "1", nome: "Arroz Branco", descricao: "Arroz branco tradicional", disponivel: true, imagem: "" },
    { id: "2", nome: "Arroz Integral", descricao: "Arroz integral nutritivo", disponivel: true, imagem: "" },
    {
      id: "3",
      nome: "Arroz com Brócolis",
      descricao: "Arroz branco com brócolis refogado",
      disponivel: true,
      imagem: "",
    },
  ],
  feijao: [
    { id: "4", nome: "Feijão Carioca", descricao: "Feijão carioca tradicional", disponivel: true, imagem: "" },
    { id: "5", nome: "Feijão Preto", descricao: "Feijão preto cremoso", disponivel: true, imagem: "" },
    {
      id: "6",
      nome: "Feijão Tropeiro",
      descricao: "Feijão tropeiro mineiro com bacon e linguiça",
      disponivel: true,
      imagem: "",
    },
  ],
  proteina: [
    {
      id: "7",
      nome: "Bife Acebolado",
      descricao: "Bife bovino com cebolas caramelizadas",
      disponivel: true,
      imagem: "",
    },
    {
      id: "8",
      nome: "Frango Grelhado",
      descricao: "Peito de frango grelhado com temperos",
      disponivel: true,
      imagem: "",
    },
    { id: "9", nome: "Carne Moída", descricao: "Carne moída refogada com legumes", disponivel: true, imagem: "" },
    { id: "10", nome: "Filé de Peixe", descricao: "Filé de tilápia grelhado", disponivel: false, imagem: "" },
    { id: "11", nome: "Omelete", descricao: "Omelete com queijo e presunto", disponivel: true, imagem: "" },
  ],
  acompanhamento: [
    { id: "12", nome: "Batata Frita", descricao: "Batata frita crocante", disponivel: true, imagem: "" },
    { id: "13", nome: "Purê de Batata", descricao: "Purê de batata cremoso", disponivel: true, imagem: "" },
    { id: "14", nome: "Farofa", descricao: "Farofa de mandioca com bacon", disponivel: true, imagem: "" },
    { id: "15", nome: "Macarrão", descricao: "Macarrão ao alho e óleo", disponivel: true, imagem: "" },
    { id: "16", nome: "Legumes Refogados", descricao: "Mix de legumes refogados", disponivel: true, imagem: "" },
    { id: "17", nome: "Banana Frita", descricao: "Banana frita com canela", disponivel: false, imagem: "" },
  ],
  salada: [
    { id: "18", nome: "Alface", descricao: "Alface americana fresca", disponivel: true, imagem: "" },
    { id: "19", nome: "Tomate", descricao: "Tomate em rodelas", disponivel: true, imagem: "" },
    { id: "20", nome: "Cenoura Ralada", descricao: "Cenoura ralada fresca", disponivel: true, imagem: "" },
    { id: "21", nome: "Beterraba", descricao: "Beterraba cozida em cubos", disponivel: true, imagem: "" },
    { id: "22", nome: "Repolho", descricao: "Repolho fatiado fino", disponivel: false, imagem: "" },
    { id: "23", nome: "Pepino", descricao: "Pepino em rodelas", disponivel: true, imagem: "" },
  ],
}

export default function CardapioPage() {
  const [cardapio, setCardapio] = useState(cardapioInicial)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [categoriaAtual, setCategoriaAtual] = useState("arroz")

  const handleToggleDisponibilidade = (categoria: string, id: string) => {
    setCardapio((prev) => {
      const novoCardapio = { ...prev }
      const index = novoCardapio[categoria as keyof typeof novoCardapio].findIndex((item) => item.id === id)

      if (index !== -1) {
        novoCardapio[categoria as keyof typeof novoCardapio][index] = {
          ...novoCardapio[categoria as keyof typeof novoCardapio][index],
          disponivel: !novoCardapio[categoria as keyof typeof novoCardapio][index].disponivel,
        }
      }

      return novoCardapio
    })
  }

  const handleDeleteItem = (categoria: string, id: string) => {
    setCardapio((prev) => {
      const novoCardapio = { ...prev }
      novoCardapio[categoria as keyof typeof novoCardapio] = novoCardapio[
        categoria as keyof typeof novoCardapio
      ].filter((item) => item.id !== id)
      return novoCardapio
    })
  }

  const handleAddItem = (categoria: string, item: { nome: string; descricao: string }) => {
    setCardapio((prev) => {
      const novoCardapio = { ...prev }
      novoCardapio[categoria as keyof typeof novoCardapio] = [
        ...novoCardapio[categoria as keyof typeof novoCardapio],
        {
          id: Date.now().toString(),
          nome: item.nome,
          descricao: item.descricao,
          disponivel: true,
          imagem: "",
        },
      ]
      return novoCardapio
    })
    setIsAddDialogOpen(false)
  }

  const openAddDialog = (categoria: string) => {
    setCategoriaAtual(categoria)
    setIsAddDialogOpen(true)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Gerenciar Cardápio" description="Adicione, edite ou remova itens do cardápio" />

      <Tabs defaultValue="arroz" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="arroz">Arroz</TabsTrigger>
            <TabsTrigger value="feijao">Feijão</TabsTrigger>
            <TabsTrigger value="proteina">Proteínas</TabsTrigger>
            <TabsTrigger value="acompanhamento">Acompanhamentos</TabsTrigger>
            <TabsTrigger value="salada">Saladas</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="arroz">
          <div className="flex justify-end mb-4">
            <Button onClick={() => openAddDialog("arroz")}>
              <Plus className="mr-2 h-4 w-4" /> Adicionar Arroz
            </Button>
          </div>
          <CardapioTable
            itens={cardapio.arroz}
            onToggleDisponibilidade={(id) => handleToggleDisponibilidade("arroz", id)}
            onDelete={(id) => handleDeleteItem("arroz", id)}
          />
        </TabsContent>

        <TabsContent value="feijao">
          <div className="flex justify-end mb-4">
            <Button onClick={() => openAddDialog("feijao")}>
              <Plus className="mr-2 h-4 w-4" /> Adicionar Feijão
            </Button>
          </div>
          <CardapioTable
            itens={cardapio.feijao}
            onToggleDisponibilidade={(id) => handleToggleDisponibilidade("feijao", id)}
            onDelete={(id) => handleDeleteItem("feijao", id)}
          />
        </TabsContent>

        <TabsContent value="proteina">
          <div className="flex justify-end mb-4">
            <Button onClick={() => openAddDialog("proteina")}>
              <Plus className="mr-2 h-4 w-4" /> Adicionar Proteína
            </Button>
          </div>
          <CardapioTable
            itens={cardapio.proteina}
            onToggleDisponibilidade={(id) => handleToggleDisponibilidade("proteina", id)}
            onDelete={(id) => handleDeleteItem("proteina", id)}
          />
        </TabsContent>

        <TabsContent value="acompanhamento">
          <div className="flex justify-end mb-4">
            <Button onClick={() => openAddDialog("acompanhamento")}>
              <Plus className="mr-2 h-4 w-4" /> Adicionar Acompanhamento
            </Button>
          </div>
          <CardapioTable
            itens={cardapio.acompanhamento}
            onToggleDisponibilidade={(id) => handleToggleDisponibilidade("acompanhamento", id)}
            onDelete={(id) => handleDeleteItem("acompanhamento", id)}
          />
        </TabsContent>

        <TabsContent value="salada">
          <div className="flex justify-end mb-4">
            <Button onClick={() => openAddDialog("salada")}>
              <Plus className="mr-2 h-4 w-4" /> Adicionar Salada
            </Button>
          </div>
          <CardapioTable
            itens={cardapio.salada}
            onToggleDisponibilidade={(id) => handleToggleDisponibilidade("salada", id)}
            onDelete={(id) => handleDeleteItem("salada", id)}
          />
        </TabsContent>
      </Tabs>

      <AddItemDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        categoria={categoriaAtual}
        onAdd={handleAddItem}
      />
    </DashboardShell>
  )
}
