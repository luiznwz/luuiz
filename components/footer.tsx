export interface FooterProps {}

import siteConfig from "../data/site-config";

export const Footer: React.FC<FooterProps> = () => {
  const socialLinks = siteConfig.socialLinks || [];
  const navLinks = siteConfig.footerNavLinks || [];
  return (
    <footer className="text-center">
      <footer className="w-full max-w-3xl mx-auto pt-12 pb-10 sm:pt-24 sm:pb-14">
        {navLinks.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1">
            {navLinks.map((link) => (
              <a
                className=" hover:underline hover:underline-offset-2"
                href={link.href}
                key={link.text}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        <div
          className={`pt-6 flex flex-col gap-4 border-t border-main ${
            socialLinks.length > 0
              ? "sm:flex-row-reverse sm:justify-between sm:items-center"
              : ""
          }`}
        >
          {socialLinks.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {socialLinks.map((link) => (
                <a
                  className="inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2"
                  href={link.href}
                  key={link.text}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
          <p className="text-sm">
            &copy; {new Date().getFullYear()}&nbsp;
            <a className="hover:underline hover:underline-offset-2" href="/">
              {siteConfig.title}
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </footer>
  );
};
