import { footerConfig } from "@/config/footer";
import Container from "./container";

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          {footerConfig.text} <b>{footerConfig.developer}</b>
          <br /> &copy; {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}
