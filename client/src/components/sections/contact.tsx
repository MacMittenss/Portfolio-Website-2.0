import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "scttjssy@gmail.com",
    href: "mailto:scttjssy@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Swedesboro, New Jersey",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MacMittenss",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcusprater",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:scttjssy@gmail.com",
  },
];

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20" style={{ backgroundColor: 'black' }}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/30">
              Get In Touch
            </Badge>
            <h2 className="text-5xl font-black mb-8 font-['Poppins']">
              Let's Build <span className="gradient-text">Something Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your vision into reality? Let's collaborate and create exceptional digital experiences together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-recaptcha="true" 
                  name="contact"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Enter Message"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="my-4">
                    <div 
                      className="g-recaptcha" 
                      data-sitekey="6LdnkKEqAAAAAPvyqoRAmjXxvE6evlb5z-5Ol90Y"
                    ></div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-lg py-6 rounded-full"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          {info.href === "#" ? (
                            <p className="text-muted-foreground">{info.value}</p>
                          ) : (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="icon"
                          className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300"
                          asChild
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-to-br from-primary/10 to-purple-500/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Ready to start a project?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    I'm available for freelance work and full-time opportunities.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <a href="mailto:scttjssy@gmail.com">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
