"use client"

import { useState } from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PedidosTable } from "@/components/pedidos-table"

// Dados simulados para pedidos
const pedidosIniciais = {
  pendentes: [
    {
      id: "1",
      cliente: "João Silva",
      itens: "2 Marmitex Médio",
      valor: "R$ 39,80",
      horario: "10:30",
      status: "pendente",
    },
    {
      id: "2",
      cliente: "Maria Oliveira",
      itens: "1 Marmitex Grande",
      valor: "R$ 24,90",
      horario: "10:45",
      status: "pendente",
    },
  ],
  preparo: [
    {
      id: "3",
      cliente: "Carlos Mendes",
      itens: "3 Marmitex Pequeno",
      valor: "R$ 47,70",
      horario: "10:15",
      status: "preparo",
    },
  ],
  entrega: [
    {
      id: "4",
      cliente: "Ana Souza",
      itens: "1 Marmitex Médio, 1 Marmitex Pequeno",
      valor: "R$ 35,80",
      horario: "09:50",
      status: "entrega",
    },
  ],
  concluidos: [
    {
      id: "5",
      cliente: "Pedro Santos",
      itens: "2 Marmitex Grande",
      valor: "R$ 49,80",
      horario: "09:30",
      status: "concluido",
    },
    {
      id: "6",
      cliente: "Fernanda Lima",
      itens: "1 Marmitex Médio",
      valor: "R$ 19,90",
      horario: "09:15",
      status: "concluido",
    },
  ],
}

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState(pedidosIniciais)

  const handleUpdateStatus = (id: string, novoStatus: string) => {
    // Encontrar o pedido em qualquer categoria
    let pedidoEncontrado = null
    let categoriaAtual = ""

    for (const categoria in pedidos) {
      const index = pedidos[categoria as keyof typeof pedidos].findIndex((pedido) => pedido.id === id)
      if (index !== -1) {
        pedidoEncontrado = pedidos[categoria as keyof typeof pedidos][index]
        categoriaAtual = categoria
        break
      }
    }

    if (!pedidoEncontrado || !categoriaAtual) return

    // Remover o pedido da categoria atual
    const novosPedidos = { ...pedidos }
    novosPedidos[categoriaAtual as keyof typeof novosPedidos] = novosPedidos[
      categoriaAtual as keyof typeof novosPedidos
    ].filter((pedido) => pedido.id !== id)

    // Adicionar o pedido à nova categoria
    const novoPedido = { ...pedidoEncontrado, status: novoStatus }

    let novaCategoria = ""
    switch (novoStatus) {
      case "pendente":
        novaCategoria = "pendentes"
        break
      case "preparo":
        novaCategoria = "preparo"
        break
      case "entrega":
        novaCategoria = "entrega"
        break
      case "concluido":
        novaCategoria = "concluidos"
        break
      default:
        novaCategoria = "pendentes"
    }

    novosPedidos[novaCategoria as keyof typeof novosPedidos] = [
      ...novosPedidos[novaCategoria as keyof typeof novosPedidos],
      novoPedido,
    ]

    setPedidos(novosPedidos)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Gerenciar Pedidos" description="Visualize e atualize o status dos pedidos" />

      <Tabs defaultValue="pendentes" className="w-full">
        <TabsList>
          <TabsTrigger value="pendentes">Pendentes ({pedidos.pendentes.length})</TabsTrigger>
          <TabsTrigger value="preparo">Em Preparo ({pedidos.preparo.length})</TabsTrigger>
          <TabsTrigger value="entrega">Em Entrega ({pedidos.entrega.length})</TabsTrigger>
          <TabsTrigger value="concluidos">Concluídos ({pedidos.concluidos.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pendentes">
          <PedidosTable
            pedidos={pedidos.pendentes}
            onUpdateStatus={handleUpdateStatus}
            proximoStatus="preparo"
            proximoStatusLabel="Iniciar Preparo"
          />
        </TabsContent>

        <TabsContent value="preparo">
          <PedidosTable
            pedidos={pedidos.preparo}
            onUpdateStatus={handleUpdateStatus}
            proximoStatus="entrega"
            proximoStatusLabel="Enviar para Entrega"
          />
        </TabsContent>

        <TabsContent value="entrega">
          <PedidosTable
            pedidos={pedidos.entrega}
            onUpdateStatus={handleUpdateStatus}
            proximoStatus="concluido"
            proximoStatusLabel="Marcar como Entregue"
          />
        </TabsContent>

        <TabsContent value="concluidos">
          <PedidosTable pedidos={pedidos.concluidos} onUpdateStatus={handleUpdateStatus} showActions={false} />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
