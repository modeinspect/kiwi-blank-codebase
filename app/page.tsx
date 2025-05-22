import Link from 'next/link';
import Button from '@/lib/kiwi-orbit/Button';
import Heading from '@/lib/kiwi-orbit/Heading';
import Text from '@/lib/kiwi-orbit/Text';

export default function Orbit() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <Heading type="display">Welcome to Our Service</Heading>
      <div className="my-6 max-w-2xl">
        <Text size="large">
          Check out our transparent pricing options for individuals and businesses of all sizes.
        </Text>
      </div>
      <div className="mt-6">
        <Link href="/pricing" passHref>
          <Button type="primary" size="large">
            View Pricing
          </Button>
        </Link>
      </div>
    </div>
  );
}
