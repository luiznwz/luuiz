import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export interface ContactFormProps {}

export function ContactForm(props: ContactFormProps) {
  return (
    <section className="flex flex-col gap-5 md:gap-6">
      <h2>Contact</h2>
      <p className="text-sm">
        Im currently open to work. If you want to get in touch with me, you can
        send me an email at{" "}
        <a className="text-green-400" href="mailto:luiz@gmaul.com">
          Here
        </a>
      </p>
      <div className="space-y-4 max-w-[560px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="email">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm" htmlFor="message">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            className="min-h-[120px]"
          />
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} className="btn">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
