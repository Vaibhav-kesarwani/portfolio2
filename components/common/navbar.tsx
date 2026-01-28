import Container from "./container";
import { ThemeToggleButton } from "./theme-switch";

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div>
        <div>
            
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-right" />
        </div>
      </div>
    </Container>
  );
}
