import prisma from '@/app/lib/db';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

async function getData() {
  const order = await prisma.order.findMany({
    select: {
      amount: true,
      id: true,
      User: {
        select: {
          firstName: true,
          profileImage: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 7,
  });

  return order;
}
export default async function RecentSales() {
  const order = await getData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 ">
        {order.map((item) => (
          <div className="flex items-center gap-4" key={item.id}>
            <Avatar className="hidden md:flex h-9 w-9">
              <Image  src={item.User?.profileImage as string} width={32} height={32} alt="Profile image of client"/>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium">{item.User?.firstName}</p>
              <p className="text-sm text-muted-foreground">{item.User?.email}</p>
            </div>
            <p className="ml-auto font-medium"> $ {item.amount / 100 }</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
