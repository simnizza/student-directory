import Card from "./Card";
import StudentList from "./StudentList";

function Dashboard({ students, onSelect, theme }) {
  const total = students.length;
  const activeCount = students.filter(s => s.isActive).length;
  const inactiveCount = students.filter(s => !s.isActive).length;

  return (
    <div>
      <Card title="ស្ថិតិទូទៅ" footer="ទិន្នន័យបានអាប់ដេតថ្មីៗ">
        <p>ចំនួននិស្សិតសរុប៖ {total}</p>
        <p>កំពុងសិក្សា៖ {activeCount}</p>
        <p>ឈប់សិក្សា៖ {inactiveCount}</p>
      </Card>

      <Card title="បញ្ជីនិស្សិត">
        <StudentList students={students} onSelect={onSelect} theme={theme} />
      </Card>
    </div>
  );
}

export default Dashboard;