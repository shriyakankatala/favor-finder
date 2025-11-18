export default function Card({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}
