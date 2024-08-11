export function PrimaryButton(props: any) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="block bg-[#E85A4F] text-black w-full py-2 px-4 border border-transparent rounded cursor-pointer">
      <h5 className="text-sm font-medium">{props.children}</h5>
    </button>
  );
}

export function SecondaryButton(props: any) {
  return (
    <button
      onClick={props.onClick}
      className="py-1 px-2 border-none rounded text-black">
      <h5 className="text-sm font-medium">{props.children}</h5>
    </button>
  );
}
