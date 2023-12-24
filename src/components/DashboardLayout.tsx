// components/DashboardLayout.tsx
import DashboardCard from './DashboardCard';

const DashboardLayout = () => {
  const cardsData = [
    { title: 'Admission', content: 'Admission details go here.Quick registration details go here.',url: '/admission' },
    { title: 'Bus', content: 'Handle Bus Fee – The Way You Want – Distance wise, Route wise, Stop wise or Fixed.' ,url: '/about'},
    { title: 'FEE', content: 'Create Customize & Manipulate your school Fee on your own way along with Interactive Reporting for all your Schools Requirement.' ,url: '/about'},
    { title: 'Account', content: 'Automatic Accounts Attachment With Fee, Salary, Loan & Advances, Payment To Supplier etc.' ,url: '/about'},
    // Add more cards as needed
  ];

  return (
    <div>
    <header>
      <h1 className="text-2xl font-bold mb-4">School Dashboard</h1>
      {/* Add any header content */}
    </header>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <DashboardCard key={index} title={card.title} content={card.content} url={card.url}/>
      ))}
    </main>
  </div>
  );
};

export default DashboardLayout;