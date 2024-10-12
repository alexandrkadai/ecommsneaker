'use server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from './lib/zodSchemas';

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }

  const submisson = parseWithZod(formData, {
    schema: productSchema,
  });

  if(submisson.status !== 'success'){
    return submisson.reply();

  }
}
