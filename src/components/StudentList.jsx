import StudentCard from "./StudentCard";

function StudentList({ students, onSelect, theme }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard 
          key={student.id} 
          {...student} 
          onSelect={onSelect} 
          theme={theme}
        />
      ))}
    </div>
  );
}

export default StudentList;