"use client"

import type React from "react"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

interface CardapioItem {
  id: string
  nome: string
  descricao: string
  disponivel: boolean
  imagem: string
}

interface EditItemDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  item: CardapioItem
}

export function EditItemDialog({ open, onOpenChange, item }: EditItemDialogProps) {
  const [nome, setNome] = useState(item.nome)
  const [descricao, setDescricao] = useState(item.descricao)
  const [disponivel, setDisponivel] = useState(item.disponivel)

  useEffect(() => {
    if (item) {
      setNome(item.nome)
      setDescricao(item.descricao)
      setDisponivel(item.disponivel)
    }
  }, [item])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Em uma aplicação real, aqui você enviaria os dados para o backend
    // e atualizaria o estado global

    // Simulação de sucesso
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Item</DialogTitle>
          <DialogDescription>Faça as alterações necessárias no item do cardápio.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="disponivel">Disponível</Label>
              <Switch id="disponivel" checked={disponivel} onCheckedChange={setDisponivel} />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
