export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="watch">
    <div className="band">
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
    <div className="goldring">
      <div className="time">
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        <div className="points"></div>
        </div>
    <div className="inner">{children}</div>
    </div>
  </div>
    );
  }