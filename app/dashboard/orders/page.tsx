import prisma from '@/app/lib/db';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { unstable_noStore as noStore } from 'next/cache';

async function getData() {
  const data = await prisma.order.findMany({
    select: {
      amount: true,
      createdAt: true,
      id: true,
      status: true,
      User: {
        select: {
          firstName: true,
          email: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}
const Orders = async () => {
  noStore();
  const data = await getData();

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Rescent Orer From YOur Store</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <p className="font-medium">{item.User?.firstName}</p>
                  <p className="hidden text-muted-foreground md:flex">
                    {item.User?.email}
                  </p>
                </TableCell>
                <TableCell>Order</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat('en-US').format(item.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  $ {item.amount / 100}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Orders;
