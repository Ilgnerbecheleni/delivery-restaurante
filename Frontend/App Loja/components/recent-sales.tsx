import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-red-100 text-red-600">JS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">João Silva</p>
          <p className="text-sm text-muted-foreground">2 Marmitex Médio</p>
        </div>
        <div className="ml-auto font-medium">R$ 39,80</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-red-100 text-red-600">MO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Maria Oliveira</p>
          <p className="text-sm text-muted-foreground">1 Marmitex Grande</p>
        </div>
        <div className="ml-auto font-medium">R$ 24,90</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-red-100 text-red-600">CM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Carlos Mendes</p>
          <p className="text-sm text-muted-foreground">3 Marmitex Pequeno</p>
        </div>
        <div className="ml-auto font-medium">R$ 47,70</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-red-100 text-red-600">AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ana Souza</p>
          <p className="text-sm text-muted-foreground">1 Marmitex Médio, 1 Marmitex Pequeno</p>
        </div>
        <div className="ml-auto font-medium">R$ 35,80</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-red-100 text-red-600">PS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Pedro Santos</p>
          <p className="text-sm text-muted-foreground">2 Marmitex Grande</p>
        </div>
        <div className="ml-auto font-medium">R$ 49,80</div>
      </div>
    </div>
  )
}
