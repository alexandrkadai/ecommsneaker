'use client';
import { createProduct } from '@/app/actions';
import { SubmitButton } from '@/app/components/SubmitButton';
import { UploadDropzone } from '@/app/lib/uploadthing';
import { bannerSchema } from '@/app/lib/zodSchemas';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function CreateBannerRoute() {
  const [iamge, setImages] = useState(undefined);
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, field] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <form>
      <div className="flex items-center gap-x-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="dashboard/banner">
            <ChevronLeft size={24} className="mr-1" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Banner</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Details</CardTitle>
          <CardDescription>Create Your Banner</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label>
                <Input type="text" placeholder="Create title for banner" />
              </Label>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <UploadDropzone className="ut-button:bg-purple-600" endpoint="bannerImageUploader" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton variant="default" text="Create Banner" />
        </CardFooter>
      </Card>
    </form>
  );
}
