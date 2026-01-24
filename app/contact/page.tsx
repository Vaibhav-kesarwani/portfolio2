import Contact from "@/components/contact/contact";
import SocialLink from "@/components/contact/social-link";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 w-full mx-auto pt-32">
        <Contact />
        <hr className="mt-25"/>
        <SocialLink />
        <hr />
      </div>
    </div>
  );
}
