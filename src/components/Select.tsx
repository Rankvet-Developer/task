import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

let initialState = [
'a1', 'a2', 'a3', 'a4', 'c5', 'f8', 'cf', 'kf', 'de', 'fi', 'bg', 'der5'
];

export default function Select() {
  const [insert, setInsert] = useState("");
  const [focus, setFocus] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagList, settagList] = useState<string[]>(initialState);

  const removeTags = (indexRemove: any) => {
    setTags(tags.filter((_, index) => index !== indexRemove));
  };

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

  const handleInsert = () => {
    setTags((prev) => {
      const tags = [...prev];
      tags.push(insert);
      return tags;
    });
    settagList((prev) =>{
      const tagList = [...prev]
      tagList.push(insert)
      return tagList
    })
    setInsert("");
  };

  return (
    <section className="w-1/4 mx-auto px-1 mt-10">
      <div
        className="border rounded p-2"
        onClick={() => setFocus(true)}
      >
        <div className="flex items-center">
        <div className="flex flex-wrap gap-1 overflow-hidden w-[95%]">
            {tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center bg-[#f0f0f0] rounded"
                >
                  <span className="mx-1">{item}</span>
                  <RxCross2
                    size={15}
                    className="cursor-pointer"
                    onClick={() => removeTags(index)}
                  />
                </div>
              );
            })}
          <div className="inline-flex">
            <div
            style={{width:`${insert ? (insert.length * 8) + "px" :'4px' }`}}
            >
              <input
                type="text"
                value={insert}
                onChange={(e) => setInsert(e.target.value as any)}
                className="outline-none border-none"
                style={{width:'100%'}}
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
            className="cursor-pointer hover:bg-slate-100 hover:rounded p-1 overflow-hidden"
            onClick={handleInsert}
          >
            <span className="truncate">
            {insert}

            </span>
          </div>
        ) : (
          <div className="h-64 overflow-hidden overflow-y-scroll">
            {tagList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-slate-100 hover:rounded p-1"
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
