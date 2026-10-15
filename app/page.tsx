"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Activity, Heart, User, Clock, Sparkles, Star, Mail, Info, Calendar, Check, ArrowRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ClassTypeItem = { title: string; description: string; duration: string; level: string };
type InstructorItem = { name: string; role: string; bio: string };
type PricingItem = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  badge: string;
  highlighted: boolean;
};
type DetailItem = { label: string; value: string };

const CLASS_ICONS = [Activity, Heart, User, Clock, Sparkles, Star];
const INSTRUCTOR_IMAGES = [
  "/images/female-pilates-instructor-portrait.jpg",
  "/images/male-pilates-instructor-portrait.jpg",
  "/images/pilates-instructor-teaching-class.jpg",
];
const DETAIL_ICONS = [Info, Clock, Mail, Calendar];

export default function HomePage() {
  const t = useTranslations();

  const classTypes = (
    Array.isArray(t.raw("home.classTypes.items")) ? t.raw("home.classTypes.items") : []
  ) as ClassTypeItem[];
  const instructors = (
    Array.isArray(t.raw("home.instructors.items")) ? t.raw("home.instructors.items") : []
  ) as InstructorItem[];
  const pricingTiers = (
    Array.isArray(t.raw("home.pricing.items")) ? t.raw("home.pricing.items") : []
  ) as PricingItem[];
  const studioDetails = (
    Array.isArray(t.raw("home.studioInfo.details")) ? t.raw("home.studioInfo.details") : []
  ) as DetailItem[];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleTrialSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <Reveal>
        <section id="home" className="relative overflow-hidden bg-mesh">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-6"
            >
              <motion.span
                variants={fadeInUp}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {t("home.hero.eyebrow")}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
              >
                {t("home.hero.titleStart")} <span className="text-gradient">{t("home.hero.titleAccent")}</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {t("home.hero.subtitle")}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#free-trial-cta"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("home.hero.primaryCta")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#class-types"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("home.hero.secondaryCta")}
                </a>
              </motion.div>
            </motion.div>
            <Reveal delay={0.15}>
              <div className="glass-strong relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-glow">
                <Image
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/a2b1b40244414f2f8b120058c860a261.jpg"
                  alt="A reformer Pilates class in progress at a calm, sunlit studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* CLASS TYPES */}
      <Reveal>
        <section id="class-types" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("home.classTypes.eyebrow")}
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("home.classTypes.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("home.classTypes.subtitle")}
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {classTypes.map((item, i) => {
              const Icon = CLASS_ICONS[i % CLASS_ICONS.length]!;
              return (
                <Reveal key={item.title} delay={i * 0.06} className={cn(i === 0 && "sm:col-span-2 lg:col-span-2")}>
                  <div className="surface-elevated h-full rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {item.level}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                    <p className="mt-4 text-sm font-medium text-foreground/70">{item.duration}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* INSTRUCTORS */}
      <Reveal>
        <section id="instructors" className="bg-muted/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t("home.instructors.eyebrow")}
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("home.instructors.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t("home.instructors.subtitle")}
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {instructors.map((person, i) => {
                const image = INSTRUCTOR_IMAGES[i % INSTRUCTOR_IMAGES.length]!;
                return (
                  <Reveal key={person.name} delay={i * 0.06}>
                    <div className="surface-elevated h-full rounded-2xl border border-border bg-card p-7 text-center transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none">
                      <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full">
                        <Image
                          src={image}
                          alt={person.name}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{person.name}</h3>
                      <p className="text-sm font-medium text-primary">{person.role}</p>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{person.bio}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* PRICING */}
      <Reveal>
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("home.pricing.eyebrow")}
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("home.pricing.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("home.pricing.subtitle")}
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.06}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none",
                    tier.highlighted ? "border-primary bg-card shadow-glow" : "border-border bg-card"
                  )}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold tracking-tight">{tier.name}</h3>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{tier.description}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#free-trial-cta"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {tier.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* STUDIO INFO */}
      <Reveal>
        <section id="studio-info" className="bg-muted/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t("home.studioInfo.eyebrow")}
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("home.studioInfo.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t("home.studioInfo.subtitle")}
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {studioDetails.map((detail, i) => {
                const Icon = DETAIL_ICONS[i % DETAIL_ICONS.length]!;
                return (
                  <Reveal key={detail.label} delay={i * 0.06}>
                    <div className="surface-elevated flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                        <p className="font-semibold text-foreground">{detail.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FREE TRIAL CTA */}
      <Reveal>
        <section id="free-trial-cta" className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("home.freeTrial.eyebrow")}
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("home.freeTrial.title")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t("home.freeTrial.subtitle")}
          </p>
          {submitted ? (
            <p className="mt-8 text-lg font-semibold text-primary">{t("home.freeTrial.success")}</p>
          ) : (
            <form
              onSubmit={handleTrialSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col items-stretch gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("home.freeTrial.placeholder")}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t("home.freeTrial.cta")}
              </button>
            </form>
          )}
        </section>
      </Reveal>
    </main>
  );
}
