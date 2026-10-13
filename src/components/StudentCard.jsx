import Button from "./Button";

function StudentCard({ 
  name, 
  age, 
  isActive, 
  address: { city, province }, 
  skills, 
  major = "មិនទាន់កំណត់", 
  avatar = "https://i.pravatar.cc/100?img=1", 
  onSelect,
  theme 
}) {
  return (
    <div className={`card card-${theme}`}>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>អាយុ៖ {age} ឆ្នាំ</p>
      <p>ជំនាញ៖ {major}</p>
      <p>
        ស្ថានភាព៖{" "}
        <span style={{ color: isActive ? "#28a745" : "#dc3545", fontWeight: "bold" }}>
          {isActive ? "កំពុងសិក្សា" : "ឈប់សិក្សា"}
        </span>
      </p>
      <p>អាសយដ្ឋាន៖ {city}, {province}</p>
      
      {/* ផ្នែក Skills Badge */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>

      <Button 
        label="មើលព័ត៌មាន" 
        variant="primary" 
        onClick={() => onSelect(name)} 
      />
    </div>
  );
}

export default StudentCard;