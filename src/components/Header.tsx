import clsx from "clsx";

const separatorClasses = "before:absolute before:w-full before:bottom-0 before:block before:content-[''] before:border-b-[1px] before:border-b-solid before:border-text";

export function Header(props: {
  title: string;
  href?: string;
  separator?: true;
}) {
  const href = () => props.title.replaceAll("-", "").toLowerCase();

  return (
    <div class="flex relative target:[&_.title]:border-r-solid target:[&_.title]:bg-yellow-200/10 relative text-2xl font-medium items-center relative [&_.anchor]:hover:block">
      <a class="anchor hover:block hidden absolute w-[20px] left-[-20px] text-text decoration-none cursor-pointer" href={`#${props.href ?? href()}`}>§</a>
      <div id={props.href ?? href()} class={clsx("title w-full border-r-2 border-orange-400 pb-1", props.separator && separatorClasses)}>{props.title}</div>
    </div>
  );
}
