'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Cpu, Hammer, Layers, Package, Ruler, Sparkles, Truck } from 'lucide-react';

export default function Page() {
  const [email, setEmail] = useState('');

  const Feature = ({Icon, title, desc}: any) => (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5"/> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">{desc}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-lime-400" />
            <span className="font-semibold tracking-tight">Action Manufacturing Services</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#capabilities" className="hover:opacity-80">Capabilities</a>
            <a href="#work" className="hover:opacity-80">Industries</a>
            <a href="#equipment" className="hover:opacity-80">Equipment</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <Button className="rounded-2xl">Request a Quote</Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(40%_20%_at_50%_0%,#d9f99d_0%,transparent_70%)]" />
        <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-4 rounded-full" variant="secondary">
              <Sparkles className="h-3.5 w-3.5 mr-1"/> Prototype to Production
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              CNC, Waterjet, and Fabrication—<span className="text-lime-600"> On Time.</span>
            </h1>
            <p className="mt-5 text-lg text-neutral-700 max-w-xl">
              Georgia-based contract manufacturing for R&D, defense, and industrial customers. Precision parts, quick-turn prototypes, and dependable production runs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl">Get a Quote</Button>
              <Button size="lg" variant="outline" className="rounded-2xl">View Equipment List</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/> ITAR-aware workflows</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/> Tight-tolerance machining</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/> Fast lead times</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border bg-gradient-to-br from-neutral-50 to-neutral-100 shadow-sm grid place-items-center">
              <div className="grid grid-cols-3 gap-4 p-6 w-full">
                {[
                  "CNC Milling",
                  "Waterjet Cutting",
                  "Router & Forming",
                  "Turning",
                  "Welding",
                  "Anodize/Finish",
                  "Assembly",
                  "Inspection",
                  "Packaging",
                ].map((t, i) => (
                  <div key={i} className="rounded-2xl bg-white border shadow p-4 text-center text-sm font-medium">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="rounded-2xl border bg-white shadow-xl">
                <div className="p-4 pb-2">
                  <div className="text-sm font-semibold">Typical Lead Time</div>
                </div>
                <div className="px-4 pb-4 pt-0">
                  <p className="text-3xl font-extrabold tracking-tight">3–10 days</p>
                  <p className="text-xs text-neutral-600">Expedites available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="container py-16 md:py-24">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Capabilities</h2>
          <p className="text-neutral-700 mt-2 max-w-2xl">End-to-end manufacturing with rigorous QA and documented processes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {Icon: Hammer, title: "CNC Machining", desc: "Haas VF-series vertical mills, tight-tolerance aluminum and steel."},
            {Icon: Layers, title: "Waterjet", desc: "Flow Mach 500 with dynamic head; 48×120″ envelopes, composites to steel."},
            {Icon: Ruler, title: "Fixturing & Tooling", desc: "Custom jigs, pallets, and fixtures for high repeatability."},
            {Icon: Cpu, title: "Engineering Support", desc: "DFM/DFA, CAM programming, 2D DXF nesting, and prototyping."},
            {Icon: Package, title: "Assembly & Kitting", desc: "Turnkey subassemblies, hardware install, labeling, and packaging."},
            {Icon: Truck, title: "Logistics", desc: "Just-in-time deliveries, blanket POs, and drop-ship options."},
          ].map((f, i) => <Feature key={i} {...f} />)}
        </div>
      </section>

      <section id="equipment" className="container py-16 md:py-24 border-y bg-neutral-50">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Equipment</h2>
          <p className="text-neutral-700 mt-2 max-w-2xl">A snapshot—expandable to a full equipment page later.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name: "Flow Mach 500 Waterjet", spec: "5-axis dynamic head, 48×120″ envelope"},
            {name: "Haas VF-Series Mills", spec: "High-speed machining, probing, 4th-axis ready"},
            {name: "Router & Forming", spec: "Large-format routing, plastics & composites"},
          ].map((m, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader><CardTitle>{m.name}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-neutral-700">{m.spec}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-b from-neutral-50 to-white border-t">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready for a quote?</h2>
            <p className="text-neutral-700 mt-2 max-w-xl">Send a STEP, DXF, or drawing—our team will review DFM, turnaround, and pricing options within one business day.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5"/> NDAs welcome; secure upload portal</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5"/> Aluminum, steels, stainless, plastics, composites</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5"/> Standard and metric stock on hand</li>
            </ul>
          </div>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Quick Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <Textarea placeholder="What can we make for you?" rows={4} />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-neutral-600">We’ll reply within 1 business day.</div>
                  <Button type="submit" className="rounded-2xl">Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="container py-10 text-sm text-neutral-600 grid md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold">Action Manufacturing Services</div>
            <div>4373 Lilburn Industrial Way, Lilburn, GA 30047</div>
            <div>Mon–Fri 8a–5p ET • (770) ###-####</div>
          </div>
          <div className="md:text-right">© {new Date().getFullYear()} Action Engineering / AMS</div>
        </div>
      </footer>
    </div>
  );
}
