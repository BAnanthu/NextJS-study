// components/DashboardCard.tsx
interface DashboardCardProps {
  title: string;
  content: string;
  url: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, content, url }) => {
  return (
    <a  href={url}>
    <div className="text-black bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
    </a>
  );
};

export default DashboardCard;