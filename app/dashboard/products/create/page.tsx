import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const ProductCreateRoute = () => {
  return (
    <form>
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft size={24} />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products Details</CardTitle>
          <CardDescription>In this form can create youe product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input type='text' className='w-full' placeholder='Product Name'/>
            </div>
            <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Textarea placeholder='Write your Description ... '/>
            </div>
            <div className="flex flex-col gap-3">
                <Label>Price</Label>
                <Input  placeholder='999$'/>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProductCreateRoute;
