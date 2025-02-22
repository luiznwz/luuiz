"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {}

export function ContactForm(props: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const isValid = await trigger();

    if (!isValid) {
      setTimeout(() => {
        setIsLoading(false);
        toast.error(
          "An error occurred while submitting the form. Please try again."
        );
      }, 500);
      return;
    }

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/luizrenangomes77@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5 md:gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-medium text-secondary-foreground"
        >
          Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-foreground font-normal text-base leading-[1.65]"
        >
          I am currently open to new opportunities. If you{"'"}d like to get in
          touch, please feel free to{" "}
          <a
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400"
            href="mailto:luizrenan179@gmail.com"
          >
            email
          </a>{" "}
          me.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 max-w-[692px]"
        >
          <form onSubmit={onSubmit} method="POST">
            <input type="hidden" name="_subject" value="New contact on site" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-secondary-foreground" htmlFor="name">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-secondary-foreground" htmlFor="email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Label className="text-secondary-foreground" htmlFor="message">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                {...register("message", {
                  required: true,
                })}
              />
            </div>

            <Button
              className="mt-4"
              type="submit"
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </motion.section>
    </>
  );
}
