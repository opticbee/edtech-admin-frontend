export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <p>Welcome! You have successfully logged in.</p>

      <div className="mt-6 space-x-4">
        <a
          href="/classes"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Manage Classes
        </a>

        <a
          href="/users"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Manage Users
        </a>
      </div>
    </div>
  );
}
