import { Combobox, createListCollection } from "@ark-ui/react";
import { useMemo } from "react";
import { useDebounce } from "../hooks/use-debounce";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { css } from "../../styled-system/css";
import { ark } from "@ark-ui/react/factory";
import { styled } from "../../styled-system/jsx";
// import { input } from "../../styled-system/recipes";

// export const Input = styled(ark.input, input);

const container = css({
  display: "inline-flex",
  gap: 4,
});

export const Search = ({
  onSelect,
}: {
  onSelect: (details: Combobox.ValueChangeDetails) => void;
}) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useDebounce<string>("", 300);
  const { data: { results: items } = {} } = useQuery<{
    results: {
      id: number;
      thumb: string;
      title: string;
    }[];
  }>({
    queryKey: [
      "/database/search",
      { params: { query: input, type: "artist" } },
    ],
    // enabled: !!input,
    enabled: !queryClient.getQueryData([
      "/database/search",
      { params: { query: input, type: "artist" } },
    ]),
  });

  const collection = useMemo(() => {
    return createListCollection({
      items: items?.map(({ title, id }) => ({ value: id, label: title })) ?? [],
    });
  }, [items]);

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setInput(details.inputValue);
  };

  return (
    <Combobox.Root
      className={css({
        width: "md",
        p: 8,
      })}
      multiple
      onInputValueChange={handleInputChange}
      collection={collection}
      onValueChange={onSelect}
    >
      <Combobox.Control className={container}>
        <Combobox.Input
          // placeholder={}
          className={css({
            borderColor: "neutral.700",
            border: "1px solid",
            borderRadius: "md",
            px: 4,
          })}
        ></Combobox.Input>
        <Combobox.Trigger>Open</Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content
          className={css({
            background: "neutral.800",
            borderColor: "neutral.700",
            border: "1px solid",
            borderRadius: "md",
            p: 4,
          })}
        >
          <Combobox.List />
          <Combobox.ItemGroup
            className={css({ display: "flex", flexDir: "column" })}
          >
            {collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item} className={container}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};
