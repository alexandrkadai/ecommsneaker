import prisma from '@/app/lib/db';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSignIcon, PartyPopperIcon, ShoppingBagIcon, User2Icon } from 'lucide-react';

async function getData() {
  const [user, products, order] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
      },
    }),

    prisma.product.findMany({
      select: {
        id: true,
      },
    }),

    prisma.order.findMany({
      select: {
        amount: true,
      },
    }),
  ]);

  return {
    user,
    products,
    order,
  };
}

export default async function DashboardStats() {
  const { user, products, order } = await getData();

  const totalAmount = order.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Revenue</CardTitle>
          <DollarSignIcon className="w-5 h-5 text-green-500 -translate-y-[3px]" />
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">$ {totalAmount / 100}</p>
          <p className="text-xs text-muted-foreground">Based on {order.length} charge(s)</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{order.length}</p>
          <p className="text-xs text-muted-foreground">Total sales </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Products</CardTitle>
          <ShoppingBagIcon className="w-5 h-5 text-blue-500 -translate-y-[3px]" />
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{products.length}</p>
          <p className="text-xs text-muted-foreground">Total products created</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Users</CardTitle>
          <User2Icon className="w-5 h-5 text-orange-500 -translate-y-[3px]" />
          <PartyPopperIcon className="w-5 h-5 text-purple-500 -translate-y-[3px]" />
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{user.length}</p>
          <p className="text-xs text-muted-foreground">Total user registered </p>
        </CardContent>
      </Card>
    </div>
  );
}
