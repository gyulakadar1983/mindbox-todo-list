import TodoPage from "@/pages/todo";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
            Mindbox Todo List
          </h1>

          <TodoPage />
        </div>
      </div>
    </div>
  );
};

export default App;
