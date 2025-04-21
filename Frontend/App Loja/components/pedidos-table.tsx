"use client"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Pedido {
  id: string
  cliente: string
  itens: string
  valor: string
  horario: string
  status: string
}

interface PedidosTableProps {
  pedidos: Pedido[]
  onUpdateStatus: (id: string, novoStatus: string) => void
  proximoStatus?: string
  proximoStatusLabel?: string
  showActions?: boolean
}

export function PedidosTable({
  pedidos,
  onUpdateStatus,
  proximoStatus,
  proximoStatusLabel,
  showActions = true,
}: PedidosTableProps) {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "pendente":
        return "bg-yellow-100 text-yellow-800"
      case "preparo":
        return "bg-blue-100 text-blue-800"
      case "entrega":
        return "bg-purple-100 text-purple-800"
      case "concluido":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pendente":
        return "Pendente"
      case "preparo":
        return "Em Preparo"
      case "entrega":
        return "Em Entrega"
      case "concluido":
        return "Concluído"
      default:
        return status
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Itens</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Horário</TableHead>
            <TableHead>Status</TableHead>
            {showActions && <TableHead className="w-[100px]">Ações</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pedidos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={showActions ? 6 : 5} className="h-24 text-center">
                Nenhum pedido encontrado.
              </TableCell>
            </TableRow>
          ) : (
            pedidos.map((pedido) => (
              <TableRow key={pedido.id}>
                <TableCell className="font-medium">{pedido.cliente}</TableCell>
                <TableCell>{pedido.itens}</TableCell>
                <TableCell>{pedido.valor}</TableCell>
                <TableCell>{pedido.horario}</TableCell>
                <TableCell>
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${getStatusBadgeClass(pedido.status)}`}
                  >
                    {getStatusLabel(pedido.status)}
                  </span>
                </TableCell>
                {showActions && (
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => window.alert(`Detalhes do pedido ${pedido.id}`)}>
                          Ver Detalhes
                        </DropdownMenuItem>
                        {proximoStatus && proximoStatusLabel && (
                          <DropdownMenuItem onClick={() => onUpdateStatus(pedido.id, proximoStatus)}>
                            {proximoStatusLabel}
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
