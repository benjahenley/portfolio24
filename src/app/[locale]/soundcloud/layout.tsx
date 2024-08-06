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
        <aside className="relative h-[100h] hidden md:block md:w-[10%] lg:w-[10%] xl:w-1/5 p-0 m-0 bg-white dark:bg-[#1f2937]">
          <Leftbar locale={locale} />
        </aside>
        <main className="m-0 md:w-[90%] lg:m-0 w-full lg:w-3/5 flex-1 border-l border-r border-gray-300 dark:border-gray-600">
          {children}
        </main>

        <aside className="relative hidden p-2 pl-5 lg:block lg:w-[30%] xl:w-1/5 bg-white dark:bg-[#1f2937]">
          <div
            style={{ width: "inherit" }}
            className="lg:max-w-[280px] overflow-hidden xl:max-w-[230px] 2xl:max-w-[280px] fixed dark:text-white top-2 pt-4">
            <RightBarSC locale={locale}></RightBarSC>
          </div>
        </aside>
      </div>
    </div>
  );
}
