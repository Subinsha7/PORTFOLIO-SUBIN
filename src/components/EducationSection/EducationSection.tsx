import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Computer Applications</CardTitle>
              <p className="text-sm text-muted-foreground">
                University of Calicut — 2022 – 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Specialized in <strong>software development</strong>,
                <strong> Database Management</strong>, and
                <strong> Software Development Practices</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Skilled in designing and developing full-stack applications</li>
                <li>Experience in managing and optimizing relational databases</li>
                <li>Strong understanding of software development principles and best practices</li>
              </ul>

            </CardContent>

          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Python Full Stack</CardTitle>
              <p className="text-sm text-muted-foreground">
                SmecLabs Kochi — 2025 – Present
              </p>
            </CardHeader>

            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Gained hands-on experience in <strong>front-end development</strong>,
                <strong> back-end development</strong>, and
                <strong> database management</strong>.
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>Built responsive UIs using HTML, CSS, JavaScript, Bootstrap & React</li>
                <li>Developed REST APIs and server-side logic using Python & Django</li>
                <li>Worked with databases (MySQL, PostgreSQL, MongoDB) for CRUD operations</li>
              </ul>
            </CardContent>

          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
