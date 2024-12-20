import { Combobox, createListCollection } from "@ark-ui/react";
import { Portal } from "@ark-ui/react";
import { useMemo } from "react";
import { useSearch } from "../api/hooks";
import { useDebounce } from "../hooks/use-debounce";

export const Search = ({
  onSelect,
}: {
  onSelect: (details: Combobox.ValueChangeDetails) => void;
}) => {
  const [input, setInput] = useDebounce<string>("", 300);
  const { data: { artists: { items } = {} } = {} } = useSearch(
    { params: { type: ["artist"], q: input } },
    { enabled: !!input }
  );

  const collection = useMemo(() => {
    return createListCollection({
      items: items?.map(({ name, id }) => ({ value: id, label: name })) ?? [],
    });
  }, [items]);

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setInput(details.inputValue);
  };

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={handleInputChange}
      onValueChange={onSelect}
    >
      <Combobox.Label>Artist</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.Trigger>Open</Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Artists</Combobox.ItemGroupLabel>
              {collection.items.map(({ value, label }) => (
                <Combobox.Item
                  key={value}
                  item={{ value, label }}
                  style={{ display: "flex", gap: "0.5rem" }}
                >
                  <Combobox.ItemText>{label}</Combobox.ItemText>
                  <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
