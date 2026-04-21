import FleetComponent from '@/components/Fleet';

export const metadata = {
  title: 'Our Vehicle Fleet | Fast Travels',
  description: 'View our diverse fleet including Sedans, SUVs, and Tempo Travellers.',
};

export default function FleetPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <FleetComponent hideViewAll={true} />
    </div>
  );
}
