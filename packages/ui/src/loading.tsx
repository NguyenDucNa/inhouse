import Center from '@packages/ui/center.tsx';
import Spinner from '@packages/ui/spinner.tsx';
import Card from '@packages/ui/card/card.tsx';

export default function Loading() {
  return (
    <Card>
      <Center>
        <Spinner />
      </Center>
    </Card>
  );
}
