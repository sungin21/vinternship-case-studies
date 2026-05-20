import React, {
  useState,
  useMemo,
  useCallback,
} from "react";

interface Tag {
  id: number;
  text: string;
}

interface TagListProps {
  tags: Tag[];
  filter: string;
}

interface TagInputProps {
  onAddTag: (text: string) => void;
}

const TagList = React.memo(
  ({ tags, filter }: TagListProps) => {
    console.log("Rendering TagList");

    const filteredTags = useMemo(() => {
      console.log("Filtering tags...");

      return tags.filter((tag) =>
        tag.text
          .toLowerCase()
          .includes(filter.toLowerCase())
      );
    }, [tags, filter]);

    return (
      <div>
        <h2>Filtered Tags</h2>

        <ul>
          {filteredTags.map((tag) => (
            <li key={tag.id}>
              {tag.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

const TagInput = React.memo(
  ({ onAddTag }: TagInputProps) => {
    console.log("Rendering TagInput");

    const [input, setInput] =
      useState("");

    return (
      <div>
        <input
          type="text"
          placeholder="Enter tag"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <button
          onClick={() => {
            if (input.trim()) {
              onAddTag(input);
              setInput("");
            }
          }}
        >
          Add Tag
        </button>
      </div>
    );
  }
);

function App() {
  const [tags, setTags] = useState<Tag[]>([
    { id: 1, text: "React" },
    { id: 2, text: "TypeScript" },
    { id: 3, text: "Memoization" },
  ]);

  const [filter, setFilter] =
    useState("");

  const [counter, setCounter] =
    useState(0);

  const addTag = useCallback(
    (text: string) => {
      setTags((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text,
        },
      ]);
    },
    []
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        StreamVision Dashboard
      </h1>

      <button
        onClick={() =>
          setCounter(counter + 1)
        }
      >
        Increase Counter ({counter})
      </button>

      <hr />

      <input
        type="text"
        placeholder="Filter tags..."
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      />

      <br />
      <br />

      <TagInput onAddTag={addTag} />

      <hr />

      <TagList
        tags={tags}
        filter={filter}
      />
    </div>
  );
}

export default App;