import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default function Home() {
  return (
    <div>
      <Button asChild>
        <LoginLink>Log In</LoginLink>
      </Button>
      <Button>
        
        <RegisterLink>Sign-Up</RegisterLink>
      </Button>
    </div>
  );
}
