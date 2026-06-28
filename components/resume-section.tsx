"use client";

import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personal } from "@/data/portfolio";

export function ResumeSection() {
  return (
    <section className="py-6">
      <div className="container">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-lg bg-primary/15 text-primary">
                <FileText className="size-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Resume</h2>
                <p className="mt-1 text-sm text-white/60">Preview or download the latest PDF resume.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm">
                <a href={personal.resumePath} target="_blank" rel="noreferrer">
                  <FileText />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm" className="border-white/10 bg-white/5 text-white">
                <a href={personal.resumePath} download>
                  <Download />
                  Download
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
