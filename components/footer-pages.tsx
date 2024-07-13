export default interface FooterPagesProps {}

export const FooterPages: React.FC<FooterPagesProps> = () => {
  return (
    <footer className="w-full max-w-3xl mx-auto">
      <div className={`pt-6 pb-6 flex flex-col gap-4 border-t border-main`}>
        <p className="text-sm text-center align-center text-muted-foreground">
          &copy; {new Date().getFullYear()}&nbsp;— Build by {""}
          <a className="hover:underline hover:underline-offset-2" href="/">
            Luiz Renan
          </a>
        </p>
      </div>
    </footer>
  );
};
