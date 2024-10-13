import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function DeleteRoute() {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you Absolutely sure to delete this Product ?</CardTitle>
          <CardDescription>
            This Action cannot be undone once you delete product you will lost all data about it.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="secondary">Cancel</Button>
          <Button variant="destructive">Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
