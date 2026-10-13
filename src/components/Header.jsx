function Header({ title, year, showYear }) {
  return (
    <header style={{ 
      textAlign: "center", 
      marginBottom: "35px", 
      background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
      padding: "25px",
      borderRadius: "16px",
      color: "white",
      boxShadow: "0 8px 20px rgba(106, 17, 203, 0.2)"
    }}>
      <h1 style={{ fontSize: "2.8rem", margin: "0 0 8px 0", fontWeight: "700" }}>{title}</h1>
      {showYear && <p style={{ fontSize: "1.2rem", margin: 0, opacity: 0.9 }}>ឆ្នាំសិក្សា៖ {year}</p>}
    </header>
  );
}

export default Header;