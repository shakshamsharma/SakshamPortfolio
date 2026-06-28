"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personal } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="py-6">
      <div className="container">
        <Card className="border-white/10 bg-white/[0.05]">
          <CardContent className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl font-semibold text-primary">Let&apos;s Connect</p>
              <p className="mt-1 text-sm text-white/60">
                I&apos;m open to discussing new opportunities and interesting projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                <a href={`mailto:${personal.email}`}>
                  <Mail />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="secondary" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                <a href={personal.github} target="_blank" rel="noreferrer">
                  <Github />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="secondary" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                <a href={personal.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
