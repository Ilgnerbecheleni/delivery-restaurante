"use client"

import type React from "react"

import { useState } from "react"

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

interface AddItemDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  categoria: string
  onAdd: (categoria: string, item: { nome: string; descricao: string }) => void
}

export function AddItemDialog({ open, onOpenChange, categoria, onAdd }: AddItemDialogProps) {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")

  const categoriasFormatadas: Record<string, string> = {
    arroz: "Arroz",
    feijao: "Feijão",
    proteina: "Proteína",
    acompanhamento: "Acompanhamento",
    salada: "Salada",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nome.trim() === "") return

    onAdd(categoria, { nome, descricao })
    setNome("")
    setDescricao("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar {categoriasFormatadas[categoria] || categoria}</DialogTitle>
          <DialogDescription>Preencha os campos abaixo para adicionar um novo item ao cardápio.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder={`Nome do ${categoriasFormatadas[categoria] || categoria}`}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição do item"
                className="resize-none"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
