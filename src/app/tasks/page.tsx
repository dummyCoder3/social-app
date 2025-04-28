type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type Tasks = Task[];

export default async function TaskPage() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks: Tasks = await res.json();

  return (
    <div>
      <h1 className="font-bold text-xl">Tasks: </h1>
      <ul className="pl-3 py-2 border border-dashed border-muted-foreground">
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
