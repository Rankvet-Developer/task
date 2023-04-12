import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

let initialState = [
  "a1",
  "a2",
  "a3",
  "a4",
  "c5",
  "f8",
  "cf",
  "kf",
  "de",
  "fi",
  "bg",
  "der5",
];

export default function Select() {
  const [insert, setInsert] = useState("");
  const [focus, setFocus] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagList, setTagList] = useState<string[]>(initialState);

  const selectRef = useRef(null);

  const removeTags = (indexRemove: any) => {
    setTags(tags.filter((_, index) => index !== indexRemove));
  };

  function handleDivClick() {
    selectRef?.current?.focus();
  }
  useEffect(() => {
    let handleDiv = () => {
      setFocus(false);
    };
    document.addEventListener("mouseup", handleDiv);
  }, []);

  const handleToggle = (e: any, item: any) => {
    if (tags.indexOf(e.target.textContent) === -1) {
      setTags([...tags, e.target.textContent]);
    } else {
      setTags(tags.filter((value) => value !== item));
    }
  };

  const handleInsert = (e: any) => {
    setTags((prev) => {
      const tags = [...prev];
      if (tags.includes(e.target.textContent) === false) {
        tags.push(insert);
      }
      return tags;
    });
    setTagList((prev) => {
      const tagList = [...prev];
      if (tagList.includes(e.target.textContent) === false) {
        tagList.push(insert);
      }
      return tagList;
    });
    setInsert("");
  };
  console.log(insert.trim().length !== 1);
  return (
    <section className="w-1/4 mx-auto px-1 mt-10">
      {/* tags div */}
      <div
        className="border rounded p-2 cursor-text hover:border hover:border-blue-400"
        onClick={() => setFocus(true)}
      >
        <div className="flex items-center" onClick={handleDivClick}>
          <div className="flex flex-wrap gap-1 w-[95%]">
            {tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center bg-[#f0f0f0] rounded truncate"
                >
                  <span className="mx-1 overflow-hidden">{item}</span>
                  <span>
                  <RxCross2
                    size={15}
                    className="cursor-pointer"
                    onClick={() => removeTags(index)}
                  />
                  </span>
                </div>
              );
            })}
            <div className="inline-flex overflow-hidden">
              <div
                style={{
                  width: `${insert ? insert.length * 8 + "px" : "4px"}`,
                }}
              >
                <input
                  type="text"
                  value={insert}
                  onChange={(e) => setInsert(e.target.value as any)}
                  className="outline-none border-none"
                  style={{ width: "100%" }}
                  ref={selectRef}
                />
              </div>
            </div>
          </div>
          <div className="w-[5%]">
            <span>
              <AiOutlineDown />
            </span>
          </div>
        </div>
      </div>

      {/* list div */}
      <div className={`p-2 shadow mt-1 ${focus ? "visible" : "hidden"}`}>
        {insert ? (
          <div
            className="cursor-pointer hover:bg-slate-100 hover:rounded p-1 overflow-hidden truncate"
            onClick={(e) => handleInsert(e)}
          >
            <span>{insert}</span>
          </div>
        ) : (
          <div className="h-64 overflow-hidden overflow-y-scroll">
            {tagList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-slate-100 hover:rounded p-1 ${
                    insert ? "bg-blue-300" : ""
                  }`}
                  onClick={(e) => handleToggle(e, item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
