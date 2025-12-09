"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";
import TORSHA from "../../assets/img/TORSHA.png";
import GUIDZI from "../../assets/img/GUIDZI.png";
import INVENTORY from "../../assets/img/inventory.png";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "TORSHA - AUTOMOTIVE HUB",
      subtitle:
        "TORSHA is a complete automotive ecosystem offering garage services, vehicle rentals, and a marketplace to buy or sell cars. A single platform to manage bookings, explore garages, and handle all automotive needs.",
      date: "",
      link: "https://github.com/Subinsha7/TORSHA-The_Automotive_Hub",
      image: TORSHA,
    },
    {
      id: 2,
      title: "PLACEMENT GUIDANCE SYSTEM",
      subtitle:
        "The Placement Guidance System is a comprehensive web platform designed to assist college students in their placement journey.",
      date: "",
      link: "https://github.com/Subinsha7/Guidzi-AI_College_Placement_Guidance_System",
      image: GUIDZI,
    },
    {
      id: 3,
      title: "INVENTORY SYSTEM",
      subtitle:
        "The Inventory Management System is a Django-based web app that enables staff to manage products, track stock, and record sales and purchases with secure login and user-friendly interfaces.",
      date: "",
      link: "https://github.com/Subinsha7/LOCALSHOP-INVENTORY",
      image: INVENTORY,
    },

  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
