import { useServicingStore } from '@packages/local-device-order/page/servicing/store/servicing-store.ts';
import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';

const GuestPanel = () => {
  const guests = useServicingStore((state) => state.guests);
  const selectedGuest = useServicingStore((state) => state.selectedGuest);
  const selectGuest = useServicingStore((state) => state.setSelectedGuest);

  if (!selectedGuest) {
    return <div></div>;
  }

  return (
    <MenuSelectionInput
      title="Guest"
      value={selectedGuest}
      data={guests}
      onChange={selectGuest}
      build={(guest) => ({ id: guest.id, name: guest.name })}
    />
  );
};

export default GuestPanel;
