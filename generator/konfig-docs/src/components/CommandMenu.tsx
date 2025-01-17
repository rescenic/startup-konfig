import * as React from "react";
import { cn } from "@site/src/util/util";
import { Button } from "@site/src/components/ui/button";
import { useHistory } from "@docusaurus/router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@site/src/components/ui/command";
import { DialogProps } from "@radix-ui/react-dialog";
import companies from "@site/src/pages/sdk/companies.json";
import { useRef } from "react";

type Company = (typeof companies)[number];

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // https://github.com/pacocoursey/cmdk/issues/233#issuecomment-1991365294
  const listRef = useRef<HTMLDivElement>(null);
  const scrollId = useRef<ReturnType<typeof setTimeout>>();

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start font-normal rounded-[0.5rem] bg-white text-slate-500 shadow-none sm:pr-12 lg:w-[700px]"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">
          Search all APIs by name, use case, and more...
        </span>
        <span className="inline-flex lg:hidden">Search all APIs...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        commandProps={{
          filter: (value, search, keywords) => {
            const index = [
              value.toLowerCase(),
              ...keywords.map((keyword) => keyword.toLowerCase()),
            ];

            // number of items in index that search substring matches / number of keywords
            const score =
              index.filter((item) =>
                search
                  .toLowerCase()
                  .split(" ")
                  .every((term) => item.includes(term))
              ).length / index.length;

            return score;
          },
        }}
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput
          onValueChange={() => {
            // https://github.com/pacocoursey/cmdk/issues/233#issuecomment-1991365294

            // clear pending scroll
            clearTimeout(scrollId.current);

            // the setTimeout is used to create a new task
            // this is to make sure that we don't scroll until the user is done typing
            // you can tweak the timeout duration ofc
            scrollId.current = setTimeout(() => {
              // inside your list select the first group and scroll to the top
              const div = listRef.current;
              div?.scrollTo({ top: 0 });
            }, 0);
          }}
          placeholder="Type to search all APIs..."
        />
        <CommandList ref={listRef}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {companies.map((company) => {
              return <CompanyItem key={company.company} {...company} />;
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function CompanyItem({
  company,
  favicon,
  parentCategories,
  subCategories,
  keywords,
  subpath,
  services,
}: Company) {
  const allKeywords = [
    company,
    ...keywords,
    ...parentCategories,
    ...subCategories,
    ...services,
  ];
  const history = useHistory();

  return (
    <CommandItem
      value={company}
      onSelect={() => {
        history.push(subpath);
      }}
      keywords={allKeywords}
      className="justify-between"
    >
      <div className="flex flex-row">
        <img className="h-4 w-4 mr-2" src={favicon} alt={company} />
        {company}
      </div>
      <div className="text-xs text-muted-foreground">
        {parentCategories.join(", ")}
      </div>
    </CommandItem>
  );
}
