"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth-provider"

export function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.email || !formData.password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      })
      return
    }

    // Simulação de autenticação
    // Em uma aplicação real, isso seria uma chamada API
    if (formData.email === "admin@exemplo.com" && formData.password === "admin123") {
      login({
        id: "1",
        name: "Administrador",
        email: formData.email,
        role: "admin",
      })
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao painel administrativo.",
      })
      router.push("/dashboard")
    } else {
      toast({
        title: "Credenciais inválidas",
        description: "Email ou senha incorretos.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
            <Utensils className="h-8 w-8" />
            <span>Tradição Mineira</span>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-center">Gerenciamento de Cardápio</CardTitle>
        <CardDescription className="text-center">
          Entre com suas credenciais para acessar o painel administrativo
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Para demonstração:</p>
            <p>Email: admin@exemplo.com</p>
            <p>Senha: admin123</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Entrar
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
