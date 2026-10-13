function Card({ title, children, footer }) {
  return (
    <section style={{ border: "2px solid #333", margin: "15px 0", padding: "15px", borderRadius: "8px" }}>
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
      {footer && <div className="card-footer" style={{ marginTop: "10px", borderTop: "1px solid #ddd", paddingTop: "5px" }}>{footer}</div>}
    </section>
  );
}

export default Card;