import { Trefoil } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'

const Loader = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Trefoil
        size={60}
        stroke={4}
        strokeLength={0.15}
        bgOpacity={0.1}
        speed={1.4}
        color="white"
      />
    </div>
  );
};

export default Loader;