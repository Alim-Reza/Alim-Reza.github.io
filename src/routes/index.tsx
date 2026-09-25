import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import systemGraph from "@/assets/system-graph.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alim Ahmed Reza — Senior Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Senior full-stack engineer with 7+ years in fintech and enterprise platforms: Java/Spring Boot microservices, cloud-native delivery, and AI-assisted engineering workflows.",
      },
      { property: "og:title", content: "Alim Ahmed Reza — Senior Full-Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend architecture, microservices, DevOps and AI-assisted engineering for fintech, enterprise and government platforms.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Workspace,
});

const navItems = [
  { label: "Workspace", active: true },
  { label: "Architecture", active: false },
  { label: "Case Files", active: false },
  { label: "Projects", active: false },
  { label: "AI Playbooks", active: false },
];

const stack = ["Java", "Spring Boot", "Next.js", "Angular", "PostgreSQL", "Kafka", "AWS", "Docker"];

const notes = [
  { date: "2026.06.12", tag: "AI_WORKFLOWS", title: "Skills and rule files as reusable engineering assets" },
  { date: "2026.05.28", tag: "GOVERNANCE", title: "Encoding PCI DSS and ISO guidance into AI review gates" },
  { date: "2026.04.15", tag: "PLATFORM", title: "Configuration-driven multi-tenancy without redeployment" },
  { date: "2026.03.02", tag: "OBSERVABILITY", title: "ELK-first incident investigation for microservices" },
];

const projects = [
  {
    name: "CMS — Card Management System",
    domain: "FinTech",
    role: "Full-stack Engineer",
    description:
      "Secure distributed microservices platform for financial transactions and card management, with resilient fallbacks for high availability.",
  },
  {
    name: "GRP — Government ERP",
    domain: "ERP",
    role: "Full-stack Engineer",
    description:
      "Pilot ERP for the Ministry of Planning covering inventory, asset, budgeting and audit modules.",
  },
  {
    name: "Kona Token Trade",
    domain: "Blockchain . ECOM",
    role: "Frontend & Mobile Engineer",
    description:
      "Cryptocurrency and NFT trading platform supporting multilateral trading and real-time asset tracking.",
  },
  {
    name: "Altair",
    domain: "3D Marketplace",
    role: "Team Lead — team of 4",
    description: "3D asset marketplace supporting upload, download and model conversion.",
  },
];

function BrandMark() {
  return (
    <div className="flex size-8 items-center justify-center rounded-md bg-primary text-[10px] font-semibold tracking-[0.25em] text-primary-foreground">
      AR
    </div>
  );
}

function Workspace() {
  const [pendingSection, setPendingSection] = React.useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

  const handleSectionClick = React.useCallback((label: string) => {
    setPendingSection(label);
    setMobileDrawerOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
      <nav className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-hairline bg-rail lg:flex">
        <div className="flex h-full flex-col p-6">
          <div className="mb-10 flex items-center gap-3">
            <BrandMark />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">Alim Ahmed Reza</span>
              <span className="mt-1 font-mono text-[11px] text-muted-foreground">SR_SOFTWARE_ENGINEER</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Navigation
            </div>
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSectionClick(item.label)}
                className={
                  item.active
                    ? "flex w-full items-center gap-3 rounded-md bg-subtle px-3 py-2 text-left text-sm font-medium text-foreground"
                    : "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-subtle hover:text-foreground"
                }
              >
                <span className="size-1.5 shrink-0 rounded-full bg-current opacity-40" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto">
            <div className="rounded-lg border border-hairline bg-subtle p-4">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Connect
              </div>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/alim-ahmed-reza-asif"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex size-2.5 rounded-full bg-sky-600" />
                  LinkedIn
                </a>
                <a
                  href="https://www.hackerrank.com/profile/alimreza"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex size-2.5 rounded-full bg-emerald-500" />
                  HackerRank
                </a>
                <a
                  href="https://github.com/alim-reza"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex size-2.5 rounded-full bg-black" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b border-hairline bg-rail/80 px-4 backdrop-blur-md sm:px-8">
          <div className="flex flex-1 items-center gap-3">
            <Sheet open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation drawer"
                  className="lg:hidden inline-flex items-center justify-center rounded-md transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <BrandMark />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="border-r border-border bg-rail p-0 text-foreground">
                <SheetHeader className="border-b border-hairline p-6 text-left">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Open the portfolio navigation drawer.
                  </SheetDescription>
                  <div className="flex items-center gap-3">
                    <BrandMark />
                    <div className="flex flex-col leading-none">
                      <span className="text-sm font-semibold tracking-tight">Alim Ahmed Reza</span>
                      <span className="mt-1 font-mono text-[11px] text-muted-foreground">
                        SR_SOFTWARE_ENGINEER
                      </span>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex h-full flex-col p-6">
                  <div className="space-y-1">
                    <div className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                      Navigation
                    </div>
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <button
                          type="button"
                          onClick={() => handleSectionClick(item.label)}
                          className={
                            item.active
                              ? "flex w-full items-center gap-3 rounded-md bg-subtle px-3 py-2 text-left text-sm font-medium text-foreground"
                              : "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-subtle hover:text-foreground"
                          }
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-current opacity-40" />
                          {item.label}
                        </button>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="mt-8 rounded-lg border border-hairline bg-subtle p-4">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Connect
                    </div>
                    <div className="space-y-2">
                      <SheetClose asChild>
                        <a
                          href="https://www.linkedin.com/in/alim-ahmed-reza-asif"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="inline-flex size-2.5 rounded-full bg-sky-600" />
                          LinkedIn
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="https://www.hackerrank.com/profile/alimreza"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="inline-flex size-2.5 rounded-full bg-emerald-500" />
                          HackerRank
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="https://github.com/alim-reza"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="inline-flex size-2.5 rounded-full bg-black" />
                          GitHub
                        </a>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="hidden w-full max-w-md items-center gap-2 rounded-md border border-hairline bg-subtle px-3 py-1.5 sm:flex">
              <span className="font-mono text-xs tracking-tighter text-muted-foreground">CMD + K</span>
              <span className="text-sm text-muted-foreground">Search case files and projects…</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Alim_Ahmed_Reza_Resume.pdf"
              className="text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Resume
            </a>
            <a
              href="mailto:aar.reza@proton.me"
              className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Connect
            </a>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-8">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <section className="col-span-12 lg:col-span-8">
              <div className="h-full rounded-xl bg-panel p-6 ring-1 ring-hairline sm:p-8">
                <h1 className="mb-4 text-balance text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                  Building scalable fintech and enterprise platforms end to end.
                </h1>
                <p className="max-w-[56ch] text-pretty text-muted-foreground">
                  Seven years turning ambiguous requirements into production systems: Java and Spring Boot
                  microservices, event-driven architecture, cloud-native delivery, and AI-assisted engineering
                  workflows — owning backend, frontend and DevOps alike.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  <span>FinTech</span>
                  <span>Enterprise Software</span>
                  <span>Government ERP</span>
                  <span>Blockchain</span>
                  <span>AI-assisted Dev</span>
                </div>
              </div>
            </section>

            <aside className="col-span-12 grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-4">
              <div className="flex flex-col justify-between gap-4 rounded-xl bg-panel p-4 ring-1 ring-hairline">
                <span className="font-mono text-[10px] uppercase text-muted-foreground">Years Shipping</span>
                <span className="text-2xl font-medium">7+</span>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-xl bg-panel p-4 ring-1 ring-hairline">
                <span className="font-mono text-[10px] uppercase text-muted-foreground">Projects Delivered</span>
                <span className="text-2xl font-medium">6+</span>
              </div>
              <div className="col-span-2 rounded-xl bg-panel p-4 ring-1 ring-hairline">
                <div className="mb-2 font-mono text-[10px] uppercase text-muted-foreground">Primary Stack</div>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="rounded bg-subtle px-2 py-1 font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <article className="col-span-12 flex flex-col gap-6 rounded-xl bg-panel p-6 ring-1 ring-hairline sm:p-8 lg:flex-row lg:gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    CASE_01
                  </span>
                  <h2 className="text-xl font-medium">Multi-tenant platform &amp; approval engine</h2>
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    Kona Software Lab · 2022—now
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      The problem
                    </h3>
                    <p className="max-w-[48ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                      Every new fintech customer meant forked code: bespoke roles, menus, fee rules and approval
                      chains, each requiring a redeployment to change.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Architecture &amp; delivery
                    </h3>
                    <p className="max-w-[48ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                      A configuration-driven multi-tenant platform with tenant isolation, configurable RBAC and
                      dynamic menus, an end-to-end Approval Management System with analytics, and fee/limit policy
                      engines configurable at runtime. Reusable core libraries cut project bootstrap time ~50%.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 border-t border-hairline pt-4">
                  <div>
                    <span className="block text-lg font-medium">-50%</span>
                    <span className="text-[10px] uppercase text-muted-foreground">Feature lead time</span>
                  </div>
                  <div>
                    <span className="block text-lg font-medium">-40%</span>
                    <span className="text-[10px] uppercase text-muted-foreground">Notification latency</span>
                  </div>
                  <div>
                    <span className="block text-lg font-medium">-60%</span>
                    <span className="text-[10px] uppercase text-muted-foreground">Page load (TS + Next.js)</span>
                  </div>
                </div>
                <p className="max-w-[70ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">Lesson: </span>
                  configuration is a product surface — once policies became data, onboarding a tenant stopped
                  being an engineering ticket.
                </p>
              </div>
              <div className="w-full shrink-0 lg:w-72">
                <img
                  src={systemGraph}
                  alt="Architecture diagram of the multi-tenant fintech platform and its service clusters"
                  width={816}
                  height={816}
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
            </article>

            {/* <article className="col-span-12 grid grid-cols-1 gap-6 rounded-xl bg-panel p-6 ring-1 ring-hairline sm:p-8 lg:grid-cols-3">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    CASE_02
                  </span>
                  <h2 className="text-xl font-medium">Log4Shell response &amp; campaign scale-up</h2>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  National payment rails at RedDot Digital, with Nagad, bKash and Robi traffic converging on a
                  single high-visibility campaign.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Constraints
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  A live zero-day across 8 microservices, no maintenance window, and cross-company teams that had
                  never shipped together.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Result
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  All services patched within 24 hours, 99.9%+ uptime held through peak campaign traffic, and a
                  payment gateway UI rebuild that cut load time ~40%.
                </p>
              </div>
            </article> */}

            <section className="col-span-12 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Selected projects
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <div key={project.name} className="rounded-xl bg-panel p-6 ring-1 ring-hairline">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        {project.domain}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        {project.role}
                      </span>
                    </div>
                    <h4 className="mb-2 text-base font-medium">{project.name}</h4>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="col-span-12 space-y-4 lg:col-span-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Recent lab notes
                </h3>
                <a href="#" className="text-xs font-medium text-foreground">
                  Browse all &rarr;
                </a>
              </div>
              <div className="divide-y divide-hairline overflow-hidden rounded-xl bg-panel ring-1 ring-hairline">
                {notes.map((note) => (
                  <a key={note.title} href="#" className="group block p-4 transition-colors hover:bg-subtle">
                    <div className="mb-1 font-mono text-[10px] text-muted-foreground">
                      {note.date} • {note.tag}
                    </div>
                    <div className="text-sm font-medium">{note.title}</div>
                  </a>
                ))}
              </div>
              <div className="rounded-xl bg-panel p-6 ring-1 ring-hairline">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Education
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium">MSc, Computer Science &amp; Software Engineering</div>
                    <div className="text-muted-foreground">North South University · 2025 — in progress</div>
                  </div>
                  <div>
                    <div className="font-medium">BSc, Computer Science &amp; Software Engineering</div>
                    <div className="text-muted-foreground">AIUB · 2016 — 2019</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 flex flex-col justify-between gap-8 rounded-xl bg-primary p-6 text-primary-foreground ring-1 ring-primary sm:p-8 lg:col-span-6">
              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest opacity-60">
                  AI-assisted engineering practice
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-current" />
                    <span className="text-sm opacity-90">
                      Spec-driven and review-driven development with reusable Skills and Rule Files in Cursor and
                      Claude Code.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-current" />
                    <span className="text-sm opacity-90">
                      AI governance rule sets encoding ISO guidelines, PCI DSS requirements, coding standards and
                      project architecture.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-current" />
                    <span className="text-sm opacity-90">
                      RAG and MCP integrations that give agents grounded context over large enterprise codebases.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-current/10 pt-8">
                <span className="font-mono text-[11px] opacity-40">DHAKA, BANGLADESH</span>
                <a
                  href="mailto:aar.reza@proton.me"
                  className="rounded-md bg-panel px-4 py-2 text-xs font-medium text-panel-foreground"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-hairline pt-8 md:flex-row">
            <div className="font-mono text-[11px] text-muted-foreground">
              &copy; 2026 // ALIM_AHMED_REZA // DHAKA, BD
            </div>
            <div className="flex gap-8">
              <a
                href="https://github.com/alim-reza"
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alim-ahmed-reza-asif"
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="mailto:aar.reza@proton.me"
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                aar.reza@proton.me
              </a>
            </div>
          </footer>
        </div>

        <Dialog open={pendingSection !== null} onOpenChange={(open) => !open && setPendingSection(null)}>
          <DialogContent className="border-border bg-panel sm:max-w-md">
            <DialogHeader className="space-y-3 text-left">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-current opacity-60" />
                In progress
              </div>
              <DialogTitle className="text-xl font-medium tracking-tight">
                {pendingSection ?? "Section"} is coming soon
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                This navigation target is not wired yet. The layout stays visible, but the destination is still
                being built.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-lg border border-hairline bg-subtle p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
              STATUS: FEATURE_IN_PROGRESS
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
