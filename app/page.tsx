"use client"

import React from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HomeHero } from "@/components/home/home-hero"
import { HomeSectors } from "@/components/home/home-sectors"
import { HomeAbout } from "@/components/home/home-about"
import { HomeCapabilities } from "@/components/home/home-capabilities"
import { HomeWork } from "@/components/home/home-work"
import { HomeDelivery } from "@/components/home/home-delivery"
import { HomePartners } from "@/components/home/home-partners"
import { HomeTeam } from "@/components/home/home-team"
import { HomeInsights } from "@/components/home/home-insights"
import { HomeCta } from "@/components/home/home-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#000823] flex flex-col selection:bg-[#7135E5] selection:text-white">
      {/* 1. Sticky Header */}
      <SiteHeader />

      <main className="flex-1 w-full" id="main-content">
        {/* 2. Hero */}
        <HomeHero />

        {/* 3. Five-Sector Overview */}
        <HomeSectors />

        {/* 4. Group Introduction */}
        <HomeAbout />

        {/* 5. Selected Capabilities */}
        <HomeCapabilities />

        {/* 6. Featured Work */}
        <HomeWork />

        {/* 7. Delivery Approach */}
        <HomeDelivery />

        {/* 8. Partners and Technology Ecosystem */}
        <HomePartners />

        {/* 9. Leadership Team */}
        <HomeTeam />

        {/* 10. Insights */}
        <HomeInsights />

        {/* 11. Final CTA */}
        <HomeCta />
      </main>

      {/* 12. Footer */}
      <SiteFooter />
    </div>
  )
}
