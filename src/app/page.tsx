import Image from "next/image";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-ubuntu-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px]">
        <Image
          className="dark:invert"
          src="/pb-logo.svg"
          alt="Piotr Blazejak logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="font-[family-name:var(--font-ubuntu-sans)] font-bold uppercase">
          Portfolio & Blog
        </h1>
      </main>
    </div>
  );
}
