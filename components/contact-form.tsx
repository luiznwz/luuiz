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
    <section className="flex flex-col gap-5 md:gap-6">
      <h2 className="font-medium">Contact</h2>
      <p className="text-sm">
        Im currently open to work. If you want to get in touch with me, you can
        send me an email at{" "}
        <a className="text-green-400" href="mailto:luiz@gmaul.com">
          luiz@
        </a>
      </p>
      <div className="space-y-4 max-w-[560px]">
        <form
          onSubmit={onSubmit}
          action="https://formsubmit.co/71d199891767050bd2e70920bdc0ba78"
          method="POST"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="name">
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
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="email">
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
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
          </div>
          <div className="mt-2 space-y-2">
            <Label className="text-sm" htmlFor="message">
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
          <div className="flex mt-2">
            <Button type="submit" variant="outline" className="btn">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
// {
//   <div className="space-y-4 max-w-[560px]">
//     <form
//       onSubmit={onSubmit} // Ligação do handleSubmit com a função onSubmit
//       target="_blank"
//       action="https://formsubmit.co/luizrenan179@gmail.com"
//       method="POST"
//       className="space-y-4"
//     >
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label className="text-sm" htmlFor="name">
//             Name
//           </Label>
//           <Input
//             id="name"
//             placeholder="Enter your name"
//             {...register("name", { required: true, maxLength: 100 })}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm">Name is required</p>
//           )}
//         </div>
//         <div className="space-y-2">
//           <Label className="text-sm" htmlFor="email">
//             Email
//           </Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             {...register("email", { required: true })}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">Email is required</p>
//           )}
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Label className="text-sm" htmlFor="message">
//           Message
//         </Label>
//         <Textarea
//           id="message"
//           placeholder="Type your message here."
//           className="min-h-[120px]"
//           {...register("message", { required: true, maxLength: 2000 })}
//         />
//         {errors.message && (
//           <p className="text-red-500 text-sm">Message is required</p>
//         )}
//       </div>
//       <div className="flex gap-2">
//         <Button type="submit" variant="outline" className="btn">
//           Submit
//         </Button>
//       </div>
//     </form>
//   </div>;
// }
