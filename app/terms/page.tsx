import { FooterPages } from "@/components/footer-pages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Terms() {
  return (
    <div className="relative">
      <main className="mt-20 px-6">
        <div className="max-w-[560px] mx-auto flex flex-col space-y-4">
          <div className="space-y-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Terms</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h3 className="pt-4 text-2xl font-medium tracking-tighter sm:text-xl">
              Terms of Service
            </h3>
            <p className="text-muted-foreground text-sm">
              Please read these terms of service carefully before using this
              website.
              <br />
              <br />
              <strong>Conditions of Use</strong>
              <br />
              We will provide their services to you, which are subject to the
              conditions stated below in this document. Every time you visit
              this website, use its services or make a purchase, you accept the
              following conditions. This is why we urge you to read them
              carefully.
              <br /> <br />
              <strong>Privacy Policy</strong>
              <br />
              Before you continue using our website we advise you to read our
              privacy policy regarding our user data collection. It will help
              you better understand our practices.
              <br /> <br />
              <strong> Applicable Law </strong>
              <br />
              By visiting this website, you agree that the laws of the [your
              location], without regard to principles of conflict laws, will
              govern these terms of service, or any dispute of any sort that
              might come between [Your Company] and you, or its business
              partners and associates.
              <br /> <br />
              <strong> Disputes </strong>
              <br />
              Any dispute related in any way to your visit to this website or to
              products you purchase from us shall be arbitrated by state or
              federal court [your location] and you consent to exclusive
              jurisdiction and venue of such courts.
              <br /> <br /> <strong> Comments, Reviews, and Emails </strong>
              <br />
              Visitors may post content as long as it is not obscene, illegal,
              defamatory, threatening, infringing of intellectual property
              rights, invasive of privacy or injurious in any other way to third
              parties. Content has to be free of software viruses, political
              campaign, and commercial solicitation. <br /> <br /> We reserve
              all rights (but not the obligation) to remove and/or edit such
              content. When you post your content, you grant [Your Company]
              non-exclusive, royalty-free and irrevocable right to use,
              reproduce, publish, modify such content throughout the world in
              any media. <br /> <br />{" "}
              <strong> License and Site Access </strong> <br /> We grant you a
              limited license to access and make personal use of this website.
              You are not allowed to download or modify it. This may be done
              only with written consent from us. <br /> <br />{" "}
              <strong> User Account </strong> <br /> If you are an owner of an
              account on this website, you are solely responsible for
              maintaining the confidentiality of your private user details
              (username and password). You are responsible for all activities
              that occur under your account or password. <br /> <br /> We
              reserve all rights to terminate accounts, edit or remove content
              and cancel orders in their sole discretion. <br /> <br />{" "}
              <strong> Refund Policy </strong> <br /> We stand behind our
              product and your satisfaction with it is important to us. However,
              because our products are digital goods delivered via Internet
              download we generally offer no refunds. If you change your mind
              about your purchase and you have not downloaded our product, we
              will happily issue you a refund upon your request. Refund requests
              made after you have downloaded our product are handled on a case
              by case basis and are issued at our sole discretion. Refund
              requests, if any, must be made within thirty (30) days of your
              original purchase. <br /> <br />{" "}
              <strong> Contact Information </strong> <br /> If you have any
              questions about our Terms of Service, please contact us at: <br />{" "}
              <br /> <strong> [Your Company Name] </strong> <br />{" "}
              <strong> [email protected] </strong> <br />{" "}
              <strong> [123-456-7890] </strong>
            </p>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-[hsl(210,20%,10%)] pointer-events-none"></div>
      <FooterPages />
    </div>
  );
}
