"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ArchitectureDiagram from "./ArchitectureDiagram"
import TerminalBlock from "./TerminalBlock"
import {
  ShieldCheck,
  EyeOff,
  ClipboardList,
  Database,
  Cpu,
  GitBranch,
  Lock,
} from "lucide-react"

const FORMSPREE_URL = "https://formspree.io/f/xdanjdoy"

export default function VaultKitLanding() {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false)
  const [founderOpen, setFounderOpen] = useState(false)

  // Early access form state
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [useCase, setUseCase] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const resetEarlyAccess = () => {
    setEarlyAccessOpen(false)
    setEmail("")
    setCompany("")
    setUseCase("")
    setSubmitted(false)
    setError(null)
    setSubmitting(false)
  }

  const submitEarlyAccess = async (e) => {
    e.preventDefault()
    if (!email || !company || submitting) return

    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          company: company.trim(),
          use_case: useCase.trim(),
          source: "vaultkit-landing",
          // honeypot field (should stay empty)
          company_website: "",
        }),
      })

      if (!res.ok) {
        throw new Error("Formspree submission failed")
      }

      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-xl font-semibold">VaultKit</div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#architecture" className="text-zinc-600 hover:text-zinc-900">
            Architecture
          </a>
          <a href="#features" className="text-zinc-600 hover:text-zinc-900">
            Features
          </a>
          <Button size="sm" onClick={() => setEarlyAccessOpen(true)}>
            Get Started
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-36 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Control how humans and AI<br />access production data
        </h1>

        <p className="mt-6 text-xl text-zinc-600 max-w-3xl mx-auto">
          VaultKit is an infrastructure-grade control plane that enforces approvals,
          masking, and auditability for every data request — without changing how
          teams or AI agents query data.
        </p>

        <p className="mt-4 text-sm text-zinc-500">
          Built by engineers solving real governance problems for AI-powered systems.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" onClick={() => setEarlyAccessOpen(true)}>
            Request Early Access
          </Button>
          <Button size="lg" variant="outline" onClick={() => setFounderOpen(true)}>
            Talk to the Founders
          </Button>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-4 gap-10 text-center">
        <Trust icon={<Database />} label="Databases" desc="Postgres, Snowflake, ClickHouse" />
        <Trust icon={<Cpu />} label="AI Agents" desc="LangChain, internal agents, CI bots" />
        <Trust icon={<GitBranch />} label="CI & Automation" desc="Pipelines, scripts, jobs" />
        <Trust icon={<Lock />} label="Compliance" desc="Audit trails, SOC2/GDPR readiness" />
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-3 gap-12"
      >
        <Feature icon={<ShieldCheck />} title="Manual Approvals" desc="Human approval workflows for sensitive queries." />
        <Feature icon={<EyeOff />} title="Policy-Driven Masking" desc="Mask fields by role, policy, or environment." />
        <Feature icon={<ClipboardList />} title="Audit Everything" desc="Every request is logged and traceable." />
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="bg-zinc-50 border-t border-b">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h2 className="text-4xl font-semibold">How VaultKit works</h2>
          <p className="mt-4 text-zinc-600 max-w-3xl mx-auto">
            VaultKit enforces data governance through a single execution boundary.
            Every request flows through FUNL.
          </p>

          <div className="mt-16">
            <ArchitectureDiagram />
          </div>

          <p className="mt-10 text-sm text-zinc-500 max-w-xl mx-auto">
            FUNL is the narrow waist: policies are evaluated once, execution is sandboxed,
            and credentials never reach clients.
          </p>
        </div>
      </section>

      {/* CLI */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-semibold mb-4">
          Built for real engineering workflows
        </h2>
        <p className="text-zinc-600 mb-8 max-w-3xl">
          Integrates into CLI tools, CI pipelines, internal dashboards, and AI systems.
        </p>
        <TerminalBlock />
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h2 className="text-4xl font-semibold">
            Designed for teams building AI-powered products
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            We’re onboarding design partners shaping how AI safely interacts with
            production data.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" onClick={() => setEarlyAccessOpen(true)}>
              Join Design Partner Program
            </Button>
            <Button size="lg" variant="outline" onClick={() => setFounderOpen(true)}>
              Schedule Founder Call
            </Button>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS MODAL */}
      <Dialog open={earlyAccessOpen} onOpenChange={resetEarlyAccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Early Access</DialogTitle>
            <DialogDescription>
              Tell us about your data or AI workflows.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <p className="text-sm text-zinc-600">
              Thanks — we’ll be in touch shortly.
            </p>
          ) : (
            <form onSubmit={submitEarlyAccess} className="space-y-4">
              <Input
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
              <Textarea
                placeholder="What are you trying to govern or protect?"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
              />

              {/* Honeypot */}
              <input
                type="text"
                name="company_website"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <DialogFooter>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* FOUNDER MODAL */}
      <Dialog open={founderOpen} onOpenChange={setFounderOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Talk to the Founders</DialogTitle>
            <DialogDescription>
              We’d love to learn about your use case.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm">
            Email: <strong>founders@vaultkit.io</strong>
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFounderOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

/* ---------- Supporting Components ---------- */

function Feature({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="h-10 w-10 flex items-center justify-center border rounded-lg">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-zinc-600">{desc}</p>
    </div>
  )
}

function Trust({ icon, label, desc }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-12 w-12 flex items-center justify-center border rounded-xl">
        {icon}
      </div>
      <div className="font-medium">{label}</div>
      <div className="text-sm text-zinc-500">{desc}</div>
    </div>
  )
}
