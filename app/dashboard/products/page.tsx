import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

const Products = () => {
  return <>
    <div className="flex items-center justify-end">
        <Button className="flex items-center gap-x-2">
          <Link href="/dashboard/producrs/create">  <PlusCircleIcon size={20} />
            <span>Add product</span>
            </Link>
        </Button>
    </div>
  </>
};

export default Products;
