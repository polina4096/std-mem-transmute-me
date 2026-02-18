import clsx from "clsx";

const separatorClasses = ":uno: before:absolute before:w-full before:bottom-0 before:block before:content-[''] before:border-b-[1px] before:border-b-solid before:border-text";

export function Header(props: {
  title: string;
  href?: string;
  separator?: true;
}) {
  const href = () => props.title.replaceAll("-", "").toLowerCase();

  return (
    <div class="relative relative relative flex items-center text-2xl font-medium [&_.anchor]:hover:block target:[&_.title]:border-r-solid target:[&_.title]:bg-yellow-200/20 target:[&_.title]:dark:bg-yellow-200/10">
      <a class="anchor absolute left-[-20px] hidden w-[20px] cursor-pointer pb-2 text-text decoration-none hover:block" href={`#${props.href ?? href()}`}>§</a>
      <div id={props.href ?? href()} class={clsx("title w-full border-r-2 border-orange-400 pb-2 pl-1 -ml-1", props.separator && separatorClasses)}>{props.title}</div>
    </div>
  );
}
