import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-muted py-4 mt-12">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
