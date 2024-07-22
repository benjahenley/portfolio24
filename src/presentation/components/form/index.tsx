import { sendMail } from "@/lib/sendgrid";
import { DisplayArrowIcon } from "@/media";
import { PrimaryButton } from "@/presentation/components/ui/button";

export function Form({ className }: any) {
  function submitForm(e: any) {
    e.preventDefault();
    const target = e.target;

    var name = target.name.value;
    var email = target.email.value;
    var message = target.message.value;

    sendMail({ name, email, message });
  }
  return (
    <details
      className={`bg-gray-300 dark:bg-[#2d3748] w-full max-w-[528px] mt-5 cursor-pointer ${className}`}>
      <summary className="flex justify-between p-2">
        <h5 className="text-sm font-semibold">CONTACT FORM</h5>
        <DisplayArrowIcon className="w-4 h-4"></DisplayArrowIcon>
      </summary>
      <form className="flex flex-col gap-1 p-2" onSubmit={submitForm}>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="name">
            <h5 className="text-sm font-semibold">Name</h5>
          </label>
          <input
            name="name"
            type="text"
            className="bg-white h-6 border-2 border-transparent rounded px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="email">
            <h5 className="text-sm font-semibold">Email</h5>
          </label>
          <input
            name="email"
            type="email"
            className="bg-white h-6 border-2 border-transparent rounded px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="message">
            <h5 className="text-sm font-semibold">Message</h5>
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-white h-20 border-2 border-transparent rounded px-2 text-black"></textarea>
        </div>
        <div className="mt-4">
          <PrimaryButton>Send</PrimaryButton>
        </div>
      </form>
    </details>
  );
}
