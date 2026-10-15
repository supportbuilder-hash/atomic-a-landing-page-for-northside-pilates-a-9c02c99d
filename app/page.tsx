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
type ScheduleDayItem = { day: string; classes: { time: string; name: string; instructor: string }[] };

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
  const scheduleDays = (
    Array.isArray(t.raw("home.schedule.days")) ? t.raw("home.schedule.days") : []
  ) as ScheduleDayItem[];

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

      {/* WEEKLY SCHEDULE */}
      <Reveal>
        <section id="schedule" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t("home.schedule.eyebrow")}
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t("home.schedule.title")}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t("home.schedule.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {scheduleDays.map((day, i) => (
              <Reveal key={day.day} delay={i * 0.04}>
                <div className="surface-elevated h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold">{day.day}</h3>
                  </div>
                  <div className="mt-4">
                    {day.classes.map((cls, ci) => (
                      <div key={cls.time + cls.name} className={cn(ci !== 0 && "mt-2 border-t border-border/60 pt-2")}>
                        <p className="text-sm font-medium text-primary">{cls.time}</p>
                        <p className="text-sm font-semibold text-foreground">{cls.name}</p>
                        <p className="text-xs text-muted-foreground">{cls.instructor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
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
              {instructors.map((person, i) => (
                <Reveal key={person.name} delay={i * 0.08}>
                  <div className="surface-elevated overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={INSTRUCTOR_IMAGES[i % INSTRUCTOR_IMAGES.length] as string}
                        alt={`Portrait of ${person.name}, ${person.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold tracking-tight">{person.name}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{person.bio}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
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
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none",
                    tier.highlighted
                      ? "border-primary bg-primary text-primary-foreground shadow-glow"
                      : "surface-elevated border-border bg-card",
                  )}
                >
                  {tier.badge && (
                    <span
                      className={cn(
                        "absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-semibold",
                        tier.highlighted ? "bg-accent text-foreground" : "bg-primary/10 text-primary",
                      )}
                    >
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold tracking-tight">{tier.name}</h3>
                  <p className={cn("mt-2 text-sm", tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {tier.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold tracking-tight">{tier.price}</span>
                    <span className={cn("text-sm", tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
                      {tier.period}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#free-trial-cta"
                    className={cn(
                      "mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      tier.highlighted
                        ? "bg-card text-foreground"
                        : "bg-primary text-primary-foreground",
                    )}
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
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {studioDetails.map((detail, i) => {
                const Icon = DETAIL_ICONS[i % DETAIL_ICONS.length]!;
                return (
                  <Reveal key={detail.label} delay={i * 0.06}>
                    <div className="surface-elevated h-full rounded-2xl border border-border bg-card p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {detail.label}
                      </h3>
                      <p className="mt-1 font-display text-lg font-semibold">{detail.value}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FREE TRIAL SIGN-UP */}
      <Reveal>
        <section id="free-trial-cta" className="relative overflow-hidden bg-gradient-brand py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              {t("home.freeTrial.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
              {t("home.freeTrial.subtitle")}
            </p>
            <div className="mt-8">
              {submitted ? (
                <p className="glass-strong mx-auto max-w-md rounded-xl px-6 py-4 text-sm font-medium text-foreground">
                  {t("home.freeTrial.success")}
                </p>
              ) : (
                <form
                  onSubmit={handleTrialSubmit}
                  className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="trial-email" className="sr-only">
                    {t("home.freeTrial.emailLabel")}
                  </label>
                  <input
                    id="trial-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("home.freeTrial.emailPlaceholder")}
                    className="glass-strong flex-1 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("home.freeTrial.submitLabel")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
