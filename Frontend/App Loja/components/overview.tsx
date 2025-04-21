"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Seg",
    pedidos: 18,
    receita: 420,
  },
  {
    name: "Ter",
    pedidos: 16,
    receita: 380,
  },
  {
    name: "Qua",
    pedidos: 22,
    receita: 510,
  },
  {
    name: "Qui",
    pedidos: 25,
    receita: 590,
  },
  {
    name: "Sex",
    pedidos: 32,
    receita: 750,
  },
  {
    name: "Sáb",
    pedidos: 28,
    receita: 690,
  },
  {
    name: "Dom",
    pedidos: 24,
    receita: 580,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="pedidos" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="receita" fill="#f59e0b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
