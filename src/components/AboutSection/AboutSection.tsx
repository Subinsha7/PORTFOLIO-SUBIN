import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";
// @ts-ignore
import { buttonVariants } from "../lightswind/button";
import { Download } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl text-justify leading-relaxed">
        I'm a Python Full Stack developer who enjoys building web applications that actually work and are easy to use.
        I focus on creating solid back-end systems and smooth user experiences.
        I like solving problems and writing clean, maintainable code, and I work well with others to get things done.
        I enjoy making web applications that are simple, reliable, and enjoyable for users. I work with Python, Django,
        HTML, CSS, JavaScript, Bootstrap, and a bit of PHP. What motivates me most is taking an idea and turning it into
        something real that solves a problem. Every project is a chance to learn something new and get better at what I
        do. I like collaborating with people who are as passionate about technology as I am, and I'm always looking to
        contribute to projects that matter and improve my skills along the way.
      </p>

      <div className="pt-4">
        <a
          href="/SUBIN-TS.pdf"
          download="Subin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "cursor-pointer")}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </div>

      <Separator />
    </motion.div>
  );
};
