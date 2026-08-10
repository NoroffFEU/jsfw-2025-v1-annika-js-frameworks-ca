import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { contactSchema, type ContactFormData } from "../schemas/contactSchema";

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      {isSubmitted && (
        <p className="mt-4" role="status" style={{ whiteSpace: "pre-wrap" }}>
          {"Thank you!\nWe'll get back to you as soon as possible."}
        </p>
      )}
      <form
        className="mt-8 max-w-xl space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label className="mb-2 block font-medium" htmlFor="fullName">
            Full name
          </label>
          <input
            className="w-full rounded-md border bg-card px-3 py-2"
            id="fullName"
            type="text"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium" htmlFor="subject">
            Subject
          </label>
          <input
            className="w-full rounded-md border bg-card px-3 py-2"
            id="subject"
            type="text"
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-md border bg-card px-3 py-2"
            id="email"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-32 w-full rounded-md border bg-card px-3 py-2"
            id="message"
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button className="mt-4 px-6 py-3" type="submit" size="lg">
          Submit
        </Button>
      </form>
    </section>
  );
}
