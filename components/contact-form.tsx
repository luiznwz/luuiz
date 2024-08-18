"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {}

export function ContactForm(props: ContactFormProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      console.log("Form is not valid.");
      return;
    }

    console.log("Submitting form...");
  };

  return (
    <>
      <section className="flex flex-col gap-5 md:gap-6">
        <h2 className="font-medium text-secondary-foreground">Connect</h2>
        <p className="text-foreground font-normal text-base leading-[1.65]">
          I am currently open to new opportunities. If you{"'"}d like to get in
          touch, please feel free to{" "}
          <a
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400"
            href="mailto:luizrenan179@gmail.com"
          >
            email
          </a>{" "}
          me.
        </p>

        <div className="space-y-4 max-w-[644px]">
          <form
            action="https://formsubmit.co/luizrenangomes77@gmail.com"
            accept-charset="UTF-8"
            onSubmit={onSubmit}
            method="POST"
          >
            <input type="hidden" name="_subject" value="Novo contato do site" />
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
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters."}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label className="text-secondary-foreground" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <Label className="text-secondary-foreground" htmlFor="message">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="min-h-[120px]"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
            </div>
            <div className="flex mt-4">
              <Button
                type="submit"
                variant="outline"
                className="btn text-secondary-foreground"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-foreground font-normal text-base leading-[1.65]">
          You can see more of my work on{" "}
          <a
            href="https://www.linkedin.com/in/luizrenan"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400 duration-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400 duration-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          or my code on{" "}
          <a
            href="https://github.com/luiznwz"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400 duration-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </section>
    </>
  );
}
