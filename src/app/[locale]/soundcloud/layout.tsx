import { Locales } from "@/infraestructure/interfaces";
import { RightBarSC } from "@/presentation/components/pages/soundcloud/rightbar/page";
import { Leftbar } from "@/presentation/components/ui/leftbar";

export default function SoundCloudLayout({
  params: { locale },
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locales };
}>) {
  return (
    <div className="flex flex-col items-center h-full bg-white dark:bg-[#1f2937] max-w-screen overflow-hidden">
      <div className="flex w-full max-w-screen-xl h-full">
        <aside className="relative h-[100h] hidden lg:block lg:w-1/12 xl:w-1/5 p-0 m-0 bg-white dark:bg-[#1f2937]">
          <Leftbar locale={locale} />
        </aside>
        <main className="m-0 md:m-auto h-full min-h-screen lg:m-0 w-full max-w-3xl lg:w-3/5 flex-1 border-l border-r border-gray-300 dark:border-gray-600">
          {children}
        </main>

        <aside className="relative hidden p-2 pl-5 lg:block lg:w-[40%] xl:w-1/5 bg-white dark:bg-[#1f2937]">
          <RightBarSC></RightBarSC>
        </aside>
      </div>
    </div>
  );
}
