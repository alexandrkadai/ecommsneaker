import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSignIcon, PartyPopperIcon, ShoppingBagIcon, User2Icon } from 'lucide-react';


const Dashboard = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 mf:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSignIcon className="w-5 h-5 text-green-500 -translate-y-[3px]" />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">$100.000</p>
            <p className="text-xs text-muted-foreground">Based on 100 charges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBagIcon className="w-5 h-5 text-blue-500 -translate-y-[3px]" />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">Total sales </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopperIcon className="w-5 h-5 text-purple-500 -translate-y-[3px]" />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">37</p>
            <p className="text-xs text-muted-foreground">Total products created</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2Icon className="w-5 h-5 text-orange-500 -translate-y-[3px]" />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">120</p>
            <p className="text-xs text-muted-foreground">Total user registered </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recents Transaction From Store</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-8 '>
            <div className="flex items-center gap-4">
              <Avatar className='hidden md:flex h-9 w-9'>
                <AvatarFallback>
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1 ">
                <p className='text-sm font-medium'>Alexandr Chinnoto</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1222</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className='hidden md:flex h-9 w-9'>
                <AvatarFallback>
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1 ">
                <p className='text-sm font-medium'>Alexandr Chinnoto</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1222</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className='hidden md:flex h-9 w-9'>
                <AvatarFallback>
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1 ">
                <p className='text-sm font-medium'>Alexandr Chinnoto</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1222</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className='hidden md:flex h-9 w-9'>
                <AvatarFallback>
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1 ">
                <p className='text-sm font-medium'>Alexandr Chinnoto</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1222</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className='hidden md:flex h-9 w-9'>
                <AvatarFallback>
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1 ">
                <p className='text-sm font-medium'>Alexandr Chinnoto</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1222</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
