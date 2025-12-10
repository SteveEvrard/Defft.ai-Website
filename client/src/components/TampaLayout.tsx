import { ReactNode } from "react";
import { Link } from "wouter";

export default function TampaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img src="/assets/Defftlogolock.png" alt="Defft.ai" className="h-8 w-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-0.5 rounded uppercase tracking-widest">Confidential</span>
            </div>
          </Link>
          <div className="text-xs font-mono text-muted-foreground">
            FOR LINDENMEYR EYES ONLY
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Defft.ai. All rights reserved. Confidential & Proprietary.
          </p>
        </div>
      </footer>
    </div>
  );
}
