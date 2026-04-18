"use client";

import { Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useContactForm } from "../hooks";
import { INITIAL_FORM_DATA } from "../constants";

/**
 * Component that represents the contact form section.
 * @returns The contact form section.
 */
export const ContactForm = () => {
  const { t } = useLanguage();
  const { formData, handleChange, handleSubmit } =
    useContactForm(INITIAL_FORM_DATA);

  const form = t.contact.form;

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-foreground mb-6">
        {form.title}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {form.name}
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder={form.namePlaceholder}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {form.email}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder={form.emailPlaceholder}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            {form.message}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
            placeholder={form.messagePlaceholder}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          {form.submit}
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};