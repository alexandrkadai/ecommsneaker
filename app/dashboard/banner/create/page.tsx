'use client';
import { createBanner } from '@/app/actions';
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
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function CreateBannerRoute() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [lastResult, action] = useFormState(createBanner, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
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
              <Label>Name</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type="text"
                placeholder="Create title for banner"
              />
              <p className="text-red-500">{fields.title.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Banner Image</Label>
              <input
                type="hidden"
                value={image}
                key={fields.image.key}
                name={fields.image.name}
                defaultValue={fields.image.initialValue}
              />
              {image !== undefined ? (
                <Image
                  src={image}
                  alt="banner Image"
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-cover border rounded-lg"
                />
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    setImage(res[0].url);
                  }}
                  onUploadError={() => alert('Something Went Wrong')}
                  className="ut-button:bg-purple-600"
                  endpoint="bannerImageUploader"
                />
              )}
              <p className="text-red-500">{fields.image.errors}</p>
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
