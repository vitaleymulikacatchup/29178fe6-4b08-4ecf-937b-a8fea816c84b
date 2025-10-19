use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { BarChart, CheckCircle, Lightbulb, Plug } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern desk setup with neon lighting and a desktop computer displaying colorful images."},
  {"id":"about-image","url":"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Overhead view of a diverse team in a business meeting using laptops and tablets."},
  {"id":"features-image-1","url":"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk."},
  {"id":"features-image-2","url":"https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed view of HTML and CSS code on a computer screen, concept of programming."},
  {"id":"product-image-1","url":"https://images.pexels.com/photos/34353879/pexels-photo-34353879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A smartphone on a box showing a software update screen, creating a tech-focused scene."},
  {"id":"product-image-2","url":"https://images.pexels.com/photos/8284724/pexels-photo-8284724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman types on a laptop using a messaging app in a modern office setting."},
  {"id":"product-image-3","url":"https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A designer sketches a mobile app prototype on paper at an office desk, focusing on creativity and design."}
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[{ name: "About", id: "about" }, { name: "Features", id: "features" }, { name: "Pricing", id: "pricing" }, { name: "Contact", id: "contact" }]}
          brandName="Webild"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Platform"
            description="Create exceptional digital experiences with us"
            imagePosition="right"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Get Started", href: "features" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our mission and values that propel us forward"
            bulletPoints={[
              { title: "Innovation", description: "We push boundaries", icon: Lightbulb },
              { title: "Quality", description: "Excellence in every detail", icon: CheckCircle }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Features"
            description="Discover the innovative tools and capabilities we offer"
            features={[
              { title: "Advanced Analytics", description: "Gain insights", icon: BarChart, button: { text: "Learn More", href: "#" } },
              { title: "Seamless Integration", description: "Connect with ease", icon: Plug, button: { text: "Learn More", href: "#" } }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Flexible Pricing Plans"
            description="Choose the best plan for your needs"
            plans={[
              { id: "1", price: "$29/mo", name: "Starter Plan", features: ["Up to 5 users", "Basic support", "10GB storage"], buttons: [ { text: "Get Started", href: "#" }, { text: "Contact Sales", href: "contact" } ] },
              { id: "2", badge: "Popular", price: "$49/mo", name: "Pro Plan", features: ["Unlimited users", "Priority support", "100GB storage"], buttons: [ { text: "Get Started", href: "#" }, { text: "Contact Sales", href: "contact" } ] }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Join Our Newsletter"
            description="Subscribe for the latest updates."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}