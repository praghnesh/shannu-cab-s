import ServicesComponent from '@/components/Services';

export const metadata = {
  title: 'Our Services | Fast Travels',
  description: 'Premium outstation cabs, airport transfers, and wedding cars.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <ServicesComponent />
    </div>
  );
}
