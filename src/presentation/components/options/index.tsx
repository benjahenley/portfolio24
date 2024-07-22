import { DarkModeToggle } from "@/presentation/components/ui/DarkModeToggle";

export function Options({ className }: any) {
  return (
    <div
      className={`flex flex-col p-2  z-20 border-2 border-beige rounded bg-white lg:flex-row lg:justify-between lg:w-1/2 lg:top-auto lg:border-none lg:bg-transparent ${className}`}>
      <DarkModeToggle></DarkModeToggle>
      <DarkModeToggle></DarkModeToggle>
    </div>
  );
}
